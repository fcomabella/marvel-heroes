import { CharacterMother } from '@core/characters/domain/models/__mocks__/character-mother';
import { RestCharactersRepository } from '@core/characters/infrastructure/ports/rest-characters-repository';
import { DEFAULT_RETURN_LIMIT } from '@core/shared/infrastructure/constants';
import { WrapperMother } from '@__mocks__/wrapper-mother';
import { CHARACTERS_BASE_URL } from '@core/characters/infrastructure/constants';
import { ComicMother } from '@core/characters/domain/models/__mocks__/comic-mother';

const fetchFnMock = vi.fn<(url: URL) => Promise<unknown>>(async () =>
  WrapperMother(CharacterMother)
);

describe('RestCharactersRepository', () => {
  it('Should be a function', () => {
    expect(RestCharactersRepository).toBeInstanceOf(Function);
  });

  it('Should return a characters repository', () => {
    const repository = RestCharactersRepository({ fetchFn: fetchFnMock });

    expect(repository).toHaveProperty('searchCharacters');
    expect(repository.searchCharacters).toBeInstanceOf(Function);
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
});
