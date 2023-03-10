/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
}

const withFonts = require('next-fonts');
module.exports = withFonts();

module.exports = nextConfig


