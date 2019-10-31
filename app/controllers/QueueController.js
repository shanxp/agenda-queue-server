/* eslint-disable no-underscore-dangle */

const { MongoClient } = require('mongodb');
const os = require('os');

const modifiedBy = `${config.app.name} ${config.app.version} - ${os.hostname()} ${process.pid}`;

const queueController = {

  hc: (req, res) => res.sendStatus(200),

  index: async (req, res, next) => {
    const nowISOStr = new Date().toISOString();
    const nowISO = new Date(nowISOStr);
    const data = req.body || null;
    const { type } = req.query || null;

    if (!data || !type) {
      const error = new Error(`Not enough data provided! data: ${data} - type: ${type}`);
      next(error);
    } else {
      try {
        const doc = {
          name: type,
          data,
          type: 'normal',
          priority: 0,
          nextRunAt: nowISO,
          lastModifiedBy: modifiedBy,
        };
        const client = await MongoClient.connect(config.connection,
          {
            useNewUrlParser: true,
            // socketTimeoutMS: 10000,
            useUnifiedTopology: true,
            connectTimeoutMS: Number(config.db_connection_timeout_ms),
          });

        const db = await client.db(config.db_main_name);
        const mongo = await db.collection(config.db_main_collection);
        await mongo.insertOne(doc);
        await client.close();
        res.json('OK');
      } catch (e) {
        next(e);
      }
    }
  },
};

module.exports = queueController;
