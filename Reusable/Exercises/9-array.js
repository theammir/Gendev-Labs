'use strict';

/* Collections: Array, Hash (Object)

Implement phone book using array of records.
- Define Array of objects with two fields: `name` and `phone`.
Object example: `{ name: 'Marcus Aurelius', phone: '+380445554433' }`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from that object
where field `name` equals argument `name`. Use `for` loop for this search. */

const phonebook = [
  { name: 'Joe Biden', phone: '+14821928' },
  { name: 'Donald Trump', phone: '+12374927' },
  { name: 'Kamala Harris', phone: '+38066502819' }
];

const findPhoneByName = (name) => {
  for (const entry of phonebook) {
    if (entry.name === name) {
      return entry.phone;
    }
  }
};

module.exports = { phonebook, findPhoneByName };
