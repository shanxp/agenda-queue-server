
const express = require('express');

const router = express.Router();
const controller = require('../controllers');

router.get('/', controller.queueController.hc);
router.post('/', controller.queueController.hc);
router.get('/hc', controller.queueController.hc);
router.post('/log', controller.queueController.log);
router.get('*', controller.errorController.index); // catch-all route

module.exports = router;
