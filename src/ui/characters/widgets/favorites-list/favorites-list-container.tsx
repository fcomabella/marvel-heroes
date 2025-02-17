import styled from '@emotion/styled';

export const FavoritesListContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.sizing(2),
  flexWrap: 'wrap',
}));
