// Copyright (c) 2015, Evan Summers (twitter.com/evanxsummers)
// ISC license, see http://github.com/evanx/redexutil/LICENSE

import assert from 'assert';

import Loggers from './Loggers';

const logger = Loggers.create(module.filename);

const that = {

   assert(value, message) {
      assert(value, message);
   },

   assertNumber(value, message) {
      assert(!isNaN(value), message);
   }
}

module.exports = that;
