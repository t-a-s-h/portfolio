import { Tool } from "./tool"
import { tool_list, type ToolType } from "./tool_list"
import "./style.css"
import { useRef, useState } from "react"

let t : ToolType | null = tool_list[0] // needs to be outside so it can remain constant b/t renders

export function Tools() {

    const carousel = useRef<HTMLUListElement | null>(null);

    const [ tool, setTool ] = useState<ToolType | null>(t);

    const scroll = (element : HTMLElement | null, back : Boolean = true) => {
        if (! element) return;
        element.scrollBy({left: back ? -150 : 150, behavior: "smooth"});
    }

    return (
        <div id="tools" className="elements">
        {tool && <Tool tool={tool}/>}
        <div className="carousel">
        <span 
            className="left arrow"
            onClick={()=>scroll(carousel.current)}
        >‹</span>
        <ul ref={carousel}>
            {tool_list.map((tool)=>{
                return (
                <li
                    key={tool.name}
                    onClick = {(e)=> {
                        e.currentTarget.scrollIntoView({behavior: "smooth", block: "nearest"})
                        setTool(tool)
                    }
                }
                >{tool.image}</li>
                )
            }
        )}
        </ul>
        <span 
            className="right arrow"
            onClick={()=>scroll(carousel.current,false)}
        >›</span>
        </div>
        </div>
    )
}