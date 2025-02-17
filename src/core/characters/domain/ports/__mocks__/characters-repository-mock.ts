import { CharactersRepositoryResult } from '@core/characters/domain/ports';

export const searchCharactersMock = vi.fn();
export const getCharacterByIdMock = vi.fn();
export const getCharacterComicsMock = vi.fn();
export const getFavoritesMock = vi.fn();
export const setIsFavoriteMock = vi.fn();
export const unsetIsFavoriteMock = vi.fn();

export const charactersRepositoryMock: CharactersRepositoryResult = {
  searchCharacters: searchCharactersMock,
  getCharacterById: getCharacterByIdMock,
  getCharacterComics: getCharacterComicsMock,
  getFavorites: getFavoritesMock,
  setIsFavorite: setIsFavoriteMock,
  unsetIsFavorite: unsetIsFavoriteMock,
};
