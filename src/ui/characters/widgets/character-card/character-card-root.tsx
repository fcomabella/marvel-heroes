import styled from '@emotion/styled';

export const CharacterCardRoot = styled('div')({
  height: '248px',
  width: '172px',
  display: 'inline-grid',
  gridTemplateRows: '186px 56px',
  gridTemplateColumns: '110px 56px',
  gap: '6px',
  background: `
    linear-gradient(
      135deg,
      transparent 50%,
    #ffffff 50%
    ),
    linear-gradient(
    #000000 0%,
    #000000 100%
    ),
    linear-gradient(
    #ff0000 0%,
    #ff0000 100%
    )
  `,
  backgroundSize: '12px 12px, auto 56px, cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'bottom right',
  transition: 'background-size 0.3s ease-in-out',

  '&:hover': {
    background: `
        linear-gradient(
          135deg,
          transparent 50%,
        #ffffff 50%
        ),
        linear-gradient(
        #000000 0%,
        #000000 100%
        ),
        linear-gradient(
        #ff0000 0%,
        #ff0000 100%
        )
      `,
    backgroundSize: '12px 12px, auto 0, cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom right',
    transition: 'background-size 0.3s ease-in-out',
  },
});
