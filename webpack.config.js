const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const onceImporter = require('node-sass-once-importer');

// const LessPluginLists = require('less-plugin-lists');

module.exports = {
    mode: "development",
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
    // devtool: 'eval-source-map',
    module: { // loaders are executed from right to left, so last in the list is executed first
        rules: [
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                use: ['babel-loader']
            },
            {
                test: /\.js$/,
                use: 'source-map-loader',
                exclude: '/node_modules/',
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
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    'resolve-url-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            sourceMapContents: false,
                            includePaths: [
                                'src/main-app/sass/',
                                'src/components/sass/'
                            ]
                        }
                    }
                ]
            },
            // {
            //     test: /\.less?/,
            //     include: path.resolve(__dirname, 'src'),
            //     use: [
            //         MiniCssExtractPlugin.loader,
            //         {
            //             loader: 'css-loader',
            //             options: {
            //                 sourceMap: true
            //             }
            //         },
            //         'resolve-url-loader',
            //         {
            //             loader: 'less-loader',
            //             options: {
            //                 sourceMap: true,
            //                 // sourceMapContents: false,
            //                 // includePaths: [
            //                 //     'src/main-app/sass/',
            //                 //     'src/components/sass/'
            //                 // ]
            //                 plugins: [
            //                     new LessPluginLists()
            //                 ]
            //             }
            //         }
            //     ]
            // },
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