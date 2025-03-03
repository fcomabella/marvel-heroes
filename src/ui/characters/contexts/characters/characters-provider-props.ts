import { Header } from '@ui/characters/widgets/header';
import { WithChildren } from '@ui/shared/models';
import { ReactNode } from 'react';

export interface CharactersProviderProps extends WithChildren {
  SearchBar?: ReactNode;
  Header?: typeof Header;
}
