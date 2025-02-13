import styled from '@emotion/styled';
import { SearchFieldRootProps } from './search-field-root-props';

export const SearchFieldRoot = styled('div')<SearchFieldRootProps>(
  ({ fullWidth }) => ({
    display: 'inline-flex',
    width: fullWidth ? '100%' : 'auto',
    borderBottom: '1px solid #000000',
    paddingBottom: '8px',
    gap: '12px',
    alignItems: 'center',
  })
);
