import { render } from '@testing-library/react';
import { MarvelLogo } from '../marvel-logo';

describe('Marvel logo component', () => {
  it('Should render the logo', () => {
    const { container } = render(<MarvelLogo />);

    expect(container).toMatchSnapshot();
  });
});
