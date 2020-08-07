import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUserCircle, faCode,faFileDownload} from "@fortawesome/free-solid-svg-icons";

class NavBar extends Component {

    render() {
        return (
            <nav>
                <ul>
                    <li><a href="#home"><FontAwesomeIcon icon={faHome} />Home</a></li>
                    <li><a href="#about"><FontAwesomeIcon icon={faUserCircle} />About Me</a></li>
                    <li><a href="#projects"><FontAwesomeIcon icon={faCode} />Projects</a></li>
                    <li><a href="#contact"><FontAwesomeIcon icon={faFileDownload} />Resume</a></li>
                </ul>
            </nav>
        )
    }
}

export default NavBar;