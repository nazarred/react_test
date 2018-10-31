const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var path = require('path');

module.exports = {
    entry: "./src/index.js", // входная точка - исходный файл
    output:{
        path: path.resolve(__dirname, './public'),     // путь к каталогу выходных файлов - папка public
        publicPath: '/public/',
        filename: "bundle.js"       // название создаваемого файла
    },
    module:{
        rules:[   //загрузчик для jsx
            {
                test: /\.(js|jsx)$/, // определяем тип файлов
                exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
                use: {
                    loader: "babel-loader",   // определяем загрузчик
                    options: {
                        presets: ["@babel/env", "@babel/react"],    // используемые плагины
                        plugins: [
                            "@babel/plugin-proposal-class-properties",
                            "@babel/plugin-syntax-class-properties"
                        ]
                    }
                }
            },
            {
               test: /\.css$/,
               use: [
                  MiniCssExtractPlugin.loader,
                  {
                    loader: 'css-loader',
                    options: {
                      minimize: false,
                    },
                  },
                ],
            },
            {
                test: /\.html$/,
                use: [
                  {
                    loader: 'html-loader',
                    options: { minimize: true },
                  },
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './public/index.html',
          filename: 'index.html',
        }),
        new MiniCssExtractPlugin({
          filename: '[name].css',
          chunkFilename: '[id].css',
        }),
      ],
};