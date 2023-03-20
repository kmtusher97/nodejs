const { Router } = require('express');
const Controller = require('./controller');

const router = Router();

router.get('/person', Controller.getUser);

module.exports = router;
