import { ReactNode } from '@tanstack/react-router';
import { useCharacterContext } from '@ui/characters/contexts/character';
import { ComicsList } from '@ui/characters/widgets/character/comics/comics-list';
import { ComicsRoot } from '@ui/characters/widgets/character/comics/comics-root';
import { ComicsTitle } from '@ui/characters/widgets/character/comics/comics-title';
import { ComicCard } from '@ui/components/comic-card/comic-card';

export const Comics = (): ReactNode => {
  const { comics } = useCharacterContext();

  return (
    <ComicsRoot>
      <ComicsTitle>COMICS</ComicsTitle>
      <ComicsList>
        {comics.map((comic) => (
          <ComicCard comic={comic} key={comic.id} />
        ))}
      </ComicsList>
    </ComicsRoot>
  );
};
