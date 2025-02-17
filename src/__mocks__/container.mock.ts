import {
  CharactersRepository,
  GetCharacterByIdFn,
  GetCharacterComicsFn,
  GetFavoritesFn,
  SearchCharactersFn,
} from '@core/characters/domain/ports';
import {
  SearchCharactersControllerResult,
  SearchFavoritesControllerResult,
} from '@ui/characters/models';
import { GetCharacterControllerResult } from '@ui/characters/models/get-character-controller-result';

export const charactersRepositoryMock = vi.fn<CharactersRepository>(() => ({
  searchCharacters: vi.fn<SearchCharactersFn>(),
  getCharacterById: vi.fn<GetCharacterByIdFn>(),
  getCharacterComics: vi.fn<GetCharacterComicsFn>(),
  getFavorites: vi.fn<GetFavoritesFn>(),
}));

export const searchCharactersControllerMock =
  vi.fn<SearchCharactersControllerResult>();

export const getCharacterControllerMock = vi.fn<GetCharacterControllerResult>();

export const searchFavoritesControllerMock =
  vi.fn<SearchFavoritesControllerResult>();

const resolutions = {
  charactersRepository: charactersRepositoryMock,
  searchCharactersController: searchCharactersControllerMock,
  getCharacterController: getCharacterControllerMock,
  searchFavoritesController: searchFavoritesControllerMock,
} as const;

export const resolveMock = vi.fn((module: keyof typeof resolutions) => {
  return resolutions[module];
});

vi.mock('@config/container', () => ({
  container: {
    resolve: resolveMock,
  },
}));
