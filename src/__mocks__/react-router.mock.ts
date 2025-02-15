import { useSearch } from '@tanstack/react-router';

export const navigateMock = vi.fn();
export const useSearchMock = vi.fn<typeof useSearch>().mockReturnValue({});

vi.mock('@tanstack/react-router', async () => {
  const actual = await vi.importActual('@tanstack/react-router');

  return {
    ...actual,
    useNavigate: vi.fn().mockReturnValue(navigateMock),
    useSearch: useSearchMock,
  };
});
