import {
  GetCharacterByIdUseCaseResult,
  GetFavoritesUseCaseResult,
  SearchCharactersUseCaseResult,
  SetIsFavoriteUseCaseResult,
} from '@core/characters/application/models';
import { UnsetIsFavoriteUseCaseResult } from '@core/characters/application/models/unset-is-favorite-use-case-result';
import {
  GetCharacterById,
  GetFavorites,
  SearchCharacters,
} from '@core/characters/application/use-cases';
import { SetIsFavorite } from '@core/characters/application/use-cases/set-is-favorite';
import { UnsetIsFavorite } from '@core/characters/application/use-cases/unset-is-favorite';
import { CharactersRepositoryResult } from '@core/characters/domain/ports';
import { RestCharactersRepository } from '@core/characters/infrastructure/ports';
import { fetchFromApi } from '@core/shared/infrastructure/utils';
import {
  GetCharacterController,
  GetFavoritesCountController,
  SearchCharactersController,
  SearchFavoritesController,
  SetIsFavoriteController,
  UnsetIsFavoriteController,
} from '@ui/characters/controllers';
import {
  GetCharacterControllerResult,
  GetFavoritesCountControllerResult,
  SearchCharactersControllerResult,
  SearchFavoritesControllerResult,
  SetIsFavoriteControllerResult,
  UnsetIsFavoriteControllerResult,
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
  setIsFavoriteUseCase: SetIsFavoriteUseCaseResult;
  unsetIsFavoriteUseCase: UnsetIsFavoriteUseCaseResult;
  setIsFavoriteController: SetIsFavoriteControllerResult;
  unsetIsFavoriteController: UnsetIsFavoriteControllerResult;
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
  setIsFavoriteUseCase: awilix.asFunction(SetIsFavorite),
  unsetIsFavoriteUseCase: awilix.asFunction(UnsetIsFavorite),
  setIsFavoriteController: awilix.asFunction(SetIsFavoriteController),
  unsetIsFavoriteController: awilix.asFunction(UnsetIsFavoriteController),
});
