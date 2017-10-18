const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry : {
        app: './app/index.js'
    },
    module : {
        rules : [{
            test : /\.css$/,
            use : ['style-loader', 'css-loader']
        },{
            test : /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
            use : 'file-loader'
        }]
    },

    plugins : [
        new HtmlWebpackPlugin({
            title: 'angular组件开发',
            template : './app/index.html',
            cache : true
        })
    ],

    devServer : {
        contentBase: './dist',
        compress : true,
        port : 8099
    },

    output : {
        filename : '[name].bundle.js',
        path : path.resolve(__dirname, 'dist'),
        publicPath: '/'
    }
}