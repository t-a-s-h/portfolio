import React, { useEffect } from "react"
import Project from "./Project"
import ProjectIntro from "./ProjectIntro"

const Projects = ({ projects, showMore, setShowMore, curr_project }) => {

    useEffect(()=> {
        document.documentElement.style.cssText += `--num-projects:${projects.length}`
    })

    return (
        <div className="container-fluid d-flex align-items-center flex-column mx-0 p-md-2 p-0">
        <div className="row w-100">
            <ProjectIntro titles={projects.map(project=>project.title)}/>
            <div className="col-md-12 my-5">
                { projects.map((project,i) => (
                    <Project
                        key={project.title + ' project'}
                        showMore={showMore}
                        setShowMore={setShowMore}
                        curr_project={curr_project}
                        index={i}
                        title={project.title}
                        link={project.link}
                        image={project.image}
                        description={project.description}
                        more={project.more}
                        show_more={project.show_more}
                        summary={project.summary}
                        next_steps={project.next_steps}
                        url={project.url}
                        git={project.git}  
                        technologies={project.technologies} 
                />
                ))}
                </div>
            </div>
        </div>
    )
}

export default Projects