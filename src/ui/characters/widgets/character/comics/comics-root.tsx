import styled from '@emotion/styled';

export const ComicsRoot = styled('div')(({ theme }) => ({
  maxWidth: theme.sizing(120),
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  paddingTop: theme.sizing(6),
  paddingBottom: theme.sizing(6),
  gap: theme.sizing(3),
}));
