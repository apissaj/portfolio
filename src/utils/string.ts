export function decodeEmail(email: string) {
  return atob(email)
}

export function decodePhoneNumber(phone: string) {
  return atob(phone)
}

export function formatPhoneNumber(phone: string) {
  // The number is stored already formatted (e.g. "+62 823 2723 9421") in user.ts,
  // so return it verbatim instead of re-formatting via the Vietnam-only metadata.
  return phone
}

const XML_ESCAPES: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;",
}

export function escapeXml(value: string): string {
  return value.replace(/[&<>"']/g, (c) => XML_ESCAPES[c])
}

// Returns an RFC-safe ISO string, or null if the input isn't a valid date.
export function toISODateSafe(value: string | undefined | null): string | null {
  if (!value) return null
  const d = new Date(value)
  return Number.isNaN(d.getTime()) ? null : d.toISOString()
}
