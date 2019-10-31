/* eslint-disable wrap-iife */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */

require('./bootstrap');
const app = require('./app');

const port = config.port || 5000;

// eslint-disable-next-line func-names
(async function () {
  try {
    app.listen(port);
    console.log('Queue server is running on port', port);
  } catch (e) {
    console.error('Error when starting the app', e);
    process.exit(1);
  }
})();
