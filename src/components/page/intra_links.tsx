import { Link } from "react-router-dom"
import { capitalize, replaceSpaces } from "../../utils/utils"

type ILProps = { type: string, project : string | null }

export function IntraLinks( { type, project } : ILProps) {

    let backwards = null
    let forwards = null

    if (project) project = replaceSpaces(project)

    switch(type) {
        case "intro" : {
            backwards  = { url  : "/", name : "home" }
            forwards = { url  : "/projects", name : "projects" }
            break
        }
        case "project" : {
            backwards = { url  : "/", name : "intro" }
            forwards = { url  : `/projects/${project}`, name : "more" } 
            break
        }
        case "info" : {
            backwards = { url  : `/projects#${project}`, name : "all projects" } 
            break
        }
        default : {
            backwards = { url  : "/", name : "home" }
            null
        }
    }

    return (
        <div className="intra_links">
            {backwards && <div className="view_more"><Link to={`${backwards.url}`}>&larr; {capitalize(backwards.name)}</Link></div>}
            {forwards && <div className="view_more"><Link to={`${forwards.url}`}>{capitalize(forwards.name)} &rarr;</Link></div>}
        </div>
    )
}