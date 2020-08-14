import React from 'react'

import './skills.scss'

const Skills = ( ) => {
    const softSkills = [
        {
            skill : 'Communication',
            percentage : '60',
            type : 'soft'
        },
        {
            skill : 'Dedication',
            percentage : '90',
            type : 'soft'
        },
        {
            skill : 'Team Work',
            percentage : '75',
            type : 'soft'
        },
        {
            skill : 'Creativity',
            percentage : '65',
            type : 'soft'
        },
    ]
    const hardSkills = [
        {
            skill : 'HTML5 & CSS3',
            percentage : '90',
            type : 'technical'
        },
        {
            skill : 'Javascript',
            percentage : '75',
            type : 'technical'
        },
        {
            skill : 'SCSS',
            percentage : '80',
            type : 'technical'
        },
        {
            skill : 'React JS',
            percentage : '70',
            type : 'technical'
        },
        {
            skill : 'Gatsby JS',
            percentage : '70',
            type : 'technical'
        }
    ]
    return(
        <div className="skills" id="skills">
             <div className="title">
                <h1>
                    My Skills
                </h1>
            </div>
            <div className="skills-content">
                <div className="technical">
                    <h2>Technical Skills</h2>
                    {
                       hardSkills.map((skill) => {
                           return(
                               <div className="skill">
                                   <h3>
                                       {skill.skill}
                                   </h3>
                                    <div className="outer">
                                        <div className="inner" style={{width: skill.percentage+'%' }}>
                                            <div className="circle">
                                                <p>{skill.percentage}%</p>
                                            </div>
                                        </div>
                                    </div>
                               </div>
                              
                           )
                       })
                    }
                </div>

                <div className="soft">
                    <h2>Soft Skills</h2>
                    {
                       softSkills.map((skill) => {
                           return(
                               <div className="skill">
                                   <h3>
                                       {skill.skill}
                                   </h3>
                                    <div className="outer">
                                        <div className="inner" style={{width: skill.percentage+'%' }}>
                                            <div className="circle">
                                                <p>{skill.percentage}%</p>
                                            </div>
                                        </div>
                                    </div>
                               </div>
                              
                           )
                       })
                    }
                </div>
            </div>
        </div>
    )
}

export default Skills