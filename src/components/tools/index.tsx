import { Tool } from "./tool"
import { tool_list, type ToolType } from "./tool_list"
import { useEffect, useRef, useState } from "react"
import "./style.css"

const tlen = tool_list.length
let tt : number = 0 // needs to be outside so it can remain constant b/t renders

export function Tools() {

    const carousel = useRef<HTMLUListElement | null>(null);

    const [ toolIndex, setToolIndex ] = useState<number>(tt);

    const [ tool, setTool ] = useState<ToolType>(tool_list[toolIndex])

    const [ direction, setDirection ] = useState<number>(0)

    const [ carousel_index, setCarouselIndex ] = useState<number>(toolIndex + tlen); 

    const carouselList = [ ...tool_list, ...tool_list, ...tool_list ]

    function modIndex(index : number, length : number) : number {
        return (length + index) % length
    }

    function endTransition() {
        if (! carousel.current) return
        if (carousel_index < tlen || carousel_index > tlen * 2) {
            setCarouselIndex(toolIndex + tlen)
        }
        tt = toolIndex
    }

    function transition(x : number) {
        if (! carousel.current) return
        setCarouselIndex(i => {
            const t = i + x
            setToolIndex(modIndex(t, tool_list.length))
            return t
        })
    }

    useEffect(()=> {
        if (direction === 0) {
            endTransition()
        }
        else {
            transition(direction)
        }
    },[direction])
    
    return (
        <div id="tools" className="elements">
        <div className="tool_list">
        <div className="show scroll_list">
        {tool && <Tool key={`tool_${tool.name}`} tool={tool}/>}
        </div>
        </div>
        <div className="carousel">
        <span 
            className="left arrow"
            onClick={()=>{
                setDirection(d=>d - 1)
            }}
        >‹</span>
        <div className="scroll_list">
        <ul ref={carousel}
            style={{
                transition: (direction === 0) ? "none" : "transform 0.2s ease",
                transform: `translate(-${(((carousel_index) / carouselList.length)) * 100}%)`
            }}
            onTransitionEnd={()=>{
                setDirection(0)
            }}
        >
            {carouselList.map((t,i) =>{
                return (
                <li
                    key={i}
                    className={`${t.index === tool.index ? "selected" : ""}`}
                    onClick = {()=> {
                        setDirection(modIndex(t.index - toolIndex,tool_list.length))
                        setTool(tool_list[t.index])
                    }}
                >{t.image}</li>
                )
            })
        }
        </ul>
        </div>
        <span 
            className="right arrow"
            onClick={()=>{
                setDirection(d=> d + 1)
            }}
        >›</span>
        </div>
        </div>
    )
}