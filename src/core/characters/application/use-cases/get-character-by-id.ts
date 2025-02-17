import { GetCharacterByIdUseCaseResult } from '@core/characters/application/models';
import { CharactersRepositoryResult } from '@core/characters/domain/ports';

export const GetCharacterById = ({
  charactersRepository,
}: {
  charactersRepository: CharactersRepositoryResult;
}): GetCharacterByIdUseCaseResult => {
  return async (id: string) => {
    const [character, comics] = await Promise.all([
      charactersRepository.getCharacterById(id),
      charactersRepository.getCharacterComics(id),
    ]);
    return { character, comics };
  };
};
