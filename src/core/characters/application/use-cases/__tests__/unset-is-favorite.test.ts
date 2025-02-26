import { UnsetIsFavorite } from '@core/characters/application/use-cases/unset-is-favorite';
import {
  charactersRepositoryMock,
  unsetIsFavoriteMock,
} from '@core/characters/domain/ports/__mocks__/characters-repository-mock';
import { CharacterSummaryMother } from '@ui/characters/models/__tests__/character-summary-mother';

describe('UnsetIsFavorite use case', () => {
  it('Should be a function', () => {
    expect(UnsetIsFavorite).toBeInstanceOf(Function);
  });

  it('Should return a Function', () => {
    const useCase = UnsetIsFavorite({
      charactersRepository: charactersRepositoryMock,
    });

    expect(useCase).toBeInstanceOf(Function);
  });

  it('Should call the setIsFavorite method with the id', () => {
    const character = CharacterSummaryMother();
    const useCase = UnsetIsFavorite({
      charactersRepository: charactersRepositoryMock,
    });

    useCase(character);

    expect(unsetIsFavoriteMock).toHaveBeenCalledWith(character);
  });
});
