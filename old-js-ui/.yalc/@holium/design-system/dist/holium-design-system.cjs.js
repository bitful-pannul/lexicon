'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./holium-design-system.cjs.prod.js");
} else {
  module.exports = require("./holium-design-system.cjs.dev.js");
}
