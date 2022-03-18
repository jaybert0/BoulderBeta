// Copyright (c) 2015, Evan Summers (twitter.com/evanxsummers)
// ISC license, see http://github.com/evanx/redexutil/LICENSE

import fs from 'fs';
import yaml from 'js-yaml';

import Errors from './Errors';
import Files from './Files';
import Loggers from './Loggers';
import Maybe from './Maybe';

const logger = Loggers.create(module.filename);

const YamlFiles = {
   readFileSyncMaybe(file) {
      logger.debug('readFileSyncMaybe', file);
      if (Files.existsFileSync(file)) {
         return Maybe.resolve(YamlFiles.readFileSync(file));
      } else {
         return Maybe.reject(file);
      }
   },
   readFileSyncDir(dir, file) {
      return YamlFiles.readFileSync(Paths.join(dir, file));
   },
   readFile(file) {
      return Files.readFile(file).then(content => yaml.safeLoad(content));
   },
   readFileSync(file) {
      try {
         return yaml.safeLoad(fs.readFileSync(file, 'utf8'));
      } catch (e) {
         throw Errors.decorate(e, {file});
      }
   }
};

module.exports = YamlFiles;
