const dataFromCMS = (query) =>
	fetch(process.env.CMS_ENDPOINT, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ query })
	})
		.then((response) => response.json())
		.then((json) => json.data)

module.exports = function (config) {
	config.addPassthroughCopy('images')
	config.addPassthroughCopy('src/styles')
	config.addPassthroughCopy('src/site.webmanifest')
	config.addPassthroughCopy('src/favicon.ico')

	// config.addGlobalData(
	//   "cms",
	//   dataFromCMS(`query {
	// 	basic(where: {id: "clnctyp51hrrk0bmz4xfaxc5r"}) {
	// 		name
	// 		longName
	// 		shortIntro {
	// 			text
	// 			html
	// 		}
	// 		logo {
	// 			url
	// 		}
	// 		email
	// 		address
	// 		whatWeDo {
	// 			text
	// 			html
	// 		}
	// 		whoWeAre {
	// 			text
	// 			html
	// 		}
	// 		publications {
	// 			text
	// 			html
	// 		}
	// 		joinUs {
	// 			html
	// 			text
	// 		}
	// 		events {
	// 			text
	// 			html
	// 		}
	// 	}`),
	// );

	return { dir: { input: 'src' } }
}
