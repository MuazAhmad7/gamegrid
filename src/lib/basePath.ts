/**
 * Helper function to handle base path for GitHub Pages deployment
 * Adds the correct prefix for images and other assets in production
 */
export function getBasePath(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/gamegrid' : '';
  return `${basePath}${path}`;
}
