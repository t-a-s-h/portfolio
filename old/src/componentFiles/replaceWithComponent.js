import React from "react"
import projects from "./projectList"
import ALink from "../components/ALink"

const replaceItems = projects.reduce((acc,curr,i) => {
    acc[curr.title] = <ALink key={`${curr.title} link`} linkText={curr.title} url={curr.url}/>
    return acc
},{})

replaceItems['hangman is a weird game'] = <ALink key={`youtube link`} linkText={'hangman is a weird game'} url={'https://www.youtube.com/watch?v=le5uGqHKll8'}/>

String.prototype.replaceJSX = function (find) {
    const re = new RegExp(`#\\(([^()]+)\\)`,'g')
    let newValue = this.valueOf().split(re)
    return newValue.reduce((acc,fragment,i) => {
            if (i === 0) return [fragment]
            else return [...acc,replaceItems[fragment]?? fragment]
        },[])
}