// Copyright (c) 2015, Evan Summers (twitter.com/evanxsummers)
// ISC license, see http://github.com/evanx/redexutil/LICENSE

import assert from 'assert';

import Loggers from './Loggers';

const logger = Loggers.create(module.filename);

const that = {
   props(object) {
      let map = new Map();
      Object.keys(object).forEach(key => {
         let value = object[key];
         map.set(key, value);
      });
      return map;
   }
}

module.exports = that;
