import type { ReactNode } from "react"

export type Item =  {
    title: string
    tagline: ReactNode,
    blurb: string
    image: string
    links : { target : string, url: string }[],
}

export type Info = {
    [element_name: string] : {
        info : {
            heading_type : "h4" | "h5" | "h6",
            heading_text : string, 
            text : string
        }[]
    }
}

export type List = Item[]