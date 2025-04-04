import path from 'path';
    /** @type {import('next').NextConfig} */
    const nextConfig = {
        images: {
          remotePatterns: [
            {
              protocol: 'https',
              hostname: 'images.unsplash.com',
              port: '',
              pathname: '/**', // Allows any path on this hostname
            },
            // You can add more objects here for other allowed domains
            // e.g., { protocol: 'https', hostname: 'assets.example.com' }
          ],
        },
      };
  
      export default nextConfig;
