import { container } from '@config/container';
import { useQuery } from '@tanstack/react-query';
import { useParams } from '@tanstack/react-router';
import { CHARACTER_QUERY_KEY } from '@ui/characters/constants';
import { CharacterContext } from '@ui/characters/contexts/character/character-context';
import { CharacterProviderProps } from '@ui/characters/contexts/character/character-provider-props';
import { ReactNode } from 'react';

export const CharacterProvider = ({
  children,
  Header = (): null => null,
}: CharacterProviderProps): ReactNode => {
  const { characterId } = useParams({ from: '/characters/$characterId' });
  const controller = container.resolve('getCharacterController');

  const { data, error, isPending, isError, isFetching } = useQuery({
    queryKey: [CHARACTER_QUERY_KEY, characterId],
    queryFn: () => controller(characterId),
  });

  if (isPending) {
    return (
      <>
        <Header isLoading />
      </>
    );
  }

  if (isError) {
    return <p>Error: {error?.message || 'Unknown error'}</p>;
  }

  return (
    <>
      <Header isLoading={isFetching} />
      <CharacterContext.Provider value={data}>
        {children}
      </CharacterContext.Provider>
    </>
  );
};
