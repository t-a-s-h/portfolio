import React, { useState } from "react";
import Summary from "./Summary";
import Modal from "./Modal";
import ALink from "./ALink";

const Project = (props) => {

    const [showMore, setShowMore] = useState(false)

    return (
        <>
        {showMore && <Modal 
            setShowMore={setShowMore}
            showMore={showMore}
            more={props.more}
            mod_title={props.title}
            url={props.url}
        />}
        <article key={props.title} id={props.title.replaceAll(" ","-")} className="d-flex container-fluid p-md-2 mb-4 min-vh-100 mb-md-0">
            
            { props.show_modal && <div className="modal_contents">lorem ipsum sit dolar amet</div> }
            <div className="project my-auto">
                <h2 className="display-3 display-md-4 text-dark text-center">{props.title}.</h2>
                <div className="row mx-2">
                    <div className="col-md-6 img-fluid m-auto p-md-2 p-0">     
                        <div className="frame mx-auto">
                        <a target="_blank" href={props.url}>
                            <img className="img-thumbnail rounded-0 d-block text-dark w-25" src={process.env.PUBLIC_URL + props.image} alt={props.title}></img>
                        </a>
                        </div>
                        <div className="cover mx-auto"></div>
                    </div>
                    <Summary
                        key={props.title + ' summary'}
                        title={props.title}
                        description={props.description}
                        more={props.more}
                        next_steps={props.next_steps}
                        show_more={props.show_more}
                        summary={props.summary}
                        link={props.link}
                        url={props.url}
                        git={props.git}
                        call={
                            function () {
                                return (
                                    <div className="project-links text-center">
                                        <ALink linkText={"Project"} url={props.url}/> | <ALink linkText={"Github"} url={props.git}/>
                                    </div>
                                )}
                            } 
                        technologies={props.technologies}
                        setShowMore={setShowMore}
                        showMore={showMore}
                    />
                </div>
            </div>
        </article>
        </>
    )
}

export default Project 