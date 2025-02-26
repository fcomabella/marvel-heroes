import { container } from '@config/container';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  CHARACTER_QUERY_KEY,
  FAVORITES_COUNT_QUERY_KEY,
  SEARCH_CHARACTERS_QUERY_KEY,
  SEARCH_FAVORITES_QUERY_KEY,
} from '@ui/characters/constants';
import { CharacterDetails, CharacterSummary } from '@ui/characters/models';
import { useCallback } from 'react';

export const useToggleIsFavorite = (): ((
  character: CharacterSummary
) => void) => {
  const setIsFavoriteController = container.resolve('setIsFavoriteController');
  const unsetIsFavoriteController = container.resolve(
    'unsetIsFavoriteController'
  );

  const queryClient = useQueryClient();

  const invalidateQueries = useCallback(
    () =>
      Promise.all([
        queryClient.invalidateQueries({
          queryKey: [SEARCH_CHARACTERS_QUERY_KEY],
        }),
        queryClient.invalidateQueries({
          queryKey: [SEARCH_FAVORITES_QUERY_KEY],
        }),
        queryClient.invalidateQueries({ queryKey: [CHARACTER_QUERY_KEY] }),
        queryClient.invalidateQueries({
          queryKey: [FAVORITES_COUNT_QUERY_KEY],
        }),
      ]),
    [queryClient]
  );

  const { mutate: setIsFavorite } = useMutation({
    mutationFn: (character: CharacterSummary) =>
      setIsFavoriteController(character),
    onSuccess: invalidateQueries,
  });

  const { mutate: unsetIsFavorite } = useMutation({
    mutationFn: (character: CharacterSummary) =>
      unsetIsFavoriteController(character),
    onSuccess: invalidateQueries,
  });

  return useCallback(
    (character: CharacterSummary | CharacterDetails): void => {
      if (character.isFavorite) {
        unsetIsFavorite(character);
      } else {
        setIsFavorite(character);
      }
    },
    [setIsFavorite, unsetIsFavorite]
  );
};
