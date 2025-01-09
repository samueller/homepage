const dataFromCMS = (query) =>
    fetch(process.env.CMS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query })
    })
        .then((response) => response.json())
        .then((json) => json.data)

module.exports = function (config) {
    config.addPassthroughCopy('src/images')
    config.addPassthroughCopy('src/styles')
    config.addPassthroughCopy('src/site.webmanifest')
    config.addPassthroughCopy('src/favicon.ico')
    config.addPassthroughCopy('src/*.png')
    config.addPassthroughCopy('src/*.pdf')

    return { dir: { input: 'src' } }
}
