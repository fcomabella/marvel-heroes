import { container } from '@config/container';
import { useQuery } from '@tanstack/react-query';
import { FAVORITES_COUNT_QUERY_KEY } from '@ui/characters/constants';

export const useFavoritesCount = (): number => {
  const controller = container.resolve('getFavoritesCountController');
  const { data } = useQuery({
    queryKey: [FAVORITES_COUNT_QUERY_KEY],
    queryFn: () => controller(),
  });

  return data ?? 0;
};
