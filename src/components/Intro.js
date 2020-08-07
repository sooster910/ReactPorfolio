import React, { Component } from 'react'
import ScrollDown from './ScrollDown';
import ContactIconList from './ContactIconList';
class Intro extends Component {
 

    render() {
        return (
            <section id="intro">
                <div className="hero_container">
                    <img src="portrait.png" alt="portrait" />
                    <h1 className="hero_text">HYUNSU JOO</h1>
                    <p>Experienced JavaScript Front End Developer who
                    focuses on writing clean and efficient code.</p>
                    <ContactIconList />
                </div>
                {/* <ScrollDown /> */}
            </section>
        )
    }
}
export default Intro;