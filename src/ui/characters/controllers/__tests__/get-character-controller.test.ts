import { ContainerMother } from '@__mocks__/container-mother';
import { GetCharacterByIdUseCaseResult } from '@core/characters/application/models';
import { CharacterMother } from '@core/characters/domain/models/__mocks__/character-mother';
import { GetCharacterController } from '@ui/characters/controllers/get-character-controller';
import { CharacterDetails } from '@ui/characters/models';
import { getImageUrl } from '@ui/shared/utils';

const getCharacterByIdUseCaseMock = vi.fn<GetCharacterByIdUseCaseResult>();

describe('GetCharacterController', () => {
  it('Should return the character details', async () => {
    const characterContainer = ContainerMother(CharacterMother);

    const getCharacterController = GetCharacterController({
      getCharacterByIdUseCase: getCharacterByIdUseCaseMock,
    });

    getCharacterByIdUseCaseMock.mockResolvedValueOnce(characterContainer);

    const {
      results: [{ description, id, name, thumbnail }],
    } = characterContainer;

    const expected: CharacterDetails = {
      description,
      id,
      name,
      thumbnail: getImageUrl(thumbnail, 'portrait_uncanny'),
    };

    const result = await getCharacterController(id.toString());

    expect(result).toStrictEqual(expected);
  });
});
