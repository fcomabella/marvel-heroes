import { SetIsFavorite } from '@core/characters/application/use-cases/set-is-favorite';
import {
  charactersRepositoryMock,
  setIsFavoriteMock,
} from '@core/characters/domain/ports/__mocks__/characters-repository-mock';
import { faker } from '@faker-js/faker';

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
    const id = faker.number.int();
    const useCase = SetIsFavorite({
      charactersRepository: charactersRepositoryMock,
    });

    useCase(id);

    expect(setIsFavoriteMock).toHaveBeenCalledWith(id);
  });
});
