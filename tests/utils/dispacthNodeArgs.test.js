const { dispatchNodeArgs } = require('../../utils/dispatchNodeArgs');

describe('dispatchNodeArgs function', () => {

  it('should return a message when no argument is passed', () => {
    const result = dispatchNodeArgs();
    expect(result).toBe('--- please, pass an argument like `--filter=ry` or `--count`');
  });

  it('should return a message when an argument without filter is passed', () => {
    const result = dispatchNodeArgs('--someRandomArgument');
    expect(result).toBe('--- please, pass an argument like `--filter=ry` or `--count`');
  });

  it('should return a message when --filter argument is passed without a value', () => {
    const result = dispatchNodeArgs('--filter=');
    expect(result).toBe('--- please, pass an argument like `--filter=ry` or `--count`');
  });

});
