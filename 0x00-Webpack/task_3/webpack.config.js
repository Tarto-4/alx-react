const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        header: './modules/header/header.js',
        body: './modules/body/body.js',
        footer: './modules/footer/footer.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public'),
        assetModuleFilename: 'assets/[name][ext]', // ✅ Ensures images are saved correctly
    },
    mode: 'development',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public'),
        },
        port: 8564,
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource', // ✅ Ensures Webpack processes images correctly
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
    ],
};
