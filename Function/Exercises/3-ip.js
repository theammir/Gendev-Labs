'use strict';

const ipToInt = (ip = '127.0.0.1') => ip.split('.')
  .map((octet) => parseInt(octet))
  .map((value, index, array) => value << (8 * (array.length - index - 1)))
  .reduce((acc, value) => acc + value);

module.exports = { ipToInt };
