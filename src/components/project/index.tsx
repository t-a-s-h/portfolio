import { type Item } from "../../utils/types"
import { Blurb } from "../page/blurb"
import { Laptop } from "../page/laptop"
import "./style.css"

type projectProps = { project : Item }

export function Project( { project } : projectProps) {

    return (
        <article id={`${project.title}`} className="element project">
            <Blurb element={ project } type={"project"}/>
            <div className="image">
                <div className="circle"></div>
                <Laptop/>
                <img alt={project.title} src={`/src/assets/${project.image}`}/>
            </div>
        </article>
    )
}