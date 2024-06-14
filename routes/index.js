const express = require('express');
const controller = require('../controllers/healthcontroller');
const router = express.Router();

router.use((req, res, next) => {
	req.user = {
		id: '1',
		username: 'Prajwal Router',
	};
	next();
});

router.get('/', controller.controller);
router.use('/v1', require('./v1'));

module.exports = router;
