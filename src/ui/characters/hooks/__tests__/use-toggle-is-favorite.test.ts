import {
  setIsFavoriteControllerMock,
  unsetIsFavoriteControllerMock,
} from '@__mocks__/container.mock';
import { invalidateQueriesMock } from '@__mocks__/react-query.mock';
import { renderHookWithQueryProvider } from '@__tests__/render-hook-with-query-provider';
import { waitFor } from '@testing-library/dom';
import {
  CHARACTER_QUERY_KEY,
  FAVORITES_COUNT_QUERY_KEY,
  SEARCH_CHARACTERS_QUERY_KEY,
  SEARCH_FAVORITES_QUERY_KEY,
} from '@ui/characters/constants';
import { useToggleIsFavorite } from '@ui/characters/hooks/use-toggle-is-favorite';
import { CharacterSummaryMother } from '@ui/characters/models/__tests__/character-summary-mother';

describe('UseToggleIsFavorite hook', () => {
  it('Should set favorite', async () => {
    const characterSummary = CharacterSummaryMother();
    characterSummary.isFavorite = false;

    const { result } = renderHookWithQueryProvider(() => useToggleIsFavorite());

    result.current(characterSummary);

    await waitFor(() => {
      expect(setIsFavoriteControllerMock).toHaveBeenCalledWith(
        characterSummary
      );
      expect(unsetIsFavoriteControllerMock).not.toHaveBeenCalled();
      expect(invalidateQueriesMock).toHaveBeenCalledWith({
        queryKey: [SEARCH_CHARACTERS_QUERY_KEY],
      });
      expect(invalidateQueriesMock).toHaveBeenCalledWith({
        queryKey: [SEARCH_FAVORITES_QUERY_KEY],
      });
      expect(invalidateQueriesMock).toHaveBeenCalledWith({
        queryKey: [CHARACTER_QUERY_KEY],
      });
      expect(invalidateQueriesMock).toHaveBeenCalledWith({
        queryKey: [FAVORITES_COUNT_QUERY_KEY],
      });
    });
  });

  it('Should unset favorite queries', async () => {
    const characterSummary = CharacterSummaryMother();
    characterSummary.isFavorite = true;

    const { result } = renderHookWithQueryProvider(() => useToggleIsFavorite());

    result.current(characterSummary);

    await waitFor(() => {
      expect(unsetIsFavoriteControllerMock).toHaveBeenCalledWith(
        characterSummary
      );
      expect(setIsFavoriteControllerMock).not.toHaveBeenCalled();
      expect(invalidateQueriesMock).toHaveBeenCalledWith({
        queryKey: [SEARCH_CHARACTERS_QUERY_KEY],
      });
      expect(invalidateQueriesMock).toHaveBeenCalledWith({
        queryKey: [SEARCH_FAVORITES_QUERY_KEY],
      });
      expect(invalidateQueriesMock).toHaveBeenCalledWith({
        queryKey: [CHARACTER_QUERY_KEY],
      });
      expect(invalidateQueriesMock).toHaveBeenCalledWith({
        queryKey: [FAVORITES_COUNT_QUERY_KEY],
      });
    });
  });
});
