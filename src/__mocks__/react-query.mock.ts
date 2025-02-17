export const invalidateQueriesMock = vi.fn();

export const useQueryClientMock = vi.fn().mockReturnValue({
  invalidateQueries: invalidateQueriesMock,
});

vi.mock('@tanstack/react-query', async () => {
  const actual = await vi.importActual('@tanstack/react-query');
  return {
    ...actual,
    useQueryClient: useQueryClientMock,
  };
});
