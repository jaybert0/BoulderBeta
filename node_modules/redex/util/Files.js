// Copyright (c) 2015, Evan Summers (twitter.com/evanxsummers)
// ISC license, see http://github.com/evanx/redexutil/LICENSE

import fs from 'fs';

import Promises from './Promises';
import Loggers from './Loggers';

const logger = Loggers.create(module.filename);

const Files = {
   stat(path) {
      logger.debug('stat', path);
      return Promises.create(cb => fs.stat(path, cb));
   },
   existsFile(file) {
      return Files.stat(file).then(stats => stats.isFile()).catch(err => {
         logger.debug('existsFile', err.message);
         return false;
      });
   },
   existsFileSync(file) {
      try {
         return fs.statSync(file).isFile();
      } catch (err) {
         logger.debug('existsFileSync', err.message);
         return false;
      }
   },
   watchChanged(dir, timeout) {
      return new Promise((resolve, reject) => {
         let watcher = fs.watch(dir, (eventType, file) => {
            watcher.close();
            logger.debug('watch', dir, eventType, file);
            if (eventType === 'change') {
               resolve(file);
            } else {
               reject(eventType);
            }
         });
         setTimeout(() => {
            watcher.close();
            logger.debug('watch timeout', dir, timeout);
            reject('timeout: ' + timeout);
         }, timeout);
      });
   },
   readFile(file) {
      logger.debug('readFile', file);
      return new Promise((resolve, reject) => {
         fs.readFile(file, (err, content) => {
            logger.debug('readFile', file, {err});
            if (err) {
               reject(err);
            } else {
               logger.debug('readFile resolve:', file, content.length);
               resolve(content);
            }
         });
      });
   },
   writeFile(file, content) {
      logger.debug('writeFile', file);
      return new Promise((resolve, reject) => {
         fs.writeFile(file, content, err => {
            logger.debug('writeFile', file, {err});
            if (err) {
               reject(err);
            } else {
               resolve();
            }
         });
      });
   }
};

module.exports = Files;
