import styled from '@emotion/styled';

export const SearchFieldInput = styled('input')({
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
