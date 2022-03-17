// Copyright (c) 2015, Evan Summers (twitter.com/evanxsummers)
// ISC license, see http://github.com/evanx/redexutil/LICENSE

// warning this automatically loads a number of modules in global

import assert from 'assert';
import lodash from 'lodash';

const startTime = new Date().getTime();

['assert', 'lodash', 'path'].forEach(moduleName => {
   module.exports[moduleName] = require(moduleName);
});

module.exports._ = module.exports.lodash;

['Asserts', 'Collections', 'Errors', 'Files',
   'Loggers', 'Maps', 'Millis', 'Maybe', 'Objects',
   'Paths', 'Promises', 'Requests', 'Seconds',
   'YamlFiles'
   ].forEach(moduleName => {
      module.exports[moduleName] = require('./' + moduleName);
});

if (process.env.loggerLevel === 'debug') {
   const duration = new Date().getTime() - startTime;
   console.log(module.filename, duration, Object.keys(module.exports));
}
