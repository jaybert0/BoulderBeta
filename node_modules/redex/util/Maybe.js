// Copyright (c) 2015, Evan Summers (twitter.com/evanxsummers)
// ISC license, see http://github.com/evanx/redexutil/LICENSE

// similar to Promise, but synchronously invoked

import Loggers from './Loggers';

const logger = Loggers.create(module.filename, 'info');

export default class Maybe {

   // param fn takes no arguments and returns value or throws error
   static call(fn) {
      try {
         let value = fn();
         logger.debug('call', value);
         if (typeof value.then === 'function') {
            return value;
         } else {
            return Maybe.resolve(value);
         }
      } catch (err) {
         logger.warn('call', err);
         return Maybe.reject(err);
      }
   }

   static resolve(value) {
      return {
         get has() {
            return true;
         },
         get value() {
            return value;
         },
         then(resolve) {
            try {
               return Maybe.resolve(resolve(value));
            } catch (err) {
               if (err.stack) {
                  logger.warn('resolve', err.stack);
               } else {
                  logger.warn('resolve', err);
               }
               return Maybe.reject(err);
            }
         },
         catch(err) {
         },
         toString() {
            return `Maybe.resolve(${value})`;
         }
      };
   }

   static reject(reason) {
      let rejected = false;
      return {
         get has() {
            return false;
         },
         get value() {
            throw reason;
         },
         then(resolve, reject) {
            if (reject) {
               rejected = true;
               return Maybe.resolve(reject(reason));
            } else {
               logger.warn('then', reason);
               return Maybe.reject(reason);
            }
         },
         catch(reject) {
            if (!rejected) {
               return Maybe.resolve(reject(reason));
            }
         },
         toString() {
            return `Maybe.reject(${reason})`;
         }
      };
   }

   static key(object, key, reason) {
      assert(object, 'object');
      assert(key, 'key');
      if (object.hasOwnProperty[key]) {
         return Maybe.resolve(object[key]);
      } else {
         if (!reason) {
            reason = 'no key: ' + key;
         }
         return Maybe.reject(reason);
      }
   }

   static notEmpty(value, reason) {
      if (!lodash.isEmpty(value)) {
         return Maybe.resolve(value);
      } else {
         return Maybe.reject(reason || 'empty');
      }
   }

   static isEmpty(value, reason) {
      if (lodash.isEmpty(value)) {
         return Maybe.resolve();
      } else {
         return Maybe.reject(reason || 'not empty');
      }
   }
}
