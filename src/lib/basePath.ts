/**
 * Helper function to handle base path for GitHub Pages deployment
 * Adds the correct prefix for images and other assets only for GitHub Pages
 */
export function getBasePath(path: string): string {
  const isGitHubPages = process.env.NEXT_PUBLIC_GITHUB_PAGES === 'true';
  const basePath = isGitHubPages ? '/gamegrid-website' : '';
  return `${basePath}${path}`;
}
