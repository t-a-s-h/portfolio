import react from "react";
import MakeSections from "../componentFiles/makeSections";

const Modal = ({mod_title,more, setShowMore,url}) => {
    console.log(mod_title)
    return (
        <div className="modal d-flex">
            <div className=" md-col-12 px-2 sm-col-12 m-auto modal-box">
            <header>
                <h3>{mod_title}</h3>
                <span
                    className="exit"
                    onClick={()=>{setShowMore(false)}}
                >&times;
                </span>
                </header>
                <div className=" modal-contents">
                    <MakeSections
                        more = {more}
                        title = {mod_title}
                        url = {url}
                    />
                </div>
            </div>
        </div>
    )
}

export default Modal