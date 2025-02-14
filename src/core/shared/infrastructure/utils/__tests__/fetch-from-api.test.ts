import { CharacterMother } from '@core/characters/domain/__mocks__/character-mother';
import { Character } from '@core/characters/domain/models';
import { CHARACTERS_BASE_URL } from '@core/characters/infrastructure/constants';
import { Wrapper } from '@core/shared/domain/models';
import { HttpError } from '@core/shared/infrastructure/exceptions';
import { fetchFromApi } from '@core/shared/infrastructure/utils/fecth-from-api';
import { http, HttpResponse } from 'msw';
import { server } from '@__tests__/server';
import { WrapperMother } from 'src/__mocks__/wrapper-mother';

describe('fetchFromApi', () => {
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
});
