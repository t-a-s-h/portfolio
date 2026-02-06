import { type Dispatch } from "react";
import "./style.css"

const num_themes = 3

type ThemeProps = { setTheme : Dispatch<string> }

export function ThemePicker({ setTheme } : ThemeProps ) {
    let i = 0;

    return (
        <div id="theme-picker" data-tool-tip="theme picker">
            {Array(num_themes).fill(0).map(_ => {
                const t = `theme${++i}`
                return (
                    <div 
                        key={t}
                        className={`theme ${t}`}
                        onClick={()=>{
                            setTheme(t)
                            document.body.classList.add("theme-initialized")
                            document.documentElement.setAttribute("data-theme", t)
                        }}
                    >
                    </div> 
                )
            })}
        </div>
    )
}