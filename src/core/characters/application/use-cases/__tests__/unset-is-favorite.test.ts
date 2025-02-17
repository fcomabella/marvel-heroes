import { UnsetIsFavorite } from '@core/characters/application/use-cases/unset-is-favorite';
import {
  charactersRepositoryMock,
  unsetIsFavoriteMock,
} from '@core/characters/domain/ports/__mocks__/characters-repository-mock';
import { faker } from '@faker-js/faker';

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
    const id = faker.number.int();
    const useCase = UnsetIsFavorite({
      charactersRepository: charactersRepositoryMock,
    });

    useCase(id);

    expect(unsetIsFavoriteMock).toHaveBeenCalledWith(id);
  });
});
