'use strict';

const countTypesInArray = (array) => {
  const typesCount = {};

  for (const element of array) {
    const type = typeof element;
    if (typesCount[type] === undefined) {
      typesCount[type] = 0;
    }

    typesCount[type]++;
  }
  return typesCount;
};

module.exports = { countTypesInArray };
