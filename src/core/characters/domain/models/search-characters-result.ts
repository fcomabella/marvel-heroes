import { Character } from '@core/characters/domain/models/character';
import { Container } from '@core/shared/domain/models';

export type SearchCharactersResult = Promise<Container<Character> | void>;
