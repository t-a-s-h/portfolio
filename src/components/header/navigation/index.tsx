import { Icon } from "../../page/icon"
import "./style.css"
import { pageList, capitalize } from "../../../utils/utils"
import { Link } from "react-router-dom"
export type NavProps = { page: string }


export function Navigation({ page } : NavProps) {
    return (
        <nav id="navigation">
            <ul>
                {
                    pageList.map(({name, route}) => {
                        return (<li key={name} className= {name === page ? "selected" : ""}><Link to={route}><Icon name={name}/>{ capitalize(name) }</Link></li>)
                    })
                }
            </ul>
        </nav>
    )
}