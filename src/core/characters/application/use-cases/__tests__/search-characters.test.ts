import { SearchCharacters } from '@core/characters/application/use-cases/search-characters';

const searchCharactersMock = vi.fn();
const repositoryMock = {
  searchCharacters: searchCharactersMock,
};

describe('SearchCharacters use case', () => {
  it('Should be a function', () => {
    expect(SearchCharacters).toBeInstanceOf(Function);
  });

  it('Should return a Function', () => {
    const useCase = SearchCharacters({
      charactersRepository: repositoryMock,
    });

    expect(useCase).toBeInstanceOf(Function);
  });

  it('Should call the searchCharacters with the search term and the limit', () => {
    const useCase = SearchCharacters({
      charactersRepository: repositoryMock,
    });

    useCase();

    expect(searchCharactersMock).toHaveBeenCalledWith(undefined, undefined);

    useCase('test search', 20);

    expect(searchCharactersMock).toHaveBeenCalledWith('test search', 20);
  });
});
