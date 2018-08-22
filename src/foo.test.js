import foo from './foo';

const o = require('ospec');

o( "my test", () => o( foo() ).equals('hi!') );

o.run();
