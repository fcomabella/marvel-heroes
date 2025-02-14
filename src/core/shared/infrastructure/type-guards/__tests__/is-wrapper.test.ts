import { CharacterMother } from '@core/characters/domain/__mocks__/character-mother';
import { characterDtoSchema } from '@core/characters/infrastructure/schemas';
import { isWrapper } from '@core/shared/infrastructure/type-guards/is-wrapper';
import { WrapperMother } from 'src/__mocks__/wrapper-mother';

describe('isWrapper', () => {
  it('Should be succesful', () => {
    const toParse = WrapperMother(CharacterMother);
    expect(isWrapper(toParse, characterDtoSchema)).toStrictEqual(true);
  });

  it('Should fail', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const toParse: any = WrapperMother(CharacterMother);

    delete toParse.code;

    expect(() => isWrapper(toParse, characterDtoSchema)).toThrowError();
  });
});
