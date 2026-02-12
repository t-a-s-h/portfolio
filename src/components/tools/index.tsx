import { Tool } from "./tool"
import { tool_list, type ToolType } from "./tool_list"
import "./style.css"
import { useEffect, useRef, useState } from "react"
import { usePageNav } from "../../utils/hooks"
import { replaceBadChars } from "../../utils/utils"

let tt : ToolType | null = tool_list[0] // needs to be outside so it can remain constant b/t renders

export function Tools() {

    const carousel = useRef<HTMLUListElement | null>(null);

    const [ tool, setTool ] = useState<ToolType | null>(tt);

    function scrollToLi() {
        let t = document.querySelector(`.heading.${replaceBadChars(tool?.name)}`)
        if (!t) return
        t.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" })
    }

    usePageNav("tool","left-right")

    useEffect(()=> {
        if (! tool) return
        let { name } = tool
        let t = document.getElementById(name)
        t?.scrollIntoView({behavior: "instant", block: "nearest", inline: "start" })
        tt = tool
        scrollToLi()
    },[tool])

    return (
        <div id="tools" className="elements">
        <div className="tool_list">
        <div className="scroll_list">
        {tool_list.map((tool)=> <Tool key={`tool_${tool.name}`} tool={tool}/>)}
        </div>
        </div>
        <div className="carousel">
        <span 
            className="left arrow"
            onClick={()=>{
                const len = tool_list.length
                setTool(t => t ? tool_list[(len + tool_list.findIndex(x => x.name === t.name) - 1) % len] : t)
            }}
        >‹</span>
        <ul ref={carousel}>
            {tool_list.map((t)=>{
                let { name } = t
                return (
                <li
                    key={t.name}
                    className={`heading ${replaceBadChars(name)} ${tool?.name === t.name ? "selected" : ""}`}
                    onClick = {()=> {
                        setTool(t)
                    }
                }
                >{t.image}</li>
                )
            }
        )}
        </ul>
        <span 
            className="right arrow"
            onClick={()=>{
                const len = tool_list.length
                setTool(t => t ? tool_list[(len + tool_list.findIndex(x => x.name === t.name) + 1) % tool_list.length] : t)
                console.log(tool)
            }}
        >›</span>
        </div>
        </div>
    )
}