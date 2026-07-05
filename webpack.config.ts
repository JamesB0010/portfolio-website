import path from "node:path";
import {fileURLToPath} from "url";
import webpack from "webpack";
import {ReactGenImageComponentsPlugin} from "@JamesB0010/portfolio-website-react-gen-image-components-plugin";

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
    // Avoid rebuilding when generated image components are written
    watchOptions: {
        ignored: /src\/generatedImageComponents/
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: path.resolve(__dirname, 'node_modules/.cache/generatedImageComponents'),
                use: [
                    {
                        loader: 'ts-loader',
                        options: { transpileOnly: true }
                    }
                ]
            },
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
                                type: 'asset/resource',
                                generator: {
                                        filename: 'images/[name][ext]'
                                }
                        },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
        fullySpecified: false,
        extensionAlias: {
            ".js": [".js", ".ts", ".tsx"]
        }
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new ReactGenImageComponentsPlugin("public/image-components", __dirname)
    ]
}

export default config;