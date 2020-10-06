const {
  calculateStyle1,
  calculateStyle2,
  calculateStyle3
} = require("../../examples/functions");

describe('Test of same calculation written in different ways', () => {

  test('Calculate function defines object in parameters', () => {
    const obj = 
    {
      x: 3.6, 
      y: 7.8
    };
    expect(calculateStyle1(obj)).toBe(5);
  })

  test('Calculate function unpacks the object within the function', () => {
      const obj = 
      {
        x: 3.6, 
        y: 7.8
      };
      expect(calculateStyle2(obj)).toBe(5);
  });


  test('Calculate function unpacks the object variable by variable', () => {
    const obj = 
    {
      x: 3.6, 
      y: 7.8
    };
    expect(calculateStyle3(obj)).toBe(5);
});





})

