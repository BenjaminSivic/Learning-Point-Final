module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{png,css,html,json,svg}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};