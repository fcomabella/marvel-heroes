import { Header } from '@ui/characters/widgets/header';
import { WithChildren } from '@ui/shared/models';

export interface CharacterProviderProps extends WithChildren {
  Header?: typeof Header;
}
