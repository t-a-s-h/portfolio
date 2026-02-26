import React from 'react'

const Contacts = () => {
    return (
        <div className="contacts">
            <ul>
                <li title="Github">
                    <a href="https://github.com/t-a-s-h"><i aria-hidden="true" className="fab fa-github" title="GitHub"></i></a>
                    <a href="https://github.com/t-a-s-h">https://github.com/t-a-s-h</a>
                </li>
                <li title="LinkedIn">
                    <a href="https://www.linkedin.com/in/natasha-fray"><i aria-hidden="true" className="fab fa-linkedin" title="LinkedIn"></i></a>
                    <a href="https://www.linkedin.com/in/natasha-fray">https://www.linkedin.com/in/natasha-fray</a>
                </li>
                <li title="e-mail">
                    <a href="mailto:natasha.fray9@gmail.com"><i aria-hidden="true" className="far fa-envelope" title="e-mail"></i></a>
                    <a href="mailto:natasha.fray9@gmail.com">natasha.fray9@gmail.com</a>
                </li>
            </ul>
        </div>
    )
}

export default Contacts
