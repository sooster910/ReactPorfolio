import React from 'react'
import { faGithub,faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

 const ContactIconList=()=> {
    return (
        <ul className= "contactIconList">
           <li><a className="link" href="https://github.com/sooster910" target="_blank"> <FontAwesomeIcon icon={faGithub} /></a></li>
           <li><a className="link" href="https://www.linkedin.com/in/hyunsu-joo/" target="_blank"> <FontAwesomeIcon icon ={faLinkedin}/></a></li>
           <li><a className="link" href="mailto:hs9880@gmail.com" target="_blank"><FontAwesomeIcon icon ={faEnvelope} /></a></li>
        </ul>
    )
}
export default ContactIconList;