"use strict";

var _foo = require("./foo");

var _foo2 = _interopRequireDefault(_foo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const o = require('ospec');

o("my test", () => o((0, _foo2.default)()).equals('hi!'));
o.run();