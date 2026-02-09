import { project_list } from "../components/projects/pList"
import { replaceSpaces } from "./utils"

export const pageList : { route: string, name : string, project_number? : number }[] = [
  {route : "/", name : "intro"},
  {route : "/projects", name : "projects"},
  {route : "/tools", name : "tools"},
  {route : "/about", name : "about"},
  ...project_list.map(({title},i) => {
    return {
        project_number: i + 1,
        route : `projects/${replaceSpaces(title)}`,
        name : title
    }
  })
]

