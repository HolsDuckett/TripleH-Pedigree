it('adjusts height of paragraph proportional to how many failed expectations', () => {
  expect(2).toEqual(3);
  expect(2).toEqual(4);
  expect(2).toEqual(5);
})

it('passes equal to', () => {
  expect(2).toEqual(2);
});

it('passes equal to with two examples', () => {
  expect(2).toEqual(2);
  expect(20000).toEqual(20000);
});

it('passes not equal to', () => {
  expect(2).not('toEqual(3)');
})

it('passes throws an error', () => {
  error = () => {throw new Error('this should pass')};
  expect(error).toThrowError('this should pass');
});

it('fails equal to', () => {
  expect(2).toEqual(3);
});

it('fails not equal to', () => {
  expect(2).not('toEqual(2)');
})

it('fails throws an error and returns error', () => {
  var error = () => {throw new Error('this should pass')};
  expect(error).toThrowError('this should not pass');
});

it('fails throws an error when no error thrown', () => {
  var coolBeans = () => { 'coool ' + 'beans' }
  expect(coolBeans).toThrowError('this should not pass');
});

it('displays only the failing test', () => {
  expect(2).toEqual(2);
  expect(2).toEqual(3);
})
