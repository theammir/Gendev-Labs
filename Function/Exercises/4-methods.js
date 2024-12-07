'use strict';

const methods = (iface) => Object.entries(iface)
  .map(([name, func]) => [name, func.length]);

module.exports = { methods };
