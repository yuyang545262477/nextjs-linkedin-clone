/** @type {import("next").NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        dangerouslyAllowSVG: true,
        domains: ["rb.gy", "random.imagecdn.app", "picsum.photos"],
    },
};

module.exports = nextConfig;
