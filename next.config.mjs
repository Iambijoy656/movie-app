/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    images: {
        domains: ['img.lovepik.com', 'image.tmdb.org'],
        unoptimized: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "ik.imagekit.io",
            },
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
            },]
    },
};

export default nextConfig;
