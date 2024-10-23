/** @type {import('next').NextConfig} */
const config = {
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    reactStrictMode: true,
};

export default config;
