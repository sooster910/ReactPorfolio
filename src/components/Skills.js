import React from 'react'
import { faJs, faNode, faReact, faHtml5, faCss3Alt, faSass } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const clientSideList = [ {item:"JavaScript(ES06)",imgUrl:"/img/javascript.svg"},{item:"React",imgUrl:"/img/reactjs.svg"},{item:"Redux",imgUrl:"/img/redux.svg"},{item:"jQuery",imgUrl:"/img/jquery.svg"},{item:"HTML5",imgUrl:"/img/html5.svg"},{item:"CSS3",imgUrl:"/img/css3.svg"},{item:"Sass",imgUrl:"/img/sass.svg"}]
const serverSideList = [{item:"Node.js",imgUrl:"/img/nodejs.svg"},{item:"Express.js",imgUrl:"/img/expressjs.svg"},{item:"MongoDB",imgUrl:"/img/mongodb.svg"}]
const otherToolsList=[{item:"puppeteer",imgUrl:"/img/puppeteer.svg"},{item:"Github",imgUrl:"/img/github.svg"},{item:"Jira",imgUrl:"/img/jira.svg"},{item:"BitBucket",imgUrl:"/img/bitbucket.svg"}]
const Skills = () => {
    return (

        <section id="skills">
            <h2>SKIILS</h2>
            <SkillList category={`ClientSide`} list={clientSideList}/>
            <SkillList category={`ServerSide`} list={serverSideList}/>
            <SkillList category={`Testing/Other tools`} list={otherToolsList}/> 
        </section>
    )
}


const SkillList =({category, list})=>{
    return(
        <div className="skills_container">
            <h3>{category}</h3>
            <div className="skills_container_list">
                {list.map((skill,id ) => <div className="item" key={id}><img className="item_icon" src={skill.imgUrl} alt={skill.item}/><p>{skill.item}</p></div>)}
            </div>
        </div>
    )

}
export default Skills;