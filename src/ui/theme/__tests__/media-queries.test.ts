import { theme } from '@ui/theme';
import { between, down, up } from '@ui/theme/media-queries';

describe('Media queries', () => {
  it('should render min-width', () => {
    const query = up('tablet', theme);
    expect(query).toEqual(
      `@media (min-width: ${theme.breakpoints['tablet']}px)`
    );
  });

  it('should render max-width', () => {
    const query = down('tablet', theme);
    expect(query).toEqual(
      `@media (max-width: ${theme.breakpoints['tablet']}px)`
    );
  });

  it('should render min-width and max-width', () => {
    const query = between('mobile', 'tablet', theme);
    expect(query).toEqual(
      `@media (min-width: ${theme.breakpoints['mobile']}px) and (max-width: ${theme.breakpoints['tablet']}px)`
    );
  });

  it('Should throw when start is grater than end', () => {
    expect(() => between('tablet', 'mobile', theme)).toThrowError(
      'End breakpoint must be greater than start breakpoint'
    );
  });
});
