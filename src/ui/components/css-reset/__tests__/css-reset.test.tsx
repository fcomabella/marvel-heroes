import { render } from '@__tests__/render';
import { CssReset } from '../css-reset';

describe('CssReset component', () => {
  it('Should render', () => {
    const { container } = render(<CssReset />);
    expect(container).toMatchSnapshot();
  });
});
