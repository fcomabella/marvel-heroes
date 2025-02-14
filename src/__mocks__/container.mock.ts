import { SearchCharactersFn } from '@core/characters/domain/models';
import { CharactersRepository } from '@core/characters/domain/ports';
import { SearchCharactersControllerResult } from '@ui/characters/models';

export const charactersRepositoryMock = vi.fn<CharactersRepository>(() => ({
  searchCharacters: vi.fn<SearchCharactersFn>(),
}));

export const searchCharactersControllerMock =
  vi.fn<SearchCharactersControllerResult>();

const resolutions = {
  charactersRepository: charactersRepositoryMock,
  searchCharactersController: searchCharactersControllerMock,
} as const;

export const resolveMock = vi.fn((module: keyof typeof resolutions) => {
  return resolutions[module];
});

vi.mock('@config/container', () => ({
  container: {
    resolve: resolveMock,
  },
}));
