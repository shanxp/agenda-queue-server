
const queueController = {
  hc: (req, res) => res.sendStatus(200),
  log: (req, res, next) => {
    try {
      const data = req.body;
      if (data) {
        services.queue.now('log', data);
      }
      res.json('OK');
    } catch (err) {
      next(err);
    }
  },
};

module.exports = queueController;
