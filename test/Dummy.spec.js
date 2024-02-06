const Dummy = require('../src/Dummy').default;

describe('Dummy JS suite', () => {
  it('Dummy JS test', () => {
    const dummy = new Dummy('JS test');
    //throw new Error('intended failure'); // uncomment to fail the husky pre-commit hook
    console.log(dummy.getMessage());
  });
});
