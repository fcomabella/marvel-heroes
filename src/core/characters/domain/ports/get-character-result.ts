import { Character } from '@core/characters/domain/models/character';
import { Comic } from '@core/characters/domain/models/comic';
import { Container } from '@core/shared/domain/models';

export interface GetCharacterResult {
  character: Container<Character>;
  comics: Container<Comic>;
}
