import { renderHook } from '@testing-library/react';
import { useFavoritesContext } from '@ui/characters/contexts/favorites/use-favorites-context';

describe('useFavoritesContext', () => {
  it('Should be used inside a CharactersContextProvider', () => {
    expect(() => renderHook(() => useFavoritesContext())).toThrowError(
      new Error(
        'useFavoritesContext must be used inside a FavoritesContextProvider'
      )
    );
  });
});
