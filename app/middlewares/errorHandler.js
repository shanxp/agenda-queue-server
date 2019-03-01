const err = {
  handle: (error, req, res, next) => {
    if (error) {
      // display error
      const statusCode = error.status || 500;
      res.status(statusCode);
      res.json({ message: `Error occured - ${error.message}` });
      res.end();
    }
    next();
  },
};

module.exports = err;
