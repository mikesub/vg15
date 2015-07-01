var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
      './src/index.js'
    ],
    output: {
        path: 'build',
        filename: 'index.js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]-[local]!cssnext') },
            { test: /\.js$/, loaders: ['babel?stage=0'], exclude: /node_modules/ },
            { test: /\.json$/, loaders: ['json'] }
        ]
    },
    cssnext: {
      browsers: "last 2 versions"
    },
    plugins: [
        new ExtractTextPlugin('styles.css'),
        new webpack.NoErrorsPlugin(),
        new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),
        new HtmlWebpackPlugin({
          title: 'Весенний Гром - 2015',
          hash: true
        })
    ]
};
