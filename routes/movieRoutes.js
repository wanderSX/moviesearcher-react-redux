module.exports = (app) => {
	app.post('/api/user/favorite_movies/add', async (req, res) => {
		const { id } = req.body;

		req.user.favoriteMovies.push(id);
		const user = await req.user.save();

		res.send(user);
	});

	app.post('/api/user/favorite_movies/remove', async (req, res) => {
		const { id } = req.body;
		console.log('id', id);
		const index = req.user.favoriteMovies.indexOf(id);

		req.user.favoriteMovies.splice(index, 1);
		const user = await req.user.save();

		res.send(user);
	});
}