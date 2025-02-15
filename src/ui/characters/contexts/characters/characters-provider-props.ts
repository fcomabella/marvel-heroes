import { CharacterSearch } from '@ui/characters/widgets/character-search';
import { Header } from '@ui/components/header';
import { WithChildren } from '@ui/shared/models';

export interface CharactersProviderProps extends WithChildren {
  SearchBar?: typeof CharacterSearch;
  Header?: typeof Header;
}
