// Copyright (c) 2015, Evan Summers (twitter.com/evanxsummers)
// ISC license, see http://github.com/evanx/redexutil/LICENSE

import lodash from 'lodash';

import Loggers from './Loggers';

const logger = Loggers.create(module.filename);

function createCallback(resolve, reject) {
   return (err, reply) => {
      if (err) {
         reject(err);
      } else {
         resolve(reply);
      }
   };
}

module.exports = {
   create(fn) {
      return new Promise((resolve, reject) => fn(createCallback(resolve, reject)));
   },
   delay(millis) {
      return new Promise((resolve, reject) => {
         setTimeout(() => resolve(), millis);
      });
   },
   timeout(reason, timeout, promise) {
      if (timeout) {
         return new Promise((resolve, reject) => {
            console.warn('timeout', typeof promise);
            promise.then(resolve, reject);
            setTimeout(() => {
               reject(reason + ' (' + timeout + 'ms)');
            }, timeout);
         });
      } else {
         return promise;
      }
   },
   notEmpty(value, reason) {
      if (!lodash.isEmpty(value)) {
         return Promise.resolve(value);
      } else {
         return Promise.reject(reason);
      }
   },
   isEmpty(value, reason) {
      if (lodash.isEmpty(value)) {
         return Promise.resolve(value);
      } else {
         return Promise.reject(reason);
      }
   }
};
