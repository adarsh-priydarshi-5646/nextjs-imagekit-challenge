import "./src/env";

const nextConfig = {
  images: {
    remotePatterns: [{hostname: "ik.imagekit.io"}],
  },
  experimental: {
    serverExternalPackages: ["pino"],
  },
};

export default nextConfig;
