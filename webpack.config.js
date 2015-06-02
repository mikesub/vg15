module.exports = {
    entry: "./js/main.js",
    output: {
        publicPath: 'http://localhost:8080/assets'
    },
    module: {
        loaders: [
            { test: /\.css$/, loaders: ["style", "css"] },
            { test: /\.react.js$/, loader: 'jsx'},
            { test: /\.json$/, loader: 'json'}
        ]
    }
};
