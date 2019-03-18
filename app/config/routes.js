
const express = require('express');

const router = express.Router();
const controllers = require('../controllers');

router.get('/', controllers.queue.hc);
router.post('/', controllers.queue.hc);
router.get('/hc', controllers.queue.hc);
router.post('/queue', controllers.queue.index);
router.get('*', controllers.error.index); // catch-all route

module.exports = router;
