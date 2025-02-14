import { SearchCharactersUseCaseResult } from '@core/characters/application/models';
import { SearchCharacters } from '@core/characters/application/use-cases';
import { CharactersRepositoryResult } from '@core/characters/domain/models';
import { RestCharactersRepository } from '@core/characters/infrastructure/ports';
import { fetchFromApi } from '@core/shared/infrastructure/utils';
import { SearchCharactersController } from '@ui/characters/controllers';
import { SearchCharactersControllerResult } from '@ui/characters/models';
import * as awilix from 'awilix';

export const container = awilix.createContainer<{
  fetchFn: (url: URL) => Promise<unknown>;
  charactersRepository: CharactersRepositoryResult;
  searchCharactersUseCase: SearchCharactersUseCaseResult;
  searchCharactersController: SearchCharactersControllerResult;
}>({ strict: true });

container.register({
  fetchFn: awilix.asValue(fetchFromApi),
  charactersRepository: awilix.asFunction(RestCharactersRepository),
  searchCharactersUseCase: awilix.asFunction(SearchCharacters),
  searchCharactersController: awilix.asFunction(SearchCharactersController),
});
