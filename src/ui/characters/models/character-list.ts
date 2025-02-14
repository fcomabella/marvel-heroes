import { CharacterSummary } from '@ui/characters/models/character-summary';

export interface CharacterList {
  results: number;
  characters: Array<CharacterSummary>;
}
