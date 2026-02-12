import tools from "../../assets/tools.svg"
import type { ReactElement } from "react"

export type ToolType = {
    name: string,
    tag: string,
    color: "color1" | "color2" | "color3",
    image: ReactElement,
    blurb: ReactElement
}

type ToolList = ToolType[]

export const tool_list : ToolList = [
    {
        name: "React",
        tag: "Front-end JavaScript library.",
        color: "color1",
        image: <svg className="react" viewBox="0 0 512 512"> <use href={`${tools}#react`}/></svg>,
        blurb: <>I enjoy using React to maintain structure and manage state with its syntax for creating intuitive and reusable components.</>
    },
    {
        name: "TypeScript",
        tag: "Adds static typing with optional type annotations to JavaScript",
        color: "color2",
        image: <svg className="typescript" viewBox="-44 -44 600 600"> <use href={`${tools}#typescript`}/></svg> ,
        blurb: <>I built my first TypeScript project last year and plan to keep using it for the structure it gives to my code.</>
    },
    {
        name: "JavaScript",
        color: "color3",
        tag: "Lightweight just-in-time compiled programming language with first-class functions.",
        image: <svg className="javascript" viewBox="-30 0 512 512"> <use href={`${tools}#javascript`}/></svg> ,
        blurb: <>I started delving into JavaScript at the beginning of the pandemic. Since then I've used it in many projects and like that it easily adds interactivity.</>
    },
    {
        name: "HTML",
        tag: "Creates structure for web documents.",
        color: "color1",
        image: <svg className="html" viewBox="0 0 578 512"> <use href={`${tools}#html`}/></svg>,
        blurb: <>I learned HTML by inspecting and experimenting with website code very early on. The semantics of HTML5 can help make source code more readable.</>
    },
    {
        name: "CSS",
        tag: "Used to describe the presentation of a document.",
        color: "color2",
        image: <svg className="css" viewBox="-30 0 512 512"> <use href={`${tools}#css`}/></svg>,
        blurb: <>I learned CSS around the time I learned HTML by playing around with source code. I always go to CSS first for design.</>
    },
    {
        name: "Node",
        tag: "Executes code outside a web browser using JavaScript.",
        color: "color3",
        image: <svg className="node" viewBox="-30 0 512 512"> <use href={`${tools}#node`}/></svg>,
        blurb: <>Node is great because it lets you write server code in JavaScript. I have used Node to make my own servers.</>
    },
    {
        name: "Git",
        tag: "Version control system.",
        color: "color1",
        image: <svg className="git" viewBox="0 0 512 512"> <use href={`${tools}#git`}/></svg>,
        blurb: <>I have used git to review and post pull requests and for just keeping track of several different versions of a project.</>
    },
    {
        name: "C++",
        tag: "Programming language often used for or high-efficiency code and its object-oriented features.",
        color: "color2",
        image: <svg className="c++" viewBox="0 0 50 50"> <use href={`${tools}#c++`}/></svg>,
        blurb: <>I learned C++ during university. I appreciate its strong typing and memory management. Writing in C++ helped me appreciate the importance of writing structured code.</>
    },
    {
        name: "C",
        tag: "Procedural programming language often used for high-efficiency code.",
        color: "color3",
        image: <svg className="c" viewBox="0 0 128 128"> <use href={`${tools}#c`}/></svg>,
        blurb: <>I learned C in university. I am fond of its low level features especially when dealing with strings.</>
    },
    {
        name: "Python",
        tag: "Programming language often used in mathematics.",
        color: "color1",
        image: <svg className="python" viewBox="-30 0 512 512"> <use href={`${tools}#python`}/></svg>,
        blurb: <>Python is good for writing clean and intuitive human readable code. I learned Python in university and appreciate its simplicity.</>
    }
]