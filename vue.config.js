const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	transpileDependencies: true,
	chainWebpack: config => {
		config.plugins.delete('prefetch');
	},
	devServer: {
		proxy: {
			"/subwayInfo": {
				target: process.env.VUE_APP_SUBWAY_API_PATH,
				changeOrigin: true,
				pathRewrite: { '^/subwayInfo': '/'}
			},
			"/realstnx": {
				target: 'https://jsonplaceholder.typicode.com',
				changeOrigin: true,
				pathRewrite: { '^/realstnx': '/'}
			}
		}
	},
	publicPath: process.env.NODE_ENV === 'production' ? './' : '/'
})

