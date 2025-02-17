import {
  GetFavoritesUseCaseResult,
  SearchCharactersUseCaseResult,
} from '@core/characters/application/models';
import { CharacterMother } from '@core/characters/domain/models/__mocks__/character-mother';
import { CharacterList, CharacterSummary } from '@ui/characters/models';
import { getImageUrl } from '@ui/shared/utils';
import { ContainerMother } from '@__mocks__/container-mother';
import { SearchFavoritesController } from '@ui/characters/controllers/search-favorites-controller';

const searchCharactersUseCaseMock = vi.fn<SearchCharactersUseCaseResult>();
const getFavoritesUseCaseMock = vi.fn<GetFavoritesUseCaseResult>();
describe('SearchCharactersController', () => {
  it('Should return the character list', async () => {
    const characterList = ContainerMother(CharacterMother);

    const searchCharactersController = SearchFavoritesController({
      searchCharactersUseCase: searchCharactersUseCaseMock,
      getFavoritesUseCase: getFavoritesUseCaseMock,
    });

    searchCharactersUseCaseMock.mockResolvedValueOnce(characterList);
    getFavoritesUseCaseMock.mockResolvedValueOnce([
      characterList.results[0].id,
    ]);

    const expected: CharacterList = {
      results: 1,
      characters: characterList.results.map<CharacterSummary>(
        ({ id, name, thumbnail }) => ({
          id,
          name,
          isFavorite: true,
          thumbnail: getImageUrl(thumbnail, 'portrait_fantastic'),
        })
      ),
    };
    const result = await searchCharactersController();

    expect(result).toStrictEqual(expected);
  });
});
