const express = require('express');

const router = express.Router();

router.use((req, res) => {
	res.json({
		msg: 'You called Admin ',
	});
});

module.exports = router;
