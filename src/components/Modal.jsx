import React, { useRef } from "react";
import MakeSections from "../componentFiles/makeSections";

const Modal = ({mod_title,more,setShowMore,url}) => {
    const modal = useRef(null)
    const modal_box = useRef(null)

    const hideModal = () => {
        modal.current.classList.remove('add')
        setTimeout(()=>modal.current.classList.add('remove'),0)
        setTimeout(() => setShowMore(false),500)
    }

    return (
        <div 
            ref={modal}
            className="modal-el add d-flex"
            onClick={ (e)=> {
                    if (e.target !== e.currentTarget) return
                    hideModal() 
                }
            }
        >
            <div ref={modal_box} className="md-col-12 px-2 sm-col-12 m-auto modal-box">
            <header>
                <h3>{mod_title}</h3>
                <span
                    className="exit"
                    onClick={()=>{
                        hideModal()
                    }}
                >&times;
                </span>
                </header>
                <div className="modal-contents">
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