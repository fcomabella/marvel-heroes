import { container } from '@config/container';
import { ReactNode } from 'react';
import { useQuery } from '@tanstack/react-query';
import { SEARCH_CHARACTERS_QUERY_KEY } from '@ui/characters/constants';
import { CharactersContext } from '@ui/characters/contexts/characters/characters-context';
import { CharactersProviderProps } from '@ui/characters/contexts/characters/characters-provider-props';
import { useSearch } from '@tanstack/react-router';
import { CharactersProviderRoot } from '@ui/characters/contexts/characters/characters-provider-root';

export const CharactersProvider = ({
  children,
  SearchBar,
  Header = (): null => null,
}: CharactersProviderProps): ReactNode => {
  const { search } = useSearch({ strict: false });
  const controller = container.resolve('searchCharactersController');

  const { data, error, isPending, isError, isFetching } = useQuery({
    queryKey: [SEARCH_CHARACTERS_QUERY_KEY, search],
    queryFn: () => controller(search),
  });

  if (isPending) {
    return (
      <>
        <Header isLoading />
        <CharactersProviderRoot>{SearchBar}</CharactersProviderRoot>
      </>
    );
  }

  if (isError) {
    return (
      <CharactersProviderRoot>
        <p>Error: {error?.message || 'Unknown error'}</p>
      </CharactersProviderRoot>
    );
  }

  return (
    <>
      <Header isLoading={isFetching} />
      <CharactersProviderRoot>
        {SearchBar}
        <CharactersContext.Provider value={data}>
          {children}
        </CharactersContext.Provider>
      </CharactersProviderRoot>
    </>
  );
};
