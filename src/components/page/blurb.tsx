import { Links, type Link } from "./links"
import { IntraLinks } from "./intra_links"
import "./style.css"
import { type ReactNode } from "react"

type Children = { children: ReactNode }

interface BlurbProps {  element : { title : string, blurb : string, tagline? : ReactNode, links:  Link[], children? : Children },  type : string }

export function Blurb( { element: { title, blurb, tagline, links }, type } : BlurbProps ) {

    return (
        <div className="blurb">
            {
                type === "project" &&
                <header>
                    <h1>Project ● <span className="name">{title}</span></h1>
                    <h4 className={`${type}_tag tag`}>{tagline}</h4>
                </header>
            }
            {
                type === "intro" &&
                <header>
                    <h1><span className="name">{title}</span></h1>
                    <h4 className={`${type}_tag tag`}>{tagline}</h4>
                </header>
            }
            <div className="info">
                <div>
                    <p>{blurb}</p>
                </div>
            </div>
            <div className="link_section">
            <IntraLinks type={type} project={type === "project" ? title : null}/>
            <Links links={ links } type={type} />
            </div>
        </div>
    )
}