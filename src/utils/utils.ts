export const pageList = [
  {route : "/", name : "intro"},
  {route : "/projects", name : "projects"},
  {route : "/tools", name : "tools"},
  {route : "/about", name : "about"},
]

export function capitalize(s: string) {
    return s[0].toUpperCase() + s.substring(1);
}

export function replaceSpaces(s: string) {
    return s.replace(" ", "_")
}