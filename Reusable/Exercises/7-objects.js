'use strict';

/* Do following tasks inside function `fn` (see stub: `7-objects.js`)
- Define constant object with single field `name`.
- Define variable object with single field `name`.
- Try to change field `name`.
- Try to assign other object to both identifiers.
- Explain script behaviour. */

const fn = () => {
  const immutableObj = { name: null };
  let mutableObj = { name: null };

  immutableObj.name = '1234';
  mutableObj.name = '1234';

  // immutableObj = { name: '5678' };
  // ^ can change stored object, cannot overwrite the object if immutable
  mutableObj = { name: '5678' };
};

module.exports = { fn };
