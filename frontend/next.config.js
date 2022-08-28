/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  useSystemColorMode: false,
  initialColorMode: "light",
  env: {
    SERVER: process.env.SERVER,
  }
}

// module.exports = {
//   async rewrites() {
//       return [
//         {
//           source: '/api/:path*',
//           destination: 'https://api.example.com/:path*',
//         },
//       ]
//     },
// };
