import { faker } from '@faker-js/faker';
import { CharacterSummaryMother } from '@ui/characters/models/__tests__/character-summary-mother';
import { CharacterList } from '@ui/characters/models/character-list';

export const CharacterListMother = (): CharacterList => ({
  characters: [CharacterSummaryMother()],
  results: faker.number.int(),
});
