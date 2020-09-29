const mongoose = require('mongoose')
require('dotenv').config()

const Character = require('../../../models/Character')

mongoose.connect(process.env.DB_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})

module.exports = async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*')
	res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS')
	if (req.method === 'OPTIONS') {
		res.status(200).end()
		return
	}

	const { page = 1, limit = 10 } = req.query
	const result = await Character.find()
	res.json(result.slice(+page * +limit - +limit, +page * +limit))
}