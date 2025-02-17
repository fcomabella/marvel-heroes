import {
  GetCharacterByIdUseCaseResult,
  SearchCharactersUseCaseResult,
} from '@core/characters/application/models';
import { GetFavoritesUseCaseResult } from '@core/characters/application/models/get-favorites-use-case-result';
import { SearchCharacters } from '@core/characters/application/use-cases';
import { GetCharacterById } from '@core/characters/application/use-cases/get-character-by-id';
import { GetFavorites } from '@core/characters/application/use-cases/get-favorites';
import { CharactersRepositoryResult } from '@core/characters/domain/models';
import { RestCharactersRepository } from '@core/characters/infrastructure/ports';
import { fetchFromApi } from '@core/shared/infrastructure/utils';
import { SearchCharactersController } from '@ui/characters/controllers';
import { GetCharacterController } from '@ui/characters/controllers/get-character-controller';
import { GetFavoritesCountController } from '@ui/characters/controllers/get-favorites-count-controller';
import {
  GetFavoritesCountControllerResult,
  SearchCharactersControllerResult,
} from '@ui/characters/models';
import { GetCharacterControllerResult } from '@ui/characters/models/get-character-controller-result';
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
});
