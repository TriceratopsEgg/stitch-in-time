module.exports = {
	'env': {
		'browser': true,
		'es2020': true,
		node: true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:jest/recommended'
	],
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 11,
		'sourceType': 'module'
	},
	'plugins': [
		'eslint-plugin-import',
		'react',
		'jest'
	],
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'windows'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'react/prop-types':  "off"
	}
};
