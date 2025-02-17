import styled from '@emotion/styled';

export const CharacterDetailsRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  background: `
    linear-gradient(
      135deg,
      transparent 50%,
    ${theme.colors.light} 50%
    ),
    linear-gradient(
    ${theme.colors.dark} 0%,
    ${theme.colors.dark} 100%
    )
  `,
  backgroundSize: `${theme.sizing(3, 3)}, cover`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'bottom right',
  paddingLeft: theme.sizing(6),
  paddingRight: theme.sizing(6),

  [theme.mediaQueries.down('mobile')]: {
    padding: theme.sizing(2),
  },
}));
