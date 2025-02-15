import { useNavigate, useSearch } from '@tanstack/react-router';
import { SearchField } from '@ui/components/search-field';
import { ChangeEvent, ReactNode, useEffect, useState } from 'react';
import { useDebounce } from '@uidotdev/usehooks';
import { DEFAULT_DEBOUNCE_TIME } from '@ui/shared/constants';

export const CharacterSearch = ({ to = '/' }: { to?: string }): ReactNode => {
  const navigate = useNavigate();
  const { search } = useSearch({ strict: false });
  const [searchTerm, setSearchTerm] = useState(search ?? '');
  const debouncedSearch = useDebounce(searchTerm, DEFAULT_DEBOUNCE_TIME);

  useEffect(() => {
    const searchParams = debouncedSearch
      ? { search: debouncedSearch }
      : undefined;

    navigate({
      to,
      search: searchParams,
    });
  }, [to, debouncedSearch, navigate]);

  const searchFieldOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value);
  };

  return (
    <SearchField
      fullWidth
      name="search-character"
      value={searchTerm}
      onChange={searchFieldOnChange}
    />
  );
};
