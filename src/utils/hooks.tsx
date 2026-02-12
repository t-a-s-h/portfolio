import { useState, useEffect } from "react"

export function usePageNav(sectionClassName : string, direction : "top-bottom" | "left-right") {
    const [ resized, setResized ] = useState(false)
    const [ heading, setHeading ] = useState<null | string>(null)
    const [ heading_names, setHeadings ] = useState<{ size: number, name: string, title: string }[]>([])
    let loaded = false

    useEffect(()=> {    
        if (resized || loaded) return
        else {    
            document.querySelectorAll(`.${sectionClassName}`).forEach((sub,i) => {
                const elSub = sub as HTMLElement
                let title = elSub.innerText
                setHeadings(heading_names => [...heading_names,{size: (direction === "top-bottom" ? ~~((elSub.offsetTop)): ~~((elSub.offsetLeft))), name: `el${i + 1}`, title : title}])
            })
            loaded = true
        }
        setResized(false)
        if (! resized &&  loaded) {
            onscroll = () => {
                for (let h of heading_names) {
                    if (Math.abs(scrollY - h.size) < 100 && h.name) {
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
    },[resized,heading])
    return heading_names
}

export function useChangeDisplay(changers: any[], display : Element | null) {
  useEffect(()=>{
    if (! display) return
    display.classList.add("transition")
    display.classList.remove("in")
    setTimeout(()=>display.classList.add("transition","in"), 50)

    // remove classes so they do not interfere with other transitions
    setTimeout(()=>display.classList.remove("transition","in"), 500)
    },changers)
}