const express = require('express');

const app = express();

app.use(express.json());

// Auth
app.use((req, res, next) => {
	req.user = {
		id: '1',
		username: 'Prajwal',
	};
	// throw new Error('Error');
	next();
});

app.use('/api', require('./routes'));

app.use((err, req, res, next) => {
	res.status(500).json({
		err,
	});
});

app.listen(8080, () => {
	console.log('Server is Started');
});
