import styled from '@emotion/styled';

export const CharacterListContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.sizing(2),
  flexWrap: 'wrap',
  justifyContent: 'space-between',
}));
