import styled from '@emotion/styled';

export const SearchFieldInput = styled('input')({
  fontFamily: '"Roboto Condensed", sans-serif',
  fontSize: '1rem',
  background: 'transparent',
  border: 'none',
  flexGrow: 1,
  textTransform: 'uppercase',
  '&::placeholder': {
    textTransform: 'uppercase',
    color: '#AAAAAA',
  },
  '&:focus': {
    outline: 'none',
  },
});
