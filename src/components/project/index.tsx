import { type Item } from "../../utils/types"
import { replaceBadChars } from "../../utils/utils"
import { Blurb } from "../page/blurb"
import { Laptop } from "../page/laptop"
import "./style.css"

export type ProjectProps = { project : Item }

export function Project( { project } : ProjectProps) {

    return (
        <article id={`${replaceBadChars(project.title)}`} className="element project">
            <Blurb element={ project } type={"project"}/>
            <div className="image">
                <div className="circle"></div>
                <Laptop/>
                <img alt={project.title} src={`${project.image}`}/>
            </div>
        </article>
    )
}