var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './js/main.js',
    output: {
        path: 'build',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css') },
            { test: /\.js$/, loader: 'babel?optional[]=runtime', exclude: /node_modules/ },
            { test: /\.json$/, loaders: ['json'] }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({title:'vg15'}),
        new ExtractTextPlugin('css.css')
    ]
};
