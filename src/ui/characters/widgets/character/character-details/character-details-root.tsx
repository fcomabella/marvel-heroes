import styled from '@emotion/styled';

export const CharacterDetailsRoot = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  background: `
    linear-gradient(
      135deg,
      transparent 50%,
    #ffffff 50%
    ),
    linear-gradient(
    #000000 0%,
    #000000 100%
    )
  `,
  backgroundSize: '24px 24px, cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'bottom right',
});
