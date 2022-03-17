// Copyright (c) 2015, Evan Summers (twitter.com/evanxsummers)
// ISC license, see http://github.com/evanx/redexutil/LICENSE

import assert from 'assert';
import lodash from 'lodash';

import Loggers from './Loggers';

const logger = Loggers.create(module.filename);

function getMessage(millis, message) {
   return message + ': ' + millis;
}

const factors = {
   ms: 1,
   s: 1000,
   m: 1000*60,
   h: 1000*60*60,
   d: 1000*60*60*24
};

var that = {
   format(millis) {
      if (millis < factors.s) {
         return '' + millis + 'ms';
      } else if (millis < factors.m) {
         return '' + parseInt(millis/factors.s) + 's';
      } else if (millis < factors.h) {
         return '' + parseInt(millis/factors.m) + 'm';
      } else if (millis < factors.d) {
         return '' + parseInt(millis/factors.h) + 'h';
      } else {
         return '' + parseInt(millis/factors.d) + 'd';
      }
   },
   fromSeconds(seconds) {
      return seconds * factors.s;
   },
   fromMinutes(minutes) {
      return minutes * factors.m;
   },
   parse(millis, defaultValue) {
      if (lodash.isNumber(millis)) {
         return millis;
      } else if (!lodash.isString(millis)) {
         logger.warn('parse typeof: ' + typeof millis);
         return defaultValue;
      }
      if (/^[0-9]+$/.test(millis)) {
         return parseInt(millis);
      }
      let match = millis.match(/^([0-9]+)([a-z]*)$/);
      if (match.length === 3) {
         assert(factors[match[2]], 'factor: ' + match[2]);
         let value = parseInt(match[1]);
         let factor = factors[match[2]];
         return value * factor;
      }
      return defaultValue;
   },
   assert(millis, message) {
      message = message + ': ' + millis;
      assert(millis, message);
      let value = that.parse(millis, -1);
      assert(value >= 0, message + ': ' + value);
      return value;
   }
}

module.exports = that;
