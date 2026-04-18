/** Documented code blocks embed slate via JSON.stringify(slate, …, 2) — must match the live demo data. */
export function documentedCodeIncludesSlate(code: string, slate: unknown): boolean {
  return code.includes(JSON.stringify(slate, null, 2))
}
