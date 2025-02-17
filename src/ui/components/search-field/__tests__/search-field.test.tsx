import { render, screen } from '@testing-library/react';
import { SearchField } from '../search-field';
import { userEvent } from '@testing-library/user-event';

describe('SearchField component', () => {
  it('Should render', () => {
    render(<SearchField name="test-search" onChange={() => {}} value="" />);

    const input = screen.getByRole('searchbox', { name: 'Search' });

    expect(input).toBeInTheDocument();
  });

  it('Should set the label', () => {
    render(
      <SearchField
        name="test-search"
        onChange={() => {}}
        value=""
        label="test-search"
      />
    );

    const input = screen.getByRole('searchbox', { name: 'test-search' });

    expect(input).toBeInTheDocument();
  });

  it('Should render fullwidth', () => {
    render(
      <SearchField name="test-search" onChange={() => {}} value="" fullWidth />
    );

    const rootElement = screen.getByTestId('test-search-root');

    expect(rootElement).toHaveStyle({ width: '100%' });
  });

  it('Should render auto width', () => {
    render(<SearchField name="test-search" onChange={() => {}} value="" />);

    const rootElement = screen.getByTestId('test-search-root');

    expect(rootElement).toHaveStyle({ width: 'auto' });
  });

  it('Should have the assigned value', () => {
    render(
      <SearchField
        name="test-search"
        onChange={() => {}}
        value="test-value"
        fullWidth
      />
    );

    const input = screen.getByRole('searchbox', { name: 'Search' });

    expect(input).toHaveValue('test-value');
  });

  it('Should call onChange', async () => {
    const testString = 'this is a test';
    const user = userEvent.setup();
    const onChangeMock = vi.fn();

    render(
      <SearchField name="test-search" onChange={onChangeMock} fullWidth />
    );

    const input = screen.getByRole('searchbox', { name: 'Search' });

    await user.type(input, testString);

    expect(onChangeMock).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: testString }),
      })
    );
  });
});
