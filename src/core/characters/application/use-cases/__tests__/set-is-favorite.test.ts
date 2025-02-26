import { SetIsFavorite } from '@core/characters/application/use-cases/set-is-favorite';
import {
  charactersRepositoryMock,
  setIsFavoriteMock,
} from '@core/characters/domain/ports/__mocks__/characters-repository-mock';
import { CharacterSummaryMother } from '@ui/characters/models/__tests__/character-summary-mother';

describe('SetIsFavorite use case', () => {
  it('Should be a function', () => {
    expect(SetIsFavorite).toBeInstanceOf(Function);
  });

  it('Should return a Function', () => {
    const useCase = SetIsFavorite({
      charactersRepository: charactersRepositoryMock,
    });

    expect(useCase).toBeInstanceOf(Function);
  });

  it('Should call the setIsFavorite method with the id', () => {
    const character = CharacterSummaryMother();
    const useCase = SetIsFavorite({
      charactersRepository: charactersRepositoryMock,
    });

    useCase(character);

    expect(setIsFavoriteMock).toHaveBeenCalledWith({
      ...character,
      isFavorite: true,
    });
  });
});
