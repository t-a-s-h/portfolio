import React from "react"

const ShowMore = ({index, curr_project, ShowMore, setShowMore})=> {

    return (
        <span className="more">
            <a onClick= {({target}) => {
                curr_project.current = index
                target.closest('article').scrollIntoView()
                setShowMore(true)}} >
            more <i className="fas fa-chevron-circle-down"></i>
            </a>
        </span>
    )
}

export default ShowMore

