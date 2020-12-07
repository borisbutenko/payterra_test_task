let path = require("path")

let HtmlWebpackPlugin = require("html-webpack-plugin")
let MiniCssExtractPlugin = require("mini-css-extract-plugin")

let { VueLoaderPlugin } = require("vue-loader")

const [SRC, DIST] = [path.resolve(__dirname, "src"), path.resolve(__dirname, "dist", "webpack")]

module.exports = {
    entry: path.resolve(SRC, "main.js"),

    output: {
        path: DIST,
    },

    devServer: {
        contentBase: DIST,
        port: 8000,
    },

    optimization: {
        splitChunks: {
            chunks: "all",
        },
    },

    module: {
        rules: [
            {
                test: /.vue$/,
                loader: "vue-loader",
            },
            {
                test: /.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.(js|vue)$/,
                loader: "eslint-loader",
                enforce: "pre",
                exclude: /node_modules/,
            },
            {
                test: /\.pug$/,
                loader: "pug-plain-loader",
            },
            {
                test: /\.styl(us)?$/,
                use: [
                    "vue-style-loader",
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "stylus-loader",
                ],
            },
            {
                test: /\.css$/,
                use: [
                    "vue-style-loader",
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                ],
            },
        ],
    },

    resolve: {
        alias: {
            "@": SRC,
        },
        extensions: [
            ".js",
            ".vue",
            ".pug",
            ".styl",
            ".json",
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(SRC, "index.template.html"),
            title: "Payterra test task",
        }),
        new MiniCssExtractPlugin(),
        new VueLoaderPlugin(),
    ],
}
