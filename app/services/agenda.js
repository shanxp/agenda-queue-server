const Agenda = require('agenda');

module.exports = {
  init: (cb) => {
    if (cb) {
      return new Agenda({
        db: {
          address: config.connection,
          collection: config.db_main_collection,
          options: {
            useNewUrlParser: true,
          },
        },
        name: `${config.app.name} ${config.app.version}`,
      }, cb);
    }

    return new Agenda({
      db: {
        address: config.connection,
        collection: config.db_main_collection,
        options: {
          useNewUrlParser: true,
        },
      },
      name: `${config.app.name} ${config.app.version}`,
    });
  },
};
