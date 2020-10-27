const path = require('path')

let cssConfig = {};
if (process.env.NODE_ENV == 'production') {
	cssConfig = {
		extract: {
			filename: '[name].css',
			chunkFilename: '[name].css'
		}
	};
}

function resolve(dir) {
	return path.join(__dirname, dir)
}


module.exports = {
	chainWebpack: config => {
		let limit = 9999999999999999;
		config.module
			.rule('images')
			.test(/\.(png|gif|jpg)(\?.*)?$/i)
			.use('url-loader')
			.loader('url-loader')
			.tap(options => Object.assign(options, { limit: limit }));
		config.module
			.rule('fonts')
			.test(/\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/i)
			.use('url-loader')
			.loader('url-loader')
			.options({
				limit: limit
			});
	},
	css: cssConfig,
	configureWebpack: {
		resolve: {
			alias: {
				'@': resolve('src')
			}
		},
		output: {
			filename: '[name].js'
		},
		optimization: {
			splitChunks: false
		}
	},
	devServer: {
		disableHostCheck: true
	}
};
