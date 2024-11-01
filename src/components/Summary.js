import React from "react"
import Technologies from "./Technologies"
import ShowMore from "./ShowMore";
import replaceJSX from '../componentFiles/replaceWithComponent'
import ALink from "./ALink";

const Summary = (props) => {
    return (
        <div key={props.title} className="summary col-md-6 call my-auto text-dark px-md-5 font-weight-normal p-md-2 p-0">
            <div className="sub" key={props.title + ' description'}>
                <p>{props.summary.replaceJSX()}</p>
                <ShowMore index={props.index} curr_project={props.curr_project} showMore={props.showMore} setShowMore={props.setShowMore}/>
             </div>
            <Technologies
                key={`${props.title} tech`}
                technologies={props.technologies}
            />
            {props.call()}
        </div>
    )
};

export default Summary