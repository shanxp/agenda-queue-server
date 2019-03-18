/* eslint-disable no-underscore-dangle */

const { queueObj, queuePromise } = require(`${config.path.app}/services`);

const queueController = {

  hc: (req, res) => res.sendStatus(200),

  index: async (req, res, next) => {
    queuePromise().then(() => {
      const data = req.body;
      const { type } = req.query;
      if (data && type) {
        queueObj.now(type, data);
      }
      res.json('OK');
    }).catch((e) => {
      next(e);
    });
  },
};

module.exports = queueController;
