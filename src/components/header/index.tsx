import { Navigation } from "./navigation/index"
import { ThemePicker } from "./theme_picker"
import "./style.css"
import { Tag } from "./tag"
import type { Dispatch } from "react"

export type HeaderProps = { page: string, setTheme : Dispatch<string> }

export function Header( { page, setTheme } : HeaderProps ) {
    return (
        <header>
            <Tag/>
            <Navigation page={page}/>
            <ThemePicker setTheme={setTheme} />
        </header>
    )
}
