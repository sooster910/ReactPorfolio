import React from 'react'
import { faJs, faNode, faReact, faHtml5, faCss3Alt, faSass } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const clientSideList = [ "JavaScript(ES06)", "React","HTML5","CSS3","Sass"]
const serverSideList = ["Node.js","Express.js","MongoDB"]

const Skills = () => {
    return (

        <section id="skills">
            <h2>SKIILS</h2>
            <SkillList category={`ClientSide`} list={clientSideList}/>
            <SkillList category={`ServerSide`} list={serverSideList}/>
        </section>
    )
}


const SkillList =({category, list})=>{
    return(
        <div className="skills_container">
            <h3>{category}</h3>
            <div className="skills_container_list">
                {list.map(item => <div className="item">{item}</div>)}
            </div>
        </div>
    )

}
export default Skills;