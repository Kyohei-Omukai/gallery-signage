/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.microcms-assets.io', // microCMSの画像が保存されるドメイン
      // 他に画像を使用するドメインがあればここに追加
    ],
  },
};

export default nextConfig;
