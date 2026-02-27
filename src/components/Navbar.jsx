import React from "react"
import Contacts from "./Contacts"

const Navbar = (props) => {
    return (
      <>
        <nav className="navigation navbar navbar-expand-sm nav-transparent fixed-top text-dark full-screen-scroller m-0">
          <Contacts/>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="nav navbar-nav ">
                    <li className="nav-item">
                        <a className="nav-link stroke" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about_me">About Me</a>
                    </li>
                        <div className="sub-nav">
                          <li className="nav-item">
                          <a className="nav-link" href="#portfolio">Projects</a>
                            <ul className="nav navbar-nav sub-nav-content">
                                {
                                props.titles.map(title => (
                                <li key={title + ' nav'} className="nav-item">
                                  <a className="nav-link" href={"#"+title.replaceAll(" ","-")}>{title.toTitleCase()}</a> 
                                </li> 
                                ))}
                            </ul>
                          </li> 
                        </div>
                    <li className="nav-item">
                        <a className="nav-link" href="#skills">Skills</a>
                    </li>
                </ul>
            </div>
          </nav>
        </>
    )
}

export default Navbar