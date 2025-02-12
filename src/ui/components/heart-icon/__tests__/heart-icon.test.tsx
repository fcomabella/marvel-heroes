import { render } from '@testing-library/react';
import { HeartIcon } from '../heart-icon';

describe('HeartIcon component', () => {
  it('Should render the default heart', () => {
    const { container } = render(<HeartIcon />);

    expect(container).toMatchSnapshot();
  });

  it('Should render the unselected heart', () => {
    const { container } = render(<HeartIcon unselected />);

    expect(container).toMatchSnapshot();
  });
});
