import laptop from "../../assets/laptop.svg"
import "./style.css"

export function Laptop () {
    return (
        <>
        <svg className="laptop" viewBox="0 0 720 500"> <use href={`${laptop}#laptop`}/></svg>
        </>
    )
}