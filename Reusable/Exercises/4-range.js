'use strict';

// Implement function `range(start: number, end: number): array` returning
// array with all numbers from the range [15, 30] including endpoints

const range = (start, end) => {
  if (end < start) {
    return [];
  }
  const array = [...Array(end - start + 1).keys()];
  return array.map((index) => index + start);
};

module.exports = { range };
