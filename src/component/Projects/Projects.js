import React from 'react';

import prImage from '../../img/webMockup.jpg'
import './projects.scss'
const Projects = ( ) =>{
    const rdom = [
        1,2,3,4,5,6
    ]
   
    return(
        <div className="projects" id="work">
            <div className="title">
                <h1>
                    Recent Work
                </h1>
            </div>

            <div className="project-content">
                {
                    rdom.map((r) => {
                        return(
                            <div class="project">
                                <h1>Creative</h1>
                                <div className='box' id="box">
                                    <img src={prImage} alt="project imag" />
                                </div>
                                <p>This is about project</p>
                            
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Projects