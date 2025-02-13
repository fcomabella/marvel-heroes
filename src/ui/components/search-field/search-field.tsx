import { ReactNode } from 'react';
import { SearchIcon } from '../search-icon/search-icon';
import { SearchFieldProps } from './search-field-props';
import { SearchFieldRoot } from './search-field-root';
import { SearchFieldInput } from './search-field-input';

export const SearchField = ({
  name,
  label = 'Search',
  fullWidth = false,
  value,
  onChange,
  ...props
}: SearchFieldProps): ReactNode => {
  return (
    <SearchFieldRoot
      fullWidth={fullWidth}
      id={`${name}-root`}
      data-testid={`${name}-root`}
    >
      <SearchIcon id={`${name}-icon`} />
      <SearchFieldInput
        {...props}
        name={name}
        id={name}
        type="search"
        aria-label={label}
        placeholder={label}
        value={value}
        onChange={onChange}
      />
    </SearchFieldRoot>
  );
};
