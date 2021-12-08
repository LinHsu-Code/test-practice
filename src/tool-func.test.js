// import toolFuncs from './tool-func';
const toolFuncs = require('./tool-func');

// Tests for function:capitalizeString
// case: first char is a lowercase
test('Capitalize String: first char is a lowercase', () => {
  expect(toolFuncs.capitalizeString('test string')).toBe('Test string');
});

// case: first char is a uppercase
test('Capitalize String: first char is a uppercase', () => {
  expect(toolFuncs.capitalizeString('Test string')).toBe('Test string');
});

// case: first char is not alphabetic
test('Capitalize String: first char is not alphabetic', () => {
  function capitalizeNonalphabet() {
    toolFuncs.capitalizeString('-test string');
  }
  expect(capitalizeNonalphabet).toThrow(/formation error/);
});

// Tests for function: reverseString
// case: mormal string
test('reverseString: normal string', () => {
  expect(toolFuncs.reverseString('reverse')).toBe('esrever');
});

// Tests for function: analyzeArray
// case: all numbers
test('analyzeArray: all numbers', () => {
  expect(toolFuncs.analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

// case: include nonnumeric items
test('analyzeArray: include nonnumeric items', () => {
  function analyzeNonnumerics() {
    toolFuncs.analyzeArray([1, 'a', [10], { a: 7 }]);
  }
  expect(analyzeNonnumerics).toThrow(/nonnumeric/);
});
