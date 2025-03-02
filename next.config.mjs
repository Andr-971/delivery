
/** @type {import('next').NextConfig} */

const mode = process.env.NODE_ENV || "development";
const devMode = mode === "development";
const target = devMode ? "web" : "browserslist";
const devtool = devMode ? "source-map" : undefined;

const nextConfig = {
    output: "export",
    basePath: "/delivery",
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.module.rules.push({
            test: /\.(?:js|mjs|cjs)$/i,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: [["@babel/preset-env", { targets: "defaults" }]],
                },
            },
            test: /\.scss$/,
            use: [
                {
                    loader: "sass-loader",
                    options: {
                        sourceMap: true,
                        prependData: `@import "./src/scss/style";`, 
                    },
                },
            ],
        });
        return config;
    },
};

export default nextConfig;
