import styled from '@emotion/styled';

export const CharacterDetailsDescription = styled('p')(({ theme }) => ({
  color: theme.typography.color.inverted,
  fontSize: theme.sizing(2),
  lineHeight: 1.171875,
}));
