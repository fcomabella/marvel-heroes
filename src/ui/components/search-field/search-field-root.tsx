import styled from '@emotion/styled';
import { SearchFieldRootProps } from './search-field-root-props';

export const SearchFieldRoot = styled('div')<SearchFieldRootProps>(
  ({ theme, fullWidth }) => ({
    display: 'inline-flex',
    width: fullWidth ? '100%' : 'auto',
    borderBottom: `${theme.sizing(0.06125)} solid #000000`,
    paddingBottom: theme.sizing(1),
    gap: theme.sizing(1.5),
    alignItems: 'center',
  })
);
