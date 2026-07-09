export function removeTrailingSlashes(s: string): string {
  while (s.endsWith("/")) {
    s = s.substring(0, s.length - 1);
  }
  return s;
}
