import { useEffect, useState } from "react"
import { IntraLinks } from "../page/intra_links"
import "./style.css"

const heading_names = [ 
    "about_h1",
    "about_h2",
    "about_h3"
]

type SNProps = { heading_names : string[] }

function SectionNav({ heading_names } : SNProps ) {
    return (
        <nav className="navigation image">
            <ul>
            {
                heading_names.map(heading => {
                    let h = document.getElementById(heading)
                    if (! h) return
                    return (
                        <li 
                            className={`heading ${heading}`}
                            key={heading}    
                            onClick={()=>{
                                h.scrollIntoView({behavior: "smooth"})
                            }}
                        >{h.innerHTML}
                        </li>
                    )
                })
            }
            </ul>
        </nav>
    )
}

let loaded = false

const headings : Record<number,string> = {}

export function About() {

    const [ resized, setResized ] = useState(false)
    const [ heading, setHeading ] = useState<null | string>(null)

    useEffect(()=> {        
        document.querySelectorAll(".sub").forEach((sub,i) => {
            const elSub = sub as HTMLElement
            headings[(~~((elSub.offsetTop) / 100)) * 100] = `about_h${i + 1}`
        })
        setResized(false)
        if (! resized &&  loaded) {
            onscroll = () => {
                let h = (headings[(~~((scrollY) / 100)) * 100])
                setHeading(H=> (h && h !== H) ? h : H)
                document.querySelectorAll(".heading").forEach(el=>el.classList.remove("selected"))
                document.querySelector(`.${heading}`)?.classList.add("selected")

            }
        }
        onresize = () =>{
            setResized(true)
        }
        loaded = true
    },[resized,heading])

    return (
        <div id="about" className="elements">
            <div className="bio element">
                <div className="first">
                <header>
                    <h1>About ● <span className="name">Bio</span></h1>
                    <h4 className="tag">A short section about me</h4>
                    <div className="link_section a">
                        <IntraLinks type="about" project={null}/>
                    </div>
                </header>
                <SectionNav heading_names={heading_names}/>
                </div>
                <div className="blurb">
                    <section>
                    <p>Hello again,</p>

                    <p>I enjoy building attractive applications and sites that are pleasant to use. I built this site with React and TypeScript to show some of my work.</p>

                    <h4 className="sub" id="about_h1">Building + Design</h4>

                    <p>I learned HTML and CSS early on, and I still prefer using CSS as the primary method for layout, styling, and lightweight animations.</p>

                    <p>I also completed a six-month intensive development program, where I strengthened my foundation in modern web development and where I added some more tools, such as React and MySQL. Recently I have been enjoying TypeScript as well.</p>

                    <h4 className="sub" id="about_h2">Background</h4>

                    <p>I am a bachelor of mathematics graduate with a computing background. I completed a Math Studies major, which allowed me to focus on pure math, computer science, and psychology — an area I still think about and draw from often. Through my studies, I've learned to abstract while keeping only necessary components.</p>

                    <h4 className="sub" id="about_h3">More</h4>

                    <p>I’m quite imaginative and tend to generate a lot of project ideas, some more fanciful than others. I’m gradually working through the more realistic ones, and I plan to keep adding to this site as they develop.</p>

                    <p>If anything catches your interest, feel free to explore the projects — or check back as the site continues to evolve.</p>
                    <footer>
                        <address>— Natasha</address>
                    </footer>
                    </section>
                    <div className="link_section b">
                    <IntraLinks type="about" project={null}/>
                    </div>
                </div>
                {/* <div className="image"></div> */}
            </div>
        </div>
    )
}