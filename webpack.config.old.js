const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,  // CSS loader
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/, // File loader for images
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/, // File loader for fonts
                use: [
                    'file-loader'
                ]
            }
        ]
    }
}