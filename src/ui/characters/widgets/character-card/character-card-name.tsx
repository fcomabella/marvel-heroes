import styled from '@emotion/styled';

export const CharacterCardName = styled('p')(({ theme }) => ({
  gridRowStart: 2,
  gridColumnStart: 1,
  justifySelf: 'start',
  alignSelf: 'center',
  color: theme.typography.color.inverted,
  textTransform: 'uppercase',
  textDecoration: 'none',
  marginTop: theme.sizing(1),
  marginRight: theme.sizing(1),
  marginBottom: theme.sizing(1),
  marginLeft: theme.sizing(1),
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitLineClamp: '2',
  WebkitBoxOrient: 'vertical',
}));
