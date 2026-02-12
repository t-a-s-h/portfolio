export function capitalize(s: string) {
    return s[0].toUpperCase() + s.substring(1);
}

export function replaceBadChars(s?: string) {
    if (! s) return ""
    const re = new RegExp(/[^a-zA-Z0-9]/g)
    return s.replaceAll(re, "-")
}