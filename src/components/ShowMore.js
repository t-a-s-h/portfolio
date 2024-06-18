import React from "react"

const ShowMore = ({index, curr_project, ShowMore, setShowMore})=> {

    return (
        <span className="more">
            <button onClick= {({target}) => {
                curr_project.current = index
                const project = target.closest('article')
                const { y: project_y, height: project_height } = project.getBoundingClientRect()
                const { clientHeight: viewport_height } = document.documentElement
                const { y: viewport_y } = document.documentElement.getBoundingClientRect()
                const is_above_top = 0 >= project_y 
                const is_below_bottom = project_y >= viewport_height - project_height
                if (is_below_bottom) {
                    project.scrollIntoView(false)
                }
                else if (is_above_top) {
                    window.scrollTo({ top: project_y - viewport_y - 10 })
                }
                setShowMore(true)}} >
                more <i className="fas fa-chevron-circle-down"></i>
            </button>
        </span>
    )
}

export default ShowMore

