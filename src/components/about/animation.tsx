import drink from "../../assets/hot-drink.svg?url"
import "./style.css"

export function Animation () {
    return (
        <div className="image">
            <div className="circle"></div>
            <svg className="drink" viewBox="0 70 165 165" ><use href={`${drink}#drink`}/></svg>
        </div>
    )
}