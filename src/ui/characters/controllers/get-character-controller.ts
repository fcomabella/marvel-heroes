import {
  GetCharacterByIdUseCaseResult,
  GetFavoritesUseCaseResult,
} from '@core/characters/application/models';
import { Character, Comic } from '@core/characters/domain/models';
import { GetCharacterResult } from '@core/characters/domain/ports/get-character-result';
import {
  ComicDetails,
  GetCharacterControllerResult,
} from '@ui/characters/models';
import { CharacterDetails } from '@ui/characters/models/character-details';
import { GetCharacterControllerResponse } from '@ui/characters/models/get-character-controller-response';
import { getImageUrl } from '@ui/shared/utils';
import { DateTime } from 'luxon';

const mapComic = ({ id, title, thumbnail, dates }: Comic): ComicDetails => {
  const onSale = dates.find((date) => date.type === 'onsaleDate');

  let year = 'Unknown';

  if (onSale?.date) {
    const date = DateTime.fromISO(onSale.date);

    if (date.isValid) {
      year = date.year.toString();
    }
  }

  return {
    id,
    title,
    thumbnail: getImageUrl(thumbnail, 'portrait_xlarge'),
    year,
  };
};

const mapCharacter = (
  character: Character,
  favorites: Array<number>
): CharacterDetails => {
  const { id, description, name, thumbnail } = character;
  const favoritesSet = new Set(favorites);

  return {
    id,
    description,
    name,
    thumbnail: getImageUrl(thumbnail, 'portrait_uncanny'),
    isFavorite: favoritesSet.has(id),
  };
};

const mapper = (
  getCharacterDto: GetCharacterResult,
  favoritesDto: Array<number>
): GetCharacterControllerResponse => {
  const {
    character: { results: characters },
    comics: { results: comics },
  } = getCharacterDto;

  const [character] = characters;

  return {
    character: mapCharacter(character, favoritesDto),
    comics: comics.map<ComicDetails>(mapComic),
  };
};

export const GetCharacterController = ({
  getCharacterByIdUseCase,
  getFavoritesUseCase,
}: {
  getCharacterByIdUseCase: GetCharacterByIdUseCaseResult;
  getFavoritesUseCase: GetFavoritesUseCaseResult;
}): GetCharacterControllerResult => {
  return async (id: string) => {
    const character = await getCharacterByIdUseCase(id);
    const favorites = await getFavoritesUseCase();
    return mapper(character, favorites);
  };
};
