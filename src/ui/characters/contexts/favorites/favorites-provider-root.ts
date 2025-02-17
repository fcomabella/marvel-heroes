import styled from '@emotion/styled';

export const FavoritesProviderRoot = styled('main')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.sizing(3),
  padding: theme.sizing(6),
}));
