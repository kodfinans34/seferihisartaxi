import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Seferihisar Taksi',
    short_name: 'Seferi Taksi',
    description: 'Seferihisar, Sığacık ve çevresinde 7/24 hızlı ve güvenli taksi hizmeti.',
    start_url: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#ffffff',
    theme_color: '#facc15',
    icons: [
      {
        src: '/favicon.ico.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/favicon.ico.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  };
}
