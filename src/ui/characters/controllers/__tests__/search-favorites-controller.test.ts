import { GetFavoritesUseCaseResult } from '@core/characters/application/models';
import { CharacterList } from '@ui/characters/models';
import { ContainerMother } from '@__mocks__/container-mother';
import { SearchFavoritesController } from '@ui/characters/controllers/search-favorites-controller';
import { CharacterSummaryMother } from '@ui/characters/models/__tests__/character-summary-mother';

const getFavoritesUseCaseMock = vi.fn<GetFavoritesUseCaseResult>();
describe('SearchCharactersController', () => {
  it('Should return the character list', async () => {
    const characterList = ContainerMother(CharacterSummaryMother);

    const searchCharactersController = SearchFavoritesController({
      getFavoritesUseCase: getFavoritesUseCaseMock,
    });

    getFavoritesUseCaseMock.mockResolvedValueOnce(characterList.results);

    const expected: CharacterList = {
      results: 1,
      characters: characterList.results,
    };
    const result = await searchCharactersController();

    expect(result).toStrictEqual(expected);
  });
});
