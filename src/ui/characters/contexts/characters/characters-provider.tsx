import { container } from '@config/container';
import { ReactNode, useCallback, useMemo, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { SEARCH_CHARACTERS_QUERY_KEY } from '@ui/characters/constants';
import {
  CharactersContext,
  CharactersContextValue,
} from '@ui/characters/contexts/characters/characters-context';
import { CharactersProviderProps } from '@ui/characters/contexts/characters/characters-provider-props';

export const CharactersProvider = ({
  children,
}: CharactersProviderProps): ReactNode => {
  const controller = container.resolve('searchCharactersController');
  const searchTerm = useRef('');

  const setSearchTerm = useCallback(
    (search: string) => (searchTerm.current = search),
    []
  );

  const { data, error, isPending, isError } = useQuery({
    queryKey: [SEARCH_CHARACTERS_QUERY_KEY, searchTerm.current],
    queryFn: () => controller(searchTerm.current),
  });

  const contextValue = useMemo<CharactersContextValue>(
    () => ({
      setSearchTerm,
      characterList: data ?? { results: 0, characters: [] },
    }),
    [setSearchTerm, data]
  );

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {error?.message || 'Unknown error'}</p>;
  }

  return (
    <CharactersContext.Provider value={contextValue}>
      {children}
    </CharactersContext.Provider>
  );
};
