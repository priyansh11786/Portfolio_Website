import React from 'react'
import FooterLink from '../FooterLink/FooterLink'
import Heading from '../Heading/Heading'
import { skillList } from './../../Asset/skillsData';
import './Skills.css';
import skillsVector from './../../Asset/skills_vector.png';
import SkillCard from './skillCard';


function Skills() {
    return (
        <div className="section-container">
            <Heading
                heading='My Skills.'
                details="These are the Languages,Frameworks and Tools I have explored and have worked with!"
            />

            <div className='skill-card-container'>
                {skillList.map(({ skillName, skillUrl }) => (
                    <SkillCard skillName={skillName} skillUrl={skillUrl} />
                ))}
            </div>

            <FooterLink phrase='Get in ' link='touch.' toAdress='/contacts' />

            <div className='skills-vector-frame'>
                <img
                    src={skillsVector}
                    alt='skills'
                    className='skills-vector'
                />
            </div>
        </div>
    )
}

export default Skills
