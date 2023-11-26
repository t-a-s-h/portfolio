import React from "react"

const ShowMore = ({setShowMore})=> {

    return (
        <span className="more">
            <a onClick= {({target}) => {
                target.closest('article').scrollIntoView()
                setShowMore(true)}} >
            more <i className="fas fa-chevron-circle-down"></i>
            </a>
        </span>
    )
}

export default ShowMore

