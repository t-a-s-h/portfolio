import React from "react"

const ShowMore = ({setShowMore})=> {

    return (
        <span className="more">
            <a onClick= {({target}) => {
                console.log(target.closest('article'))
                target.closest('article').scrollIntoViewIfNeeded()
                setShowMore(true)}} >
            more <i className="fas fa-chevron-circle-down"></i>
            </a>
        </span>
    )
}

export default ShowMore

