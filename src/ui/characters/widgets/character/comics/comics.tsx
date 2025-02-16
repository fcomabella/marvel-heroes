import { ReactNode } from '@tanstack/react-router';
import { useCharacterContext } from '@ui/characters/contexts/character';

export const Comics = (): ReactNode => {
  const { comics } = useCharacterContext();

  return <pre>{JSON.stringify(comics, null, 2)}</pre>;
};
