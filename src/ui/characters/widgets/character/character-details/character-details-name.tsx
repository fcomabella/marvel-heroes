import styled from '@emotion/styled';

export const CharacterDetailsName = styled('h2')(({ theme }) => ({
  fontWeight: theme.typography.wheight.bolder,
  textTransform: 'uppercase',
  color: theme.typography.color.inverted,
  fontSize: theme.sizing(5),
}));
