/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  env: {
    MONGO_URI:
      'mongodb+srv://Robin:fOZTE7eUeGtFqxLM@speech.ir5vs2n.mongodb.net/Speech?retryWrites=true&w=majority',
  },
};

// mongodb+srv://Robin:fOZTE7eUeGtFqxLM@speech.ir5vs2n.mongodb.net/?retryWrites=true&w=majority

module.exports = nextConfig;
