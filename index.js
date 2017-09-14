const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('./models/User');
const authRoutes = require('./routes/authRoutes');
const movieRoutes = require('./routes/movieRoutes');
const keys = require('./config/keys');
require('./services/passport');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

const app = express();
app.use(bodyParser.json());
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey]
	})
);
app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);
movieRoutes(app);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
	const loggs = (req, res, next) => {
		console.log("BLA BLA BLA");
		console.log(req);
		next();
	}
	const path = require('path');
	app.get("*", loggs, (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	})
}

const PORT = process.env.PORT || 5000 ;
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
})