export const error404 = (req, res) => {
	res.status(404)
	res.json('404 | страница не найдена')
}
