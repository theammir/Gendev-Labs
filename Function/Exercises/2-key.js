'use strict';

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const generateKey = (length, characters) => {

  const key = [];
  for (let i = 0; i < length; i++) {
    key.push(characters[random(0, characters.length - 1)]);
  }

  return key.join('');
};

module.exports = { generateKey };
