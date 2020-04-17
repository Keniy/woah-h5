const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir)
}
const Timestamp = new Date().getTime()
const Version = "v1.0"

module.exports = {
    // assetsDir: 'public',
    publicPath: '/',
    outputDir: 'dist',
    indexPath: 'index.html',
    lintOnSave: false,
    devServer: {
        port: 1010,
        proxy: {
            '/oss-upload': {
                target: 'http://lzcloud-test-oss.oss-cn-shenzhen.aliyuncs.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/oss-upload': ''
                }
            }
        }
    },
    pages: {
        index: {
            entry: 'src/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    transpileDependencies: [
        'vue-echarts',
        'resize-detector'
    ],
    productionSourceMap: false,
    css: {
        extract: true,
        modules: false,
        sourceMap: false,
        loaderOptions: {
            css: {

            },
            postcss: {

            },
            sass: {
                prependData: `@import "@/style/base/base.scss";`
            }
        }
    },
    // 扩展 webpack 配置，使 packages 加入编译
    chainWebpack: config => {
        // config.module
        //     .rule('js')
        //     .include
        //     .add('/src/')
        //     .end()
        //     .use('babel')
        //     .loader('babel-loader')
        //     .tap(options => {
        //         // 修改它的选项...
        //         return options
        //     })
        config.module
            .rule('vue')
            .use('vue-loader')
            .loader('vue-loader')
            .tap(options => {
                // 修改它的选项...
                return options
            })
        config.resolve.alias 
            .set('@', resolve('src'))
            .set('src', resolve('src'))
            .set('components', resolve('src/components'))
            .set('page', resolve('src/views/page'))
            .set('views', resolve('src/views'))
            .set('api', resolve('src/api'))
            .set('common', resolve('src/common'))
            .set('store', resolve('src/store'))
            /* 添加分析工具*/
        if (process.env.NODE_ENV === 'production') {
            if (process.env.npm_config_report) {
                config
                    .plugin('webpack-bundle-analyzer')
                    .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
                    .end()
                config.plugins.delete('prefetch')
            }
        }
    },
    configureWebpack: {
        performance: {
            hints: 'warning',
            maxEntrypointSize: 50000000,
            maxAssetSize: 30000000,
            assetFilter: function(assetFilename) {
	    		return assetFilename.endsWith('.js')
	    	}
        },
        output: {
            filename: `[name].${Version}.${Timestamp}.js`,
            chunkFilename: `[name].${Version}.${Timestamp}.js`,
        }
    }
}