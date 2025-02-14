import { renderHook } from '@testing-library/react';
import { useCharactersContext } from '@ui/characters/contexts/characters/use-characters-context';

describe('useCharactersContext', () => {
  it('Should be used inside a CharactersContextProvider', () => {
    expect(() => renderHook(() => useCharactersContext())).toThrowError(
      new Error(
        'useCharactersContext must be used inside a CharactersContextProvider'
      )
    );
  });
});
