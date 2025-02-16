import { CharacterMother } from '@core/characters/domain/models/__mocks__/character-mother';
import { Character } from '@core/characters/domain/models';
import { CHARACTERS_BASE_URL } from '@core/characters/infrastructure/constants';
import { Wrapper } from '@core/shared/domain/models';
import { HttpError } from '@core/shared/infrastructure/exceptions';
import { fetchFromApi } from '@core/shared/infrastructure/utils/fecth-from-api';
import { http, HttpResponse } from 'msw';
import { server } from '@__tests__/server';
import { WrapperMother } from '@__mocks__/wrapper-mother';
import { DateTime } from 'luxon';
import { CacheDto } from '@core/shared/infrastructure/models';

describe('fetchFromApi', () => {
  afterEach(() => {
    localStorage.clear();
  });

  it('Should be a function', () => {
    expect(fetchFromApi).toBeInstanceOf(Function);
  });

  it('Should return the received json', async () => {
    const wrapper = WrapperMother(CharacterMother);

    server.use(
      http.get(CHARACTERS_BASE_URL, () =>
        HttpResponse.json<Wrapper<Character>>(wrapper)
      )
    );

    const result = await fetchFromApi(new URL(CHARACTERS_BASE_URL));

    expect(result).toStrictEqual(wrapper);
  });

  it('Should throw for a invalid response code', async () => {
    server.use(
      http.get(
        CHARACTERS_BASE_URL,
        () => new HttpResponse(null, { status: 409 })
      )
    );

    await expect(fetchFromApi(new URL(CHARACTERS_BASE_URL))).rejects.toThrow(
      new HttpError(409, 'Conflict')
    );
  });

  it('Should save to the localstorage', async () => {
    const spy = vi.spyOn(Storage.prototype, 'setItem');
    const wrapper = WrapperMother(CharacterMother);

    server.use(
      http.get(CHARACTERS_BASE_URL, () =>
        HttpResponse.json<Wrapper<Character>>(wrapper)
      )
    );

    const url = new URL(CHARACTERS_BASE_URL);
    url.searchParams.append('testParam', 'testValue');

    const [path] = url.href.split('?').slice(0, 1);

    const key: Array<string> = path
      .split('/')
      .filter((part) => part !== url.protocol && part !== url.port);

    url.searchParams.forEach((paramValue, paramKey) => {
      key.push(paramKey);
      key.push(paramValue);
    });

    const joinedKey = key.join('-');

    const result = await fetchFromApi(url);

    expect(result).toStrictEqual(wrapper);
    expect(spy).toHaveBeenCalledWith(
      joinedKey,
      expect.stringContaining(JSON.stringify(wrapper))
    );
  });

  it('Should return from the localstorage', async () => {
    const spy = vi.spyOn(Storage.prototype, 'getItem');
    const wrapper = WrapperMother(CharacterMother);
    const inCache: CacheDto = {
      cachedOn: DateTime.now().toISO(),
      data: wrapper,
    };

    spy.mockReturnValueOnce(JSON.stringify(inCache));

    server.use(
      http.get(
        CHARACTERS_BASE_URL,
        () => new HttpResponse(null, { status: 409 })
      )
    );

    const url = new URL(CHARACTERS_BASE_URL);
    const result = await fetchFromApi(url);

    expect(result).toStrictEqual(wrapper);
  });

  it('Should expire the cache after 24h', async () => {
    const spy = vi.spyOn(Storage.prototype, 'getItem');
    const wrapper = WrapperMother(CharacterMother);
    const inCache: CacheDto = {
      cachedOn: DateTime.now().minus({ hours: 24 }).toISO(),
      data: wrapper,
    };

    spy.mockReturnValueOnce(JSON.stringify(inCache));

    server.use(
      http.get(
        CHARACTERS_BASE_URL,
        () => new HttpResponse(null, { status: 409 })
      )
    );

    const url = new URL(CHARACTERS_BASE_URL);

    await expect(fetchFromApi(url)).rejects.toThrow(
      new HttpError(409, 'Conflict')
    );
  });

  it('Should ignore a cache without date', async () => {
    const spy = vi.spyOn(Storage.prototype, 'getItem');
    const wrapper = WrapperMother(CharacterMother);

    spy.mockReturnValueOnce(JSON.stringify(wrapper));

    server.use(
      http.get(
        CHARACTERS_BASE_URL,
        () => new HttpResponse(null, { status: 409 })
      )
    );

    const url = new URL(CHARACTERS_BASE_URL);

    await expect(fetchFromApi(url)).rejects.toThrow(
      new HttpError(409, 'Conflict')
    );
  });
});
