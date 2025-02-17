import styled from '@emotion/styled';

export const CharacterCardRoot = styled('div')(({ theme }) => ({
  height: theme.sizing(31),
  width: theme.sizing(21.5),
  display: 'inline-grid',
  gridTemplateRows: theme.sizing(23.25, 7),
  gridTemplateColumns: theme.sizing(13.75, 7),
  gap: theme.sizing(0.75),
  background: `
    linear-gradient(
      135deg,
      transparent 50%,
    ${theme.colors.light} 50%
    ),
    linear-gradient(
    ${theme.colors.dark} 0%,
    ${theme.colors.dark} 100%
    ),
    linear-gradient(
    ${theme.colors.marvelRed} 0%,
    ${theme.colors.marvelRed} 100%
    )
  `,
  backgroundSize: `${theme.sizing(1.5, 1.5)}, auto ${theme.sizing(7)}, cover`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'bottom right',
  transition: 'background-size 0.3s ease-in-out',

  '&:hover': {
    background: `
        linear-gradient(
          135deg,
          transparent 50%,
        ${theme.colors.light} 50%
        ),
        linear-gradient(
        ${theme.colors.dark} 0%,
        ${theme.colors.dark} 100%
        ),
        linear-gradient(
        ${theme.colors.marvelRed} 0%,
        ${theme.colors.marvelRed} 100%
        )
      `,
    backgroundSize: `${theme.sizing(1.5, 1.5)}, auto 0, cover`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom right',
    transition: 'background-size 0.3s ease-in-out',
  },
}));
