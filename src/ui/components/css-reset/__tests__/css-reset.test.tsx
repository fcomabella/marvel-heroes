import { render } from '@testing-library/react';
import { CssReset } from '../css-reset';

describe('CssReset component', () => {
  it('Should render', () => {
    const { container } = render(<CssReset />);
    expect(container).toMatchSnapshot();
  });
});
