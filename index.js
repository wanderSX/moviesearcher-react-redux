const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('./models/User');
const authRouter = require('./routes/authRouter');
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

authRouter(app);

const PORT = process.env.PORT || 5000 ;
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
})