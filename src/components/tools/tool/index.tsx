import { IntraLinks } from "../../page/intra_links";
import { type ToolType } from "../tool_list"
import { useRef } from "react";
import "./style.css"
import { useChangeDisplay } from "../../../utils/hooks";

type ToolProps = { tool : ToolType }

export function Tool( { tool } : ToolProps) {

    const { name, tag, image, blurb, color } = tool; 

    const t = useRef<HTMLDivElement>(null)

    useChangeDisplay([tool.name],t.current)

    return (
            <div ref={t} id={`${tool.name}`} className={`tool element ${color}`}>
                <div className="blurb">
                    <header>
                        <h1>Tools ● <br/><span className="name">{name}</span></h1>
                        <h4 className="tag">{tag}</h4>
                    </header>
                    <div className="desc">
                        {blurb}
                    </div>
                <div className="link_section">
                <IntraLinks type="tool" project={null}/>
                </div>
                </div>
                <div className="image"><div className="circle"></div>{image}</div>
            </div>
    )
}