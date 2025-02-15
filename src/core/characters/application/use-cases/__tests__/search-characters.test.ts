import { SearchCharacters } from '@core/characters/application/use-cases/search-characters';
import {
  charactersRepositoryMock,
  searchCharactersMock,
} from '@core/characters/domain/ports/__mocks__/characters-repository-mock';

describe('SearchCharacters use case', () => {
  it('Should be a function', () => {
    expect(SearchCharacters).toBeInstanceOf(Function);
  });

  it('Should return a Function', () => {
    const useCase = SearchCharacters({
      charactersRepository: charactersRepositoryMock,
    });

    expect(useCase).toBeInstanceOf(Function);
  });

  it('Should call the searchCharacters method with the search term and the limit', () => {
    const useCase = SearchCharacters({
      charactersRepository: charactersRepositoryMock,
    });

    useCase();

    expect(searchCharactersMock).toHaveBeenCalledWith(undefined, undefined);

    useCase('test search', 20);

    expect(searchCharactersMock).toHaveBeenCalledWith('test search', 20);
  });
});
