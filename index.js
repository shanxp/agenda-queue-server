/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */

require('./bootstrap');
const app = require('./app');

const { queuePromise } = require(`${config.path.app}/services`);

const port = config.port || 5000;

// eslint-disable-next-line func-names
(async function () {
  try {
    app.listen(port);
    await queuePromise();
    console.log('Queue server is running on port', port);
  } catch (e) {
    console.error('Error when starting the app', e);
    process.exit(1);
  }
}());
