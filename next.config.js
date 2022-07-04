/** @type {import("next").NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["rb.gy", "random.imagecdn.app", "picsum.photos"],
    },
};

module.exports = nextConfig;
