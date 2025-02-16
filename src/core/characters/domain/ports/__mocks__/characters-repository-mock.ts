import { CharactersRepositoryResult } from '@core/characters/domain/models';

export const searchCharactersMock = vi.fn();
export const getCharacterByIdMock = vi.fn();
export const getCharacterComicsMock = vi.fn();

export const charactersRepositoryMock: CharactersRepositoryResult = {
  searchCharacters: searchCharactersMock,
  getCharacterById: getCharacterByIdMock,
  getCharacterComics: getCharacterComicsMock,
};
