/* eslint-disable no-underscore-dangle */

const { queueObj, queuePromise } = require(`${config.path.app}/services`);

const queueController = {

  hc: (req, res) => res.sendStatus(200),

  log: async (req, res, next) => {
    queuePromise().then(() => {
      const data = req.body;
      if (data) {
        queueObj.now(config.db_task_name, data);
      }
      res.json('OK');
    }).catch((e) => {
      next(e);
    });
  },
};

module.exports = queueController;
