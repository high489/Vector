let path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, "public"),
        hot: true,
        overlay: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});