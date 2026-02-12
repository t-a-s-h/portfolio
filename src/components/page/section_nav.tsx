import "./style.css"
import { usePageNav } from "../../utils/hooks"

export function SectionNav() {

    const heading_names = usePageNav("sub","top-bottom")

    return (
        <nav className="navigation image">
            <ul>
            {
                heading_names.map(heading => {
                    let { name,title } = heading
                    let h = document.getElementById(name)
                    return (
                        <li 
                            className={`heading ${name}`}
                            key={name}    
                            onClick={()=>{
                                h?.scrollIntoView({ behavior: "smooth" })
                            }}
                        >
                            {title}
                        </li>
                    )
                })
            }
            </ul>
        </nav>
    )
}