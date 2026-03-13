import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Avoid Next.js inferring the repo root incorrectly when multiple lockfiles exist.
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
