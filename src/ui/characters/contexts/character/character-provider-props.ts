import { Header } from '@ui/components/header';
import { WithChildren } from '@ui/shared/models';

export interface CharacterProviderProps extends WithChildren {
  Header?: typeof Header;
}
