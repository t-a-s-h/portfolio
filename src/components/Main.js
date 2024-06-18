import React, { useRef, useState } from "react"
import Navbar from "./Navbar";
import ProjectIntro from "./ProjectIntro"
import Splash from "./Splash";
import AboutMe from "./AboutMe";
import Footer from "./Footer";
import Projects from "./Projects"
import NavMobile from "./NavMobile";
import Skills from "./Skills";
import Modal from "./Modal";

import './style.css'

const Main = (props) => {
    const [showMore, setShowMore] = useState(false)
    const curr_project = useRef(null)

    return (
        <>
        {showMore && 
            <Modal 
                mod_title={props.projects[curr_project.current].title}
                more={props.projects[curr_project.current].more}
                setShowMore={setShowMore}
                url={props.url}
        />}
        <main id="main_page">
            <Navbar
            titles={props.titles}
            />
            <Splash />
            <AboutMe />
            <ProjectIntro 
              titles={props.titles}
            />
                <section id="portfolio" className="container-fluid d-flex align-items-center flex-column px-0">
                    <div className="row w-100 my-auto"> 
                        <div className="col-md-12 p-0">
                            <Projects
                                curr_project={curr_project}
                                showMore={showMore}
                                setShowMore={setShowMore}
                                projects={props.projects}
                            />
                    </div>
                    </div>
                </section>
                <Skills />
                <Footer />
                <NavMobile/>
        </main>
        </>
    )
}

export default Main