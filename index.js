/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */

require('./bootstrap');
const app = require('./app');

const { queuePromise } = require(`${config.path.app}/services`);

const port = config.port || 5000;

queuePromise().then(() => {
  console.log('Queue is ready');
  app.listen(port, () => {
    console.log('App is running on port ', port);
  });
}).catch((e) => {
  console.error('DB error', e);
  process.exit(1);
});
