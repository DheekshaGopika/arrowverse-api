const axios = require('axios')

test('Scraped characters should be equal to DB characters (length)', () => {
	return axios
		.get('https://arrowverse-api.vercel.app/api/characters?only=names')
		.then(({ data }) => data.names.length)
		.then(result => {
			axios
				.get('https://arrowverse-api.vercel.app/api/characters?all=true')
				.then(({ data }) => expect(data.length).toBe(result))
				.catch(console.error)
		})
		.catch(console.error)
}, 30000)
