import { CharacterDetails } from '@ui/characters/models/character-details';
import { ComicDetails } from '@ui/characters/models/comic-details';

export interface GetCharacterControllerResponse {
  character: CharacterDetails;
  comics: Array<ComicDetails>;
}
