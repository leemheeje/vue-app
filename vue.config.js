const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	transpileDependencies: true,
	chainWebpack: config => {
		config.plugins.delete('prefetch');
	},
	devServer: {
		proxy: {
			"/realstnx": {
				target: 'https://jsonplaceholder.typicode.com',
				changeOrigin: true,
				pathRewrite: { '^/realstnx': '/'}
			}
		}
	},
	//publicPath: process.env.NODE_ENV === 'production' ? './' : '/'
})

