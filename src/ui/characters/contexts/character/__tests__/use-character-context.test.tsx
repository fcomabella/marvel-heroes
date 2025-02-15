import { renderHook } from '@testing-library/react';
import { useCharacterContext } from '@ui/characters/contexts/character/use-character-context';

describe('useCharacterContext', () => {
  it('Should be used inside a CharacterContextProvider', () => {
    expect(() => renderHook(() => useCharacterContext())).toThrowError(
      new Error(
        'useCharacterContext must be used inside a CharactersContextProvider'
      )
    );
  });
});
