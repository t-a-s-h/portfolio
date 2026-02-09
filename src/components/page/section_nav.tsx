import { useState, useEffect } from "react"
import "./style.css"

type SNProps = { el_name : string}

let loaded = false

const headings : { height: number, name: string }[] = []

export function SectionNav({ el_name } : SNProps) {
    const [ resized, setResized ] = useState(false)
    const [ heading, setHeading ] = useState<null | string>(null)
    const [heading_names, setHeadings] = useState<{ height: number, name: string }[]>([])

    useEffect(()=> {    
        if (! loaded) {    
            document.querySelectorAll(".sub").forEach((sub,i) => {
                const elSub = sub as HTMLElement
                headings.push({height: (~~((elSub.offsetTop))), name: `${el_name}_h${i + 1}`})
            })
        }
        setResized(false)
        if (! resized &&  loaded) {
            onscroll = () => {
                for (let h of headings) {
                    if (Math.abs(scrollY - h.height) < 100 && h.name) {
                        setHeading(H=> (h.name && h.name !== H) ? h.name : H)
                    }
                }
                document.querySelectorAll(".heading").forEach(el=>el.classList.remove("selected"))
                document.querySelector(`.${heading}`)?.classList.add("selected")
            }
        }
        onresize = () =>{
            setResized(true)
        }
        loaded = true
        setHeadings(Object.values(headings))
    },[resized,heading])

    return (
        <nav className="navigation image">
            <ul>
            {
                heading_names.map(heading => {
                    let { name } = heading
                    let h = document.getElementById(name)
                    let title = h?.innerText
                    return (
                        <li 
                            className={`heading ${name}`}
                            key={name}    
                            onClick={()=>{
                                h?.scrollIntoView({behavior: "smooth"})
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