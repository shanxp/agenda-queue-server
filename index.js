/* eslint-disable no-console */

const os = require('os');
const Agenda = require('agenda');
require('./bootstrap');
const app = require('./app');

const port = config.port || 5000;

function connectionError(e) {
  if (e) {
    console.log('DB error', e);
  }
}

const queue = new Agenda({
  db: {
    address: config.connection,
    collection: config.db_main_collection,
    options: {
      useNewUrlParser: true,
    },
  },
  name: `${config.app.name} ${config.app.version} - ${os.hostname()} ${process.pid}`,
},
connectionError);

queue.on('ready', () => {
  global.services = {
    queue,
  };
  console.log('Queue is ready');
  app.listen(port, () => {
    console.log('App is running on port ', port);
  });
});
