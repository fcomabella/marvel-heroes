import { GetCharacterById } from '@core/characters/application/use-cases/get-character-by-id';
import {
  charactersRepositoryMock,
  getCharacterByIdMock,
} from '@core/characters/domain/ports/__mocks__/characters-repository-mock';

describe('GetCharacterById use case', () => {
  it('Should be a function', () => {
    expect(GetCharacterById).toBeInstanceOf(Function);
  });

  it('Should return a function', () => {
    const useCase = GetCharacterById({
      charactersRepository: charactersRepositoryMock,
    });

    expect(useCase).toBeInstanceOf(Function);
  });

  it('Should call the getCharacterById method with the id', () => {
    const useCase = GetCharacterById({
      charactersRepository: charactersRepositoryMock,
    });

    useCase('test-id');

    expect(getCharacterByIdMock).toHaveBeenCalledWith('test-id');
  });
});
