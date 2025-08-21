/**
 * Helper function to handle base path for deployment
 * With custom domain (gamegridtech.com), no prefix is needed
 */
export function getBasePath(path: string): string {
  // No basePath needed for custom domain deployment
  return path;
}
