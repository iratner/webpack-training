const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        app: './src/entry/index.js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        // Creates an index.html file (not necessary)
        new HtmlWebpackPlugin({
          title: 'Output Management'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: { // Handles duplicate dependencies in multiple bundles by generating an additional bundle for the duplicates
        splitChunks: {
            chunks: 'all'
        }
    },
    module: { // loaders are executed from right to left, so last in the list is executed first
        rules: [
            {
                test: /\.js$/,
                use: 'source-map-loader',
                enforce: 'pre'
            },
            {
                test: /\.hbs?/,
                use: 'handlebars-loader'

            },
            {
                test: /\.scss?/,
                include: path.resolve(__dirname, 'src'),
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'resolve-url-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            sourceMapContents: false
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/, // File loader for IMAGES
                use: 'file-loader'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/, // File loader for FONTS
                use: 'file-loader'
            }
        ]
    }
};