'use strict';

// Implement function `rangeOdd(start: number, end: number)` returning
// array with all odd numbers from the range [15, 30] including endpoints

// I don't know how to import and I couldn't care less
const range = (start, end) => {
  if (end < start) {
    return [];
  }
  const array = [...Array(end - start + 1).keys()];
  return array.map((index) => index + start);
};

const rangeOdd = (start, end) => range(start, end)
  .filter((element) => Math.abs(element) % 2 === 1);

module.exports = { rangeOdd };
