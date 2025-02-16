import { ContainerMother } from '@__mocks__/container-mother';
import { GetCharacterByIdUseCaseResult } from '@core/characters/application/models';
import { Comic } from '@core/characters/domain/models';
import { CharacterMother } from '@core/characters/domain/models/__mocks__/character-mother';
import { ComicMother } from '@core/characters/domain/models/__mocks__/comic-mother';
import { Container } from '@core/shared/domain/models';
import { GetCharacterController } from '@ui/characters/controllers/get-character-controller';
import { ComicDetails } from '@ui/characters/models';
import { GetCharacterControllerResponse } from '@ui/characters/models/get-character-controller-response';
import { getImageUrl } from '@ui/shared/utils';

const getCharacterByIdUseCaseMock = vi.fn<GetCharacterByIdUseCaseResult>();

describe('GetCharacterController', () => {
  it('Should return the character details', async () => {
    const characterContainer = ContainerMother(CharacterMother);
    const comicContainer = ContainerMother(ComicMother);

    const getCharacterController = GetCharacterController({
      getCharacterByIdUseCase: getCharacterByIdUseCaseMock,
    });

    getCharacterByIdUseCaseMock.mockResolvedValueOnce({
      character: characterContainer,
      comics: comicContainer,
    });

    const {
      results: [{ description, id, name, thumbnail }],
    } = characterContainer;

    const { results: comics } = comicContainer;

    const expected: GetCharacterControllerResponse = {
      character: {
        description,
        id,
        name,
        thumbnail: getImageUrl(thumbnail, 'portrait_uncanny'),
      },
      comics: comics.map<ComicDetails>(({ id, title, thumbnail, dates }) => {
        const onSale = dates.find((date) => date.type === 'onsaleDate');

        const year = !onSale
          ? 'Unknown'
          : new Date(onSale.date).getFullYear().toString();

        return {
          id,
          title,
          thumbnail: getImageUrl(thumbnail, 'portrait_medium'),
          year,
        };
      }),
    };

    const result = await getCharacterController(id.toString());

    expect(result).toStrictEqual(expected);
  });

  it('Should return an unknown year', async () => {
    const characterContainer = ContainerMother(CharacterMother);
    const comic = ComicMother();
    comic.dates = [
      {
        date: '',
        type: 'onsaleDate',
      },
    ];
    const comicContainer: Container<Comic> = {
      count: 1,
      limit: 20,
      offset: 0,
      total: 1,
      results: [comic],
    };

    const getCharacterController = GetCharacterController({
      getCharacterByIdUseCase: getCharacterByIdUseCaseMock,
    });

    getCharacterByIdUseCaseMock.mockResolvedValueOnce({
      character: characterContainer,
      comics: comicContainer,
    });

    const result = await getCharacterController(
      characterContainer.results[0].id.toString()
    );

    expect(result.comics[0].year).toEqual('Unknown');
  });
});
