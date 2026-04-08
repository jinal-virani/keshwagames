import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://keshavagames.com/', lastModified: new Date() },
    { url: 'https://keshavagames.com/game', lastModified: new Date() },
    { url: 'https://keshavagames.com/support', lastModified: new Date() },
    { url: 'https://keshavagames.com/privacy', lastModified: new Date() },
    { url: 'https://keshavagames.com/terms-of-service', lastModified: new Date() },
  ];
}