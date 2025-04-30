
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
 
initOpenNextCloudflareForDev();

const nextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;