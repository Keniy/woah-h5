const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    lintOnSave: false,
    devServer: {
        port: 1010,
        proxy: null
    },
    pages: {
        index: {
            entry: 'src/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
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

            }
        }
    },
    // 扩展 webpack 配置，使 packages 加入编译
    chainWebpack: config => {
        config.module
            .rule('js')
            .include
            .add('/src/')
            .end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                // 修改它的选项...
                return options
            })
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
            .set('page', resolve('src/page'))
            .set('api', resolve('src/api'))
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
    }
}