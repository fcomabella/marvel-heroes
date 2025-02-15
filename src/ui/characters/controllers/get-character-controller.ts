import { GetCharacterByIdUseCaseResult } from '@core/characters/application/models';
import { Character } from '@core/characters/domain/models';
import { Container } from '@core/shared/domain/models';
import { CharacterDetails } from '@ui/characters/models/character-details';
import { getImageUrl } from '@ui/shared/utils';

const mapper = (dto: Container<Character>): CharacterDetails => {
  const { results } = dto;

  const [character] = results;

  return {
    id: character.id,
    description: character.description,
    name: character.name,
    thumbnail: getImageUrl(character.thumbnail, 'portrait_uncanny'),
  };
};

export const GetCharacterController = ({
  getCharacterByIdUseCase,
}: {
  getCharacterByIdUseCase: GetCharacterByIdUseCaseResult;
}) => {
  return async (id: string): Promise<CharacterDetails> => {
    const character = await getCharacterByIdUseCase(id);

    return mapper(character);
  };
};
