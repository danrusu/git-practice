import Dummy from "../src/Dummy";

describe('Dummy TS suite', () => {  
  it('Dummy TS test', () => {
    const dummy = new Dummy('TS test')    
    console.log(dummy.getMessage());
  });
});
