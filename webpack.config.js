const path = require('path')
const vuePlugin = require('vue-loader/lib/plugin')
const htmlPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js',
    },
    plugins: [
        new htmlPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        }),
        new vuePlugin(),
    ],
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.jpg|png|gif|bmp|jpeg$/, use: 'url-loader?name=[hash:8]-[name].[ext]' },
            { test: /\.ttf|eot|svg|woff|woff2$/, use: 'url-loader' },
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.vue$/, use: 'vue-loader' }
        ]
    },
    resolve: {
        alias: [

        ]
    }
}