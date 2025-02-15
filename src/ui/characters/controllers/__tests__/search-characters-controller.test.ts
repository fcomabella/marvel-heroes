import { SearchCharactersUseCaseResult } from '@core/characters/application/models';
import { CharacterMother } from '@core/characters/domain/models/__mocks__/character-mother';
import { SearchCharactersController } from '@ui/characters/controllers/search-characters-controller';
import { CharacterList, CharacterSummary } from '@ui/characters/models';
import { getImageUrl } from '@ui/shared/utils';
import { ContainerMother } from '@__mocks__/container-mother';

const searchCharactersUseCaseMock = vi.fn<SearchCharactersUseCaseResult>();

describe('SearchCharactersController', () => {
  it('Should return the character list', async () => {
    const characterList = ContainerMother(CharacterMother);

    const searchCharactersController = SearchCharactersController({
      searchCharactersUseCase: searchCharactersUseCaseMock,
    });

    searchCharactersUseCaseMock.mockResolvedValueOnce(characterList);

    const expected: CharacterList = {
      results: characterList.count,
      characters: characterList.results.map<CharacterSummary>(
        ({ id, name, thumbnail }) => ({
          id,
          name,
          isFavorite: false,
          thumbnail: getImageUrl(thumbnail, 'portrait_fantastic'),
        })
      ),
    };
    const result = await searchCharactersController();

    expect(result).toStrictEqual(expected);
  });
});
