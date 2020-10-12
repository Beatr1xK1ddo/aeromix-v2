const path = require('path')
const htmlWebpack = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const { ALL } = require('dns')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
    // имя произвольное
        main: './index.js',
        analytics: './js/analytics.js' 
     },
    output: {
        filename: '[name].[contenthash].js', // паттерн
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.json', '.svg', '.png', '.jpg', '.JPG'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@js': path.resolve(__dirname, 'src/js'),
            '@css': path.resolve(__dirname, 'src/css'),
            '@img': path.resolve(__dirname, 'src/img')
        }
    },
    optimization: {
        splitChunks : {
            chunks: 'all'
        }
    },
    devServer: {
        port: 4200
    }, 
    plugins: [
        new htmlWebpack({
            // title: 'Webpack', не работает с template !
            template: './index.html'
        }),
        // new htmlWebpack({
        //     template: './templates/strong.html'
        // }),
        // new htmlWebpack({
        //     template: './templates/stretching.html'
        // }),
        // new htmlWebpack({
        //     template: './templates/pilates.html'
        // }),
        // new htmlWebpack({
        //     template: './templates/yoga.html'
        // }),
        // new htmlWebpack({
        //     template: './templates/dancehol.html'
        // }),
        // new htmlWebpack({
        //     template: './templates/aerobika.html'
        // }),
        // new htmlWebpack({
        //     template: './templates/ofp.html'
        // }),
        // new htmlWebpack({
        //     template: './templates/razvivalka.html'
        // }),
        // new htmlWebpack({
        //     template: './templates/funk.html'
        // }),
        // new htmlWebpack({
        //     template: './templates/bachata.html'
        // }),
        // new htmlWebpack({
        //     template: './templates/zumba.html'
        // }),
        // new htmlWebpack({
        //     template: './templates/taibo.html'
        // }),
        // new htmlWebpack({
        //     template: './templates/pilates.html'
        // }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
            test: /\.css$/,
            // с права на лево
            use: ['style-loader', 'css-loader']
            },
            {
            test: /\.(png|jpg|svg|gif)$/, //рег екс для всех файлов оканчивающихся ($) на png, jpg,gif,svg
            use: ['file-loader']   
            },
            {
            test: /\.(ttf|woff|woff2|eot)$/, 
            use: ['file-loader']
            }
        ]
    }
}  