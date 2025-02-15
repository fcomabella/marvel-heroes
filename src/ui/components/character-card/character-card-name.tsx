import styled from '@emotion/styled';

export const CharacterCardName = styled('p')({
  gridRowStart: 2,
  gridColumnStart: 1,
  justifySelf: 'start',
  alignSelf: 'center',
  color: '#fff',
  textTransform: 'uppercase',
  textDecoration: 'none',
  marginTop: '8px',
  marginRight: '8px',
  marginBottom: '8px',
  marginLeft: '8px',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitLineClamp: '2',
  WebkitBoxOrient: 'vertical',
});
