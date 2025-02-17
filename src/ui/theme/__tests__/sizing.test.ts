import { sizing } from '@ui/theme/sizing';

describe('sizing helper', () => {
  it('Should return the 8px grid units in rem', () => {
    expect(sizing(1)).toEqual('0.5rem');
    expect(sizing(2)).toEqual('1rem');
    expect(sizing(1, 2)).toEqual('0.5rem 1rem');
  });
});
