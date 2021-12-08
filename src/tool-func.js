// A capitalize function that takes a string and returns it with the first character capitalized.
const capitalizeString = function capitalizeString(str) {
  if (!/^[a-z]/i.test(str)) {
    throw new Error('formation error');
  }
  const capitalizedFirstChar = str[0].toUpperCase();
  const restString = str.slice(1);
  const resultString = capitalizedFirstChar + restString;
  return resultString;
};

// A reverseString function that takes a string and returns it reversed.
const reverseString = function reverseString(str) {
  return str.split('').reverse().join('');
};

// An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.
const analyzeArray = function analyzeArray(arr) {
  const isNumType = arr.some((item) => typeof item !== 'number');
  if (isNumType) {
    throw new Error('include nonnumeric items');
  }
  const analyzeResult = {
    average: null,
    min: null,
    max: null,
    length: null,
  };
  const sortedArr = arr.concat([]).sort((a, b) => a - b);
  const sumArr = arr.reduce((pre, curr) => pre + curr, 0);
  analyzeResult.length = arr.length;
  [analyzeResult.min] = sortedArr;
  analyzeResult.max = sortedArr[arr.length - 1];
  analyzeResult.average = sumArr / arr.length;

  return analyzeResult;
};

// export default { capitalizeString };
module.exports = { capitalizeString, reverseString, analyzeArray };
