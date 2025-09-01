export function filterProps<T>(obj: any, allowedKeys: (keyof T)[]): T {
  const result: Partial<T> = {};
  for (const key of allowedKeys) {
    if (obj && typeof obj === 'object' && key in obj) {
      result[key] = obj[key];
    }
  }
  return result as T;
}