import React, { useRef, useState } from "react";
import MakeSections from "../componentFiles/makeSections";

const Modal = ({mod_title,more,setShowMore,url}) => {
    const modal = useRef(null)
    const modal_box = useRef(null)
    let ivl = useRef(null);
    let down = true;
    const [showDown, setShowDown] = useState(true);

    const hideModal = () => {
        modal.current.classList.remove('add')
        setTimeout(()=>modal.current.classList.add('remove'),0)
        setTimeout(() => setShowMore(false),500)
    }

    const scrollToTop = ()=> {
        modal_box.current.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    const startScrollDown = () =>{
        ivl.current = setInterval(()=> {
            modal_box.current?.scrollBy({
                top: 5,
                behavior: "smooth",
            },5)
        });    
    }

    const stopScrollDown = ()=> clearInterval(ivl.current)

    const handleScroll = (e)=> {
        let buffer = 60;
        let { scrollTop, clientHeight, scrollHeight } = e.target;
        let show = scrollTop + clientHeight <= scrollHeight - buffer
        setShowDown(prev => prev !== show ? show : prev);
    } 

    return (
        <div
            ref={modal}
            className="modal-el add d-flex "
            onClick={ (e)=> {
                    if (e.target !== e.currentTarget) return
                    hideModal() 
                }
            }
        >
            <div 
                onScroll={handleScroll}
                onMouseUp={stopScrollDown}                  
                ref={modal_box} className="md-col-12 px-2 sm-col-12 m-auto modal-box">
            <header>
                <h3>{mod_title}</h3>
                <span
                    className="exit"
                    onClick={hideModal}
                >&times;
                </span>
                </header>
                <div className="modal-contents mx-1 mx-md-4">
                    <MakeSections
                        more = {more}
                        title = {mod_title}
                        url = {url}
                    />
                </div>
                {showDown ? <footer 
                    onMouseDown={startScrollDown}
                >{showDown && <i className="fas fa-chevron-down"></i>}</footer> : 
                <footer className="up"
                    onMouseDown={scrollToTop}
                ><i className="fas fa-arrow-up"></i>
                </footer>}
            </div>
        </div>
    )
}

export default Modal