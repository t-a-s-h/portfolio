import { useRef } from "react"
import "./style.css"
import { Icon } from "./icon"

export type Link = { target : string, url: string }

export type PLProps = { links: Link[], type: string }

export function Links( { links, type } : PLProps ) {

    const isImage = useRef(false)

    switch(type) {
        case "intro" : {
            isImage.current = true
            break
        }
        case "project" : {
            isImage.current = false
            break
        }
        default : {
            isImage.current = false
            break
        }
    }

    return (
        <div className="links"> {
        links.map(link => {
            return (     
            <span key={link.target} className="link">   
                <a href={`${link.url}`}>
                    
                        { isImage.current ? <Icon name={link.target}/> : `${link.target}` }
                </a>
            </span>

            )
        })
        }</div>
    )
}