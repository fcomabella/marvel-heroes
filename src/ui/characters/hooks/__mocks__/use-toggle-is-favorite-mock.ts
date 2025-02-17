export const useToggleIsFavoriteMock = vi.fn();

vi.mock('@ui/characters/hooks/use-toggle-is-favorite', () => ({
  useToggleIsFavorite: useToggleIsFavoriteMock,
}));
