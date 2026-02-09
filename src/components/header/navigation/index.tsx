import { Icon } from "../../page/icon"
import "./style.css"
import { capitalize } from "../../../utils/utils"
import { pageList } from "../../../utils/pages"
import { Link } from "react-router-dom"
export type NavProps = { page: string }


export function Navigation({ page } : NavProps) {
    return (
        <nav id="navigation">
            <ul>
                {
                    pageList.map(({project_number, name, route}) => {
                        if (project_number) {
                            name = page
                        }
                        else return (<li key={name} className={name === page ? "selected" : ""}><Link to={route}><Icon name={name}/>{ capitalize(name) }</Link></li>)
                    })
                }
            </ul>
        </nav>
    )
}