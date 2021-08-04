const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
// @ts-check
("use strict");

/**
 * @type {Partial< import('next/dist/next-server/server/config').NextConfig>}
 **/
const nextConfig = {
    eslint: {
        // Warning: Dangerously allow production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
    poweredByHeader: false,
    webpack: (
        config,
        { buildId, dev, isServer, defaultLoaders, webpack, ...rest }
    ) => {
        console.log({
            buildId,
            dev,
            isServer,
            defaultLoaders,
            webpack,
            ...rest,
        });
        const ftcwp = new ForkTsCheckerWebpackPlugin();
        config.plugins = [...config.plugins, ftcwp];

        if (!dev) {
            config.optimization.minimize = true;
        }
        console.log({ config });
        return config;
    },
};
module.exports = nextConfig;