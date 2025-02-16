import { ComicCardProps } from '@ui/components/comic-card/comic-card-props';
import { ComicCardRoot } from '@ui/components/comic-card/comic-card-root';
import { ComicCardTitle } from '@ui/components/comic-card/comic-card-title';
import { ComicCardYear } from '@ui/components/comic-card/comic-card-year';
import { ReactNode } from 'react';

export const ComicCard = ({ comic }: ComicCardProps): ReactNode => {
  const { title, year, thumbnail } = comic;

  return (
    <ComicCardRoot>
      <img src={thumbnail} loading="lazy" decoding="async" />
      <ComicCardTitle>{title}</ComicCardTitle>
      <ComicCardYear>{year}</ComicCardYear>
    </ComicCardRoot>
  );
};
