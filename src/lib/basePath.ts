/**
 * Universal basePath helper - works everywhere via environment variable
 * Uses the same NEXT_PUBLIC_BASE_PATH that Next.js uses for automatic prefixing
 */
export function getBasePath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return `${basePath}${path}`;
}
