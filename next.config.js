/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  env: {
    MONGO_URI:
      'mongodb+srv://Robin:fOZTE7eUeGtFqxLM@speech.ir5vs2n.mongodb.net/Speech?retryWrites=true&w=majority',
    COURIER_TOKEN: 'pk_prod_QRBM2NWJM74B2RMY4R615TAE2YQE',
  },
};

// mongodb+srv://Robin:fOZTE7eUeGtFqxLM@speech.ir5vs2n.mongodb.net/?retryWrites=true&w=majority

module.exports = nextConfig;
