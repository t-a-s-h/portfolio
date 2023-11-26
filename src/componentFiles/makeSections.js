import { Fragment } from "react"
import ALink from "../components/ALink"
import replaceJSX from "./replaceWithComponent"

const startHeadingLevel = 4

const makeSections = (el,title,url,i = startHeadingLevel) => {
    const CustomTag = `h${i}`
    if (el instanceof Array) {
        return el.map((item,j) => <Fragment key={`item${j+1}`}>{makeSections(item,title,url,++i)}</Fragment>)
    }
    else if (el instanceof Object) {
        return Object.entries(el).map(([key,val],j) => <Fragment key={key}><CustomTag>{key}</CustomTag><div key={`item${j+1}`}>{makeSections(val,title,url,++i)}</div></Fragment>)
    }
    else {            
        return <p>{el.replaceJSX("___", <ALink key={title} linkText={title} url={url}/>)}</p>
    }
}

const MakeSections = ({more,title,url})=> makeSections(more,title,url)

export default MakeSections