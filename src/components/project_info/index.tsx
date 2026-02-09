import { useEffect, useRef, type RefObject } from "react"
import { project_info } from "../projects/pList"
import { capitalize } from "../../utils/utils"
import "./style.css"
import type { Item } from "../../utils/types"
import { Links } from "../page/links"
import { IntraLinks } from "../page/intra_links"

export type InfoProps = { project : Item }

export function Info( { project } : InfoProps ) {

    const content : RefObject<HTMLDivElement | null> = useRef(null)

    return (
        <div className="elements info">
            <div className="element project_info">
                <div className="blurb">
                <header>
                <h1>Project ● <span className="name">{project.title}</span></h1>
                <h4 className="tag">{project.tagline}</h4>
                <div className="link_section">
                <IntraLinks type="info" project={project.title}/>
                </div>
                </header>
                <div ref={content} className="content">
                    {project_info[project.title].info.map((s,i) => {
                        const {
                            heading_text,
                            text,
                        } = s
                        return (
                            <div key={`section_${i + 1}`}>
                                <h4 className="sub" id={`${project.title}_h${i + 1}`}>{capitalize(heading_text)}</h4>
                                <p>{text}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="link_section">
                <IntraLinks type="info" project={project.title}/>
                <Links type="project" links={project.links}/>
                </div>
                </div>
                <div className="image"></div>
            </div>
        </div>
    )
}