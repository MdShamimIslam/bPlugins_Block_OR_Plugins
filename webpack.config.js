
const autoprefixer = require("autoprefixer");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {

    function isDevelopment(){
        return argv.mode === 'development'
    }

    var config = {
        entry:"./src/index.js",
        output:{
            filename: "bundle.js"
        },
        plugins: [
            new CleanWebpackPlugin({
                cleanOnceBeforeBuildPatterns: ['**/*', '!bundle.js', '!bundle.css'],
            }),
            new MiniCSSExtractPlugin({ filename: "bundle.css" })
        ],
        devtool: isDevelopment() ? 'eval-cheap-module-source-map' : 'source-map',
        optimization: {
            minimize: !isDevelopment(),
            minimizer: [
                `...`,
                new TerserPlugin(),
                new CssMinimizerPlugin(),
            ],
        },
        module:{
            rules:[
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use:{
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                [
                                    '@babel/preset-react',
                                    {
                                        "pragma": "React.createElement",
                                        "pragmaFrag": "React.Fragment",
                                        "dvelopment": isDevelopment()
                                    }
                                ]
                            ]
                            
                          }
                    }
                },
                {
                    test:/\.(sa|sc|c)ss$/,
                    use:[
                        MiniCSSExtractPlugin.loader,
                        'css-loader',
                        {
                           loader:'postcss-loader',
                           options:{
                            postcssOptions: {
                                plugins: [ autoprefixer() ]
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

