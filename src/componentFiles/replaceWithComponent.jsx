import React from "react"
import projects from "./projectList"
import ALink from "../components/ALink"

const replaceItems = projects.reduce((acc,curr,i) => {
    acc[curr.title] = <ALink key={`${curr.title} link`} linkText={curr.title} url={curr.url}/>
    return acc
},{})

export default function replaceJSX (s) {
    const re = new RegExp(`#\\(([^()]+)\\)`,'g')
    let newValue = s.valueOf().split(re)
    return newValue.reduce((acc,fragment,i) => {
            if (i === 0) return [fragment]
            else return [...acc,replaceItems[fragment]?? fragment]
        },[])
}