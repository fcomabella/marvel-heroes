import { GetCharacterByIdUseCaseResult } from '@core/characters/application/models';
import { CharactersRepositoryResult } from '@core/characters/domain/models';

export const GetCharacterById = ({
  charactersRepository,
}: {
  charactersRepository: CharactersRepositoryResult;
}): GetCharacterByIdUseCaseResult => {
  return (id: string) => {
    return charactersRepository.getCharacterById(id);
  };
};
