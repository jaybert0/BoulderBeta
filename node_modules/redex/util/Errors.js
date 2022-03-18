// Copyright (c) 2015, Evan Summers (twitter.com/evanxsummers)
// ISC license, see http://github.com/evanx/redexutil/LICENSE

const Errors = {
   decorate(error, decoration) {
      if (decoration) {
         if (error.name === 'YAMLException') {
            let err = Object.assign(decoration, {reason: error.reason});
            if (error.mark) {
               Object.keys(error.mark).filter(
                  name => name !== 'buffer'
               ).forEach(name => {
                  err[name] = error.mark[name];
               });
            }
            err.name = 'AbbreviatedYAMLException';
            return err;
         } else {
         }
      } else {

      }
      return error;
   },
   log(logger, error) {
      if (error.name === 'AssertionErrorX') {
         logger.error('Assertion: ' + error.message);
      } else {
         logger.error('start', error);
         if (error.stack) {
            console.error(error.stack);
         }
      }
   }
};

module.exports = Errors;
