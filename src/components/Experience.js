import React, { Component } from 'react'
import { Timeline, Event } from "react-timeline-scribble";

const experienceList = []


class Experience extends Component {
    render() {
        return (
            <section id="experience">
                <h2>EXPERIENCE</h2>
                 <main>
                    <article className="experience_box_wrapper">
                    <Timeline>

                        <Event interval={"2016 – 2018"} title={"Lorem"} subtitle={"Ipsum"} >
                            dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                            id est laborum.
                        </Event>
                    </Timeline>
                    </article>
                 </main>
            </section>
        )
    }
}
export default Experience;
