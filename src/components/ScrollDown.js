import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown} from "@fortawesome/free-solid-svg-icons";

class ScrollDown extends Component {
    
    render() {
        return (
            <div className="scroll_down_container">
                <p>Scroll Down</p>
                <FontAwesomeIcon icon={faAngleDoubleDown}/ >
            </div>
        )
    }
}

export default ScrollDown;