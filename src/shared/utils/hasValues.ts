export function hasValues(
  obj: Record<string, unknown>|null,
): boolean {
  if(!obj) return false
  return Object.values(obj).some((value) => {
    if (typeof value === "string") {
      return value.trim() !== "";
    }

    return value !== null && value !== undefined;
  });
}