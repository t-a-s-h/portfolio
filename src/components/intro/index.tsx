import { Blurb } from "../page/blurb"
import { Laptop } from "../page/laptop"
import { contents as element } from "./content"
import { Animation } from "./animation"
import "../page/style.css"
import "./style.css"

export function Intro() {
    return (
        <div id="intro" className="elements">
        <article className="element intro">
            <Blurb element={ element } type={"intro"}/>
            <div className="image">
                <div className="circle"></div>
                <Laptop/>
                <div className="screen"></div>
                <Animation/>
            </div>
        </article>
        </div>
    )
}