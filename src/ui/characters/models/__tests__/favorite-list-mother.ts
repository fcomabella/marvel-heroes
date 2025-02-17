import { faker } from '@faker-js/faker';
import { CharacterSummaryMother } from '@ui/characters/models/__tests__/character-summary-mother';
import { CharacterList } from '@ui/characters/models/character-list';

export const FavoriteListMother = (): CharacterList => ({
  characters: [CharacterSummaryMother({ isFavorite: true })],
  results: faker.number.int(),
});
