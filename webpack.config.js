
const autoprefixer = require("autoprefixer");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {
    function isDevelopment() {
        return argv.mode === 'development'
    }

    var config = {
        entry: "./src/editor.js",
        output: {
            filename: "editor.js",
        },
        optimization: {
            minimizer: [
                new TerserPlugin({
                    extractComments: false,
                }),
                new CssMinimizerPlugin()
            ],
        },
        plugins: [
            new CleanWebpackPlugin(),
            new MiniCSSExtractPlugin(
                { filename: "editor.css" }
            )
        ],
        devtool: isDevelopment() ? 'cheap-module-source-map' : 'source-map',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                [
                                    '@babel/preset-react',
                                    {
                                        "pragma": "React.createElement",
                                        "pragmaFrag": "React.Fragment",
                                        "development": isDevelopment()
                                    }
                                ]
                            ]

                        }
                    }
                },
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        MiniCSSExtractPlugin.loader,
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions: {
                                    plugins: [autoprefixer()]
                                }
                            }
                        },
                        'sass-loader'
                    ]
                }
            ]
        }
    };

    return config;
}

