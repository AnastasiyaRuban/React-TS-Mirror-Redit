const path = require("path");
const { DefinePlugin } = require("webpack");
const nodeExternals = require("webpack-node-externals");
const appPath = path.join(process.cwd(), "src");
const sharedPath = path.join(appPath, "shared");
const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === "development";
const IS_PROD = NODE_ENV === "production";

function setupDevtool() {
  if (IS_DEV) return "eval";
  if (IS_PROD) return false;
}

module.exports = {
  target: "node",
  mode: NODE_ENV || "development",
  entry: path.resolve(__dirname, "../src/server/server.js"),
  output: {
    path: path.resolve(__dirname, "../dist/server"),
    filename: "server.js"
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    alias: {
      "@src": appPath,
      "@assets": path.join(sharedPath, "assets"),
      "@components": path.join(sharedPath, "components"),
      "@services": path.join(sharedPath, "services"),
      "@store": path.join(sharedPath, "store"),
      "@utils": path.join(sharedPath, "utils"),
      "@views": path.join(sharedPath, "views")
    }
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: ["ts-loader"]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[name]__[local]--[hash:base64:5]"
              },
              onlyLocals: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  optimization: {
    minimize: false
  },
  devtool: setupDevtool(),

  plugins: [
    new DefinePlugin({ "process.env.CLIENT_ID": `'${process.env.CLIENT_ID}'` })
  ]
};
