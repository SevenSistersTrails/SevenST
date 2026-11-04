export function resolveSiteUrl(candidates: readonly (string | undefined)[]) {
  for (const candidate of candidates) {
    const value = candidate?.trim();
    if (!value) continue;

    try {
      return new URL(value.includes("://") ? value : `https://${value}`).origin;
    } catch {
      continue;
    }
  }

  return "http://localhost:3000";
}

export function getMatchingLocations(
  locations: readonly string[],
  input: string,
) {
  const query = input.trim().toLowerCase();

  if (query.length >= 3) {
    return locations.filter((name) => name.toLowerCase().includes(query));
  }

  return query.length === 0 ? locations.slice(0, 3) : [];
}
