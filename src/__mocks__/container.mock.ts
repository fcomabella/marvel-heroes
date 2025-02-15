import {
  GetCharacterByIdFn,
  SearchCharactersFn,
} from '@core/characters/domain/models';
import { CharactersRepository } from '@core/characters/domain/ports';
import { SearchCharactersControllerResult } from '@ui/characters/models';
import { GetCharacterControllerResult } from '@ui/characters/models/get-character-controller-result';

export const charactersRepositoryMock = vi.fn<CharactersRepository>(() => ({
  searchCharacters: vi.fn<SearchCharactersFn>(),
  getCharacterById: vi.fn<GetCharacterByIdFn>(),
}));

export const searchCharactersControllerMock =
  vi.fn<SearchCharactersControllerResult>();

export const getCharacterControllerMock = vi.fn<GetCharacterControllerResult>();

const resolutions = {
  charactersRepository: charactersRepositoryMock,
  searchCharactersController: searchCharactersControllerMock,
  getCharacterController: getCharacterControllerMock,
} as const;

export const resolveMock = vi.fn((module: keyof typeof resolutions) => {
  return resolutions[module];
});

vi.mock('@config/container', () => ({
  container: {
    resolve: resolveMock,
  },
}));
