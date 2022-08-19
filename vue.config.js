const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	transpileDependencies: true,
	chainWebpack: config => {
		config.plugins.delete('prefetch');
	},
	devServer: {
		proxy: {
			"/subway": {
				target: 'http://apis.data.go.kr',
				changeOrigin: true,
				pathRewrite: { '^/subway': '/'}
			}
		}
	},
	//publicPath: process.env.NODE_ENV === 'production' ? './' : '/'
})

