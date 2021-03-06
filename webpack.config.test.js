var nodeExternals = require('webpack-node-externals');

module.exports = {
    output: {
        devtoolModuleFilenameTemplate: '[absolute-resource-path]',
        devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
    },
    target: 'node',
    externals: [nodeExternals()],
    devtool: "cheap-module-source-map",
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader'}
        ]
    }
};
