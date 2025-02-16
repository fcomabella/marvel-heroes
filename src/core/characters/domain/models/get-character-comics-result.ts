import { Comic } from '@core/characters/domain/models/comic';
import { Container } from '@core/shared/domain/models';

export type GetCharacterComicsResult = Promise<Container<Comic>>;
