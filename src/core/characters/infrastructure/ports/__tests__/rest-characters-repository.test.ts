import { CharacterMother } from '@core/characters/domain/models/__mocks__/character-mother';
import { RestCharactersRepository } from '@core/characters/infrastructure/ports/rest-characters-repository';
import { DEFAULT_RETURN_LIMIT } from '@core/shared/infrastructure/constants';
import { WrapperMother } from '@__mocks__/wrapper-mother';
import {
  CHARACTERS_BASE_URL,
  FAVORITE_CHARACTERS_KEY,
} from '@core/characters/infrastructure/constants';
import { ComicMother } from '@core/characters/domain/models/__mocks__/comic-mother';
import { faker } from '@faker-js/faker';
import { CharacterSummaryMother } from '@ui/characters/models/__tests__/character-summary-mother';

const fetchFnMock = vi.fn<(url: URL) => Promise<unknown>>(async () =>
  WrapperMother(CharacterMother)
);

describe('RestCharactersRepository', () => {
  it('Should be a function', () => {
    expect(RestCharactersRepository).toBeInstanceOf(Function);
  });

  it('Should return a characters repository', () => {
    const repository = RestCharactersRepository({ fetchFn: fetchFnMock });

    expect(repository.searchCharacters).toBeInstanceOf(Function);
    expect(repository.getCharacterComics).toBeInstanceOf(Function);
    expect(repository.getFavorites).toBeInstanceOf(Function);
    expect(repository.getCharacterById).toBeInstanceOf(Function);
    expect(repository.setIsFavorite).toBeInstanceOf(Function);
    expect(repository.unsetIsFavorite).toBeInstanceOf(Function);
  });

  describe('searchCharacters method', () => {
    it('Should call the fetchFn with the default limit', async () => {
      const repository = RestCharactersRepository({ fetchFn: fetchFnMock });

      await repository.searchCharacters();

      const calls = fetchFnMock.mock.calls;

      expect(calls.length).toEqual(1);

      const [[URLParam]] = calls;

      expect(URLParam.searchParams.get('limit')).toEqual(
        DEFAULT_RETURN_LIMIT.toString()
      );
    });

    it('Should call the fetchFn with the passed limit', async () => {
      const repository = RestCharactersRepository({ fetchFn: fetchFnMock });

      await repository.searchCharacters(undefined, 20);

      const calls = fetchFnMock.mock.calls;

      expect(calls.length).toEqual(1);

      const [[URLParam]] = calls;

      expect(URLParam.searchParams.get('limit')).toEqual('20');
    });

    it('Should call the fetchFn without the nameStartsWith param', async () => {
      const repository = RestCharactersRepository({ fetchFn: fetchFnMock });

      await repository.searchCharacters();

      const calls = fetchFnMock.mock.calls;

      expect(calls.length).toEqual(1);

      const [[URLParam]] = calls;

      expect(URLParam.searchParams.get('nameStartsWith')).toBeNull();
    });

    it('Should call the fetchFn with the nameStartsWith param', async () => {
      const repository = RestCharactersRepository({ fetchFn: fetchFnMock });

      await repository.searchCharacters('spiderman');

      const calls = fetchFnMock.mock.calls;

      expect(calls.length).toEqual(1);

      const [[URLParam]] = calls;

      expect(URLParam.searchParams.get('nameStartsWith')).toEqual('spiderman');
    });

    it('Should throw', async () => {
      const repository = RestCharactersRepository({ fetchFn: fetchFnMock });

      fetchFnMock.mockResolvedValueOnce('non compliant');

      await expect(() =>
        repository.searchCharacters('spiderman')
      ).rejects.toThrow();
    });
  });

  describe('getCharacterById method', () => {
    it('Should call the fetchFn with the character id', async () => {
      const id = 'test-id';
      const repository = RestCharactersRepository({ fetchFn: fetchFnMock });

      await repository.getCharacterById(id);

      const calls = fetchFnMock.mock.calls;

      expect(calls.length).toEqual(1);

      const [[URLParam]] = calls;

      expect(URLParam.href).toEqual(
        expect.stringContaining(`${CHARACTERS_BASE_URL}/${id}`)
      );
    });

    it('Should throw', async () => {
      const repository = RestCharactersRepository({ fetchFn: fetchFnMock });

      fetchFnMock.mockResolvedValueOnce('non compliant');

      await expect(() =>
        repository.getCharacterById('spiderman')
      ).rejects.toThrow();
    });
  });

  describe('getCharactersComic method', () => {
    it('Should call the fetchFn with the character id', async () => {
      const id = 'test-id';
      const repository = RestCharactersRepository({ fetchFn: fetchFnMock });

      fetchFnMock.mockResolvedValueOnce(WrapperMother(ComicMother));

      await repository.getCharacterComics(id);

      const calls = fetchFnMock.mock.calls;

      expect(calls.length).toEqual(1);

      const [[URLParam]] = calls;

      expect(URLParam.href).toEqual(
        expect.stringContaining(`${CHARACTERS_BASE_URL}/${id}/comics`)
      );

      expect(URLParam.searchParams.get('orderBy')).toEqual('onsaleDate');
      expect(URLParam.searchParams.get('limit')).toEqual('20');
    });

    it('Should throw', async () => {
      const repository = RestCharactersRepository({ fetchFn: fetchFnMock });

      fetchFnMock.mockResolvedValueOnce('non compliant');

      await expect(() =>
        repository.getCharacterComics('spiderman')
      ).rejects.toThrow();
    });
  });

  describe('getFavorites method', () => {
    it('Should return an empty array', async () => {
      const spy = vi.spyOn(Storage.prototype, 'getItem');
      spy.mockReturnValueOnce(null);

      const repository = RestCharactersRepository({ fetchFn: fetchFnMock });

      const favorites = await repository.getFavorites();

      expect(favorites).toStrictEqual([]);
    });

    it('Should return the favorites as an array', async () => {
      const value: Array<number> = [faker.number.int()];

      const spy = vi.spyOn(Storage.prototype, 'getItem');
      spy.mockReturnValueOnce(JSON.stringify(value));

      const repository = RestCharactersRepository({ fetchFn: fetchFnMock });

      const favorites = await repository.getFavorites();

      expect(favorites).toStrictEqual(value);
    });

    it('Should throw', async () => {
      const repository = RestCharactersRepository({ fetchFn: fetchFnMock });

      const spy = vi.spyOn(Storage.prototype, 'getItem');
      spy.mockReturnValueOnce('"not an array"');

      await expect(() => repository.getFavorites()).rejects.toThrow();
    });
  });

  describe('setIsFavorite method', () => {
    it('Should add the character', async () => {
      const character = CharacterSummaryMother();

      const repository = RestCharactersRepository({ fetchFn: fetchFnMock });

      const spy = vi.spyOn(Storage.prototype, 'setItem');
      await repository.setIsFavorite(character.id);

      expect(spy).toHaveBeenCalledWith(
        FAVORITE_CHARACTERS_KEY,
        JSON.stringify([character.id])
      );
    });

    it('Should throw', async () => {
      const repository = RestCharactersRepository({ fetchFn: fetchFnMock });

      const spy = vi.spyOn(Storage.prototype, 'getItem');
      spy.mockReturnValueOnce('"not an array"');

      await expect(() => repository.getFavorites()).rejects.toThrow();
    });
  });

  describe('unsetIsFavorite method', () => {
    it('Should remove the character', async () => {
      const character = CharacterSummaryMother();
      const character2 = CharacterSummaryMother();

      const getSpy = vi.spyOn(Storage.prototype, 'getItem');
      getSpy.mockReturnValueOnce(JSON.stringify([character.id, character2.id]));

      const repository = RestCharactersRepository({ fetchFn: fetchFnMock });

      const setSpy = vi.spyOn(Storage.prototype, 'setItem');
      await repository.unsetIsFavorite(character.id);

      expect(setSpy).toHaveBeenCalledWith(
        FAVORITE_CHARACTERS_KEY,
        JSON.stringify([character2.id])
      );
    });

    it('Should throw', async () => {
      const repository = RestCharactersRepository({ fetchFn: fetchFnMock });

      const spy = vi.spyOn(Storage.prototype, 'getItem');
      spy.mockReturnValueOnce('"not an array"');

      await expect(() => repository.getFavorites()).rejects.toThrow();
    });
  });
});
