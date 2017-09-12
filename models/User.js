const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
	twitterId: String,
	favoriteMovies: [Number]
});

mongoose.model('user', userSchema);