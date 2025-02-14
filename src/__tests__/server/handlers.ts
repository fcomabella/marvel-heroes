import { Character } from '@core/characters/domain/models';
import { CHARACTERS_BASE_URL } from '@core/characters/infrastructure/constants';
import { Wrapper } from '@core/shared/domain/models';
import { http, HttpHandler, HttpResponse } from 'msw';
import { WrapperMother } from 'src/__mocks__/wrapper-mother';
import { CharacterMother } from '@core/characters/domain/__mocks__/character-mother';

export const handlers: Array<HttpHandler> = [
  http.get(CHARACTERS_BASE_URL, () => {
    return HttpResponse.json<Wrapper<Character>>(
      WrapperMother(CharacterMother)
    );
  }),
];
