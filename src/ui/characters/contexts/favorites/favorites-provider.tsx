import { container } from '@config/container';
import { useQuery } from '@tanstack/react-query';
import { useSearch } from '@tanstack/react-router';
import { SEARCH_FAVORITES_QUERY_KEY } from '@ui/characters/constants';
import { FavoritesContext } from '@ui/characters/contexts/favorites/favorites-context';
import { FavoritesProviderProps } from '@ui/characters/contexts/favorites/favorites-provider-props';
import { FavoritesProviderRoot } from '@ui/characters/contexts/favorites/favorites-provider-root';
import { ReactNode } from 'react';

export const FavoritesProvider = ({
  children,
  SearchBar,
  Header = (): null => null,
}: FavoritesProviderProps): ReactNode => {
  const { search } = useSearch({ strict: false });
  const controller = container.resolve('searchFavoritesController');

  const { data, error, isPending, isError, isFetching } = useQuery({
    queryKey: [SEARCH_FAVORITES_QUERY_KEY, search],
    queryFn: () => controller(search),
  });

  if (isPending) {
    return (
      <>
        <Header isLoading />
        <FavoritesProviderRoot>{SearchBar}</FavoritesProviderRoot>
      </>
    );
  }

  if (isError) {
    return (
      <FavoritesProviderRoot>
        <p>Error: {error?.message || 'Unknown error'}</p>
      </FavoritesProviderRoot>
    );
  }

  return (
    <>
      <Header isLoading={isFetching} />
      <FavoritesProviderRoot>
        {SearchBar}
        <FavoritesContext.Provider value={data}>
          {children}
        </FavoritesContext.Provider>
      </FavoritesProviderRoot>
    </>
  );
};
