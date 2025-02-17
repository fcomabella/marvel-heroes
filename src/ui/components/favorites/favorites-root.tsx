import styled from '@emotion/styled';

export const FavoritesRoot = styled('div')(({ theme }) => ({
  display: 'inline-flex',
  gap: theme.sizing(1),
  padding: theme.sizing(1),
  alignItems: 'center',
}));
