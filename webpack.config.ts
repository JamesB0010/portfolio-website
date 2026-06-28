import path from "node:path";
import {fileURLToPath} from "url";
import webpack from "webpack";
import {ReactGenImageComponentsPlugin} from "./src/webpackLoaders/ReactGenImageComponentsPlugin.ts";

import "webpack-dev-server";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const config: webpack.Configuration = {
    entry: "./src/index.tsx",
    devtool: "inline-source-map",
    mode: "development",
    devServer: {
        static: {
            directory: path.join(__dirname, "public")
        },
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
              ],
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js", ".json"]
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new ReactGenImageComponentsPlugin("public/images", "src/generated")
    ]
}

export default config;