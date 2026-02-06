import { useEffect, useRef, type RefObject } from "react"

const animate = (path : SVGPathElement | null, drawn : number = 0) => {
    if (! path || drawn >= 600) return
    path.style.strokeDasharray = `${drawn}% 600%`
}
  

export function Animation() {

    const helloPath : RefObject< SVGPathElement | null > = useRef(null)

    let drawn = 0
    
    useEffect(()=> {
        let interval = setInterval(() => {
            requestAnimationFrame(()=>animate(helloPath.current,drawn += 5))
            if (drawn >= 600) clearInterval(interval)
        },30)
    },[])

    return (
        <svg version="1.1" className="hello" viewBox="0 0 155 60" xmlns="http://www.w3.org/2000/svg">
            <style>
            </style>
            <g transform="translate(1081 347.77)">
            <path ref={helloPath} id="hello" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m-1078.3-297.09s16.687-19.424 20.869-28.59 5.6474-19.477-2.912-19.443c-20.708 0.0832-21.259 37.585-8.4934 48.033 0 0 5.0708-30.253 18.928-25.461 13.857 4.7917-8.6514 25.461 0.5895 25.461 13.076 0 35.147-22.168 27.803-28.59-9.5911-8.3858-27.247 28.59-6.2122 28.59 19.782 0 51.647-47.861 31.692-48.033-19.954-0.17127-25.262 48.033-7.6474 48.033 20.224 0 45.703-48.099 27.061-48.033-18.642 0.0661-21.999 48.033-4.819 48.033 12.815 0 10.908-21.628 20.835-25.014-4.7792 3.0993-11.3 25.162 3.183 25.014 23.726-0.24301 14.329-40.04 0.53071-24.588-3.1417 3.518-4.3041 17.729 24.678 3.5972"/>
            </g>
        </svg>
    )
}