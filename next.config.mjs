/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Khi có API ảnh (CDN/Cloudinary...), khai báo thêm domain tại đây:
  // images: { remotePatterns: [{ protocol: 'https', hostname: 'res.cloudinary.com' }] },
};
export default nextConfig;
