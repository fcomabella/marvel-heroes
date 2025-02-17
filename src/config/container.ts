import {
  GetCharacterByIdUseCaseResult,
  GetFavoritesUseCaseResult,
  SearchCharactersUseCaseResult,
} from '@core/characters/application/models';
import {
  GetCharacterById,
  GetFavorites,
  SearchCharacters,
} from '@core/characters/application/use-cases';
import { CharactersRepositoryResult } from '@core/characters/domain/ports';
import { RestCharactersRepository } from '@core/characters/infrastructure/ports';
import { fetchFromApi } from '@core/shared/infrastructure/utils';
import {
  GetCharacterController,
  GetFavoritesCountController,
  SearchCharactersController,
  SearchFavoritesController,
} from '@ui/characters/controllers';
import {
  GetCharacterControllerResult,
  GetFavoritesCountControllerResult,
  SearchCharactersControllerResult,
  SearchFavoritesControllerResult,
} from '@ui/characters/models';
import * as awilix from 'awilix';

export const container = awilix.createContainer<{
  fetchFn: (url: URL) => Promise<unknown>;
  charactersRepository: CharactersRepositoryResult;
  searchCharactersUseCase: SearchCharactersUseCaseResult;
  searchCharactersController: SearchCharactersControllerResult;
  getCharacterByIdUseCase: GetCharacterByIdUseCaseResult;
  getCharacterController: GetCharacterControllerResult;
  getFavoritesUseCase: GetFavoritesUseCaseResult;
  getFavoritesCountController: GetFavoritesCountControllerResult;
  searchFavoritesController: SearchFavoritesControllerResult;
}>({ strict: true });

container.register({
  fetchFn: awilix.asValue(fetchFromApi),
  charactersRepository: awilix.asFunction(RestCharactersRepository),
  searchCharactersUseCase: awilix.asFunction(SearchCharacters),
  searchCharactersController: awilix.asFunction(SearchCharactersController),
  getCharacterByIdUseCase: awilix.asFunction(GetCharacterById),
  getCharacterController: awilix.asFunction(GetCharacterController),
  getFavoritesUseCase: awilix.asFunction(GetFavorites),
  getFavoritesCountController: awilix.asFunction(GetFavoritesCountController),
  searchFavoritesController: awilix.asFunction(SearchFavoritesController),
});
