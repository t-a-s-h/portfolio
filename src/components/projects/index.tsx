import { Project } from "../project"
import { project_list } from "./pList"
import "./style.css"

export function Projects() {

    return (
        <div id="projects" className="elements">
            {project_list.map(project => {
                return <Project key={project.title} project={project}/>
            })}
        </div>
    )
}