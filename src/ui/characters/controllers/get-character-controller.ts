import { GetCharacterByIdUseCaseResult } from '@core/characters/application/models';
import { Character, Comic } from '@core/characters/domain/models';
import { GetCharacterResult } from '@core/characters/domain/models/get-character-result';
import {
  ComicDetails,
  GetCharacterControllerResult,
} from '@ui/characters/models';
import { CharacterDetails } from '@ui/characters/models/character-details';
import { GetCharacterControllerResponse } from '@ui/characters/models/get-character-controller-response';
import { getImageUrl } from '@ui/shared/utils';

const mapComic = ({ id, title, thumbnail, dates }: Comic): ComicDetails => {
  const onSale = dates.find((date) => date.type === 'onsaleDate');

  const year = !onSale?.date
    ? 'Unknown'
    : new Date(onSale.date).getFullYear().toString();

  return {
    id,
    title,
    thumbnail: getImageUrl(thumbnail, 'portrait_medium'),
    year,
  };
};

const mapCharacter = ({
  id,
  description,
  name,
  thumbnail,
}: Character): CharacterDetails => {
  return {
    id,
    description,
    name,
    thumbnail: getImageUrl(thumbnail, 'portrait_uncanny'),
  };
};

const mapper = (dto: GetCharacterResult): GetCharacterControllerResponse => {
  const {
    character: { results: characters },
    comics: { results: comics },
  } = dto;

  const [character] = characters;

  return {
    character: mapCharacter(character),
    comics: comics.map<ComicDetails>(mapComic),
  };
};

export const GetCharacterController = ({
  getCharacterByIdUseCase,
}: {
  getCharacterByIdUseCase: GetCharacterByIdUseCaseResult;
}): GetCharacterControllerResult => {
  return async (id: string) => {
    return mapper(await getCharacterByIdUseCase(id));
  };
};
