/** @type {import('next').NextConfig} */
const config = {
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    reactStrictMode: true,

    expireTime: 60 * 60 * 1000,
};

export default config;
