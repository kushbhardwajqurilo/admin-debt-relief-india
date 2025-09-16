// next.config.mjs
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "debtreliefindia-app.s3.eu-north-1.amazonaws.com",
        pathname: "/**",
      },
      // optional: allow any S3 in eu-north-1 if you use other buckets
      {
        protocol: "https",
        hostname: "**.s3.eu-north-1.amazonaws.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
