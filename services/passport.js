const passport = require('passport');
const TwitterStrategy  = require('passport-twitter').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('user');

passport.serializeUser((user, done) => {
	done(null, user.id);
})

passport.deserializeUser(async (id, done) => {
	const user = await User.findById(id);
	if (user) {
		return done(null, user);
	}
	done(null, false);

})

passport.use(
	new TwitterStrategy({
		consumerKey: keys.twitterConsumerKey,
		consumerSecret: keys.twitterConsumerSecret,
		callbackURL: 'http://localhost:5000/auth/twitter/callback'
	},
	async (token, tokenSecret, profile, done) => {
		const existingUser = await User.findOne({ twitterId: profile.id });

		if (existingUser) {
			return done(null, existingUser);
		}

		const user = await new User({ twitterId: profile.id }).save();
		done(null, user);
	})
);	