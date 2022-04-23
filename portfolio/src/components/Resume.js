import React from "react";

const Resume = () => {
    return(
        <section id="resume">

            <div className="row education">
                <div className="three columns header-col">
                    <h1><span>Education</span></h1>
                </div>

                <div className="nine columns main-col">
                    <div className="row item">
                        <div className="twelve columns">
                            <h2 className="resume-title">Micigan State Universtiy</h2>
                            <h3 className="resume-detail">Coding Bootcamp Certificate</h3>
                            <h3 className="resume-detail-two">May 2022</h3>
                            <p className="resume-description">ABOUT THE CLASS **** FINISH</p>
                        </div>

                        <div className="twelve columns">
                            <h2 className="resume-title">University of Minnesota - Twin Cities</h2>
                            <h3 className="resume-detail">Bachelor of Mechanical Engineering, Product Design Minor</h3>
                            <h3 className="resume-detail-two">May 2018</h3>
                            <p className="resume-description">ABOUT THE CLASS **** FINISH</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row work">
                <div className="three columns header-col">
                    <h1><span>Work</span></h1>
                </div>
                <div className="nine columns main-col">
                    <h2 className="resume-title">Target Corporation</h2>
                    <h3 className="resume-detail">Product Engineer, Furniture</h3>
                    <h3 className="resume-detail-two">June 2018 - Present</h3>
                    <p className="resume-description">ABOUT THE job **** FINISH</p>
                </div>
            </div>

            <div className="row skill">
                <div className="three columns header-col">
                    <h1><span>Technical Skills</span></h1>
                </div>
                <div className="nine columns main-col">
                    <p>Technical Skills</p>
                    <div className="bars">
                        <ul className="skills">
                            <li className="skill">Adobe Creative Suite</li>
                            <li className="skill">SolidWorks</li>
                            <li className="skill">3DS Max</li>
                            <li className="skill">JavaScript</li>
                            <li className="skill">HTML + CSS Styling</li>
                            <li className="skill">Node.js</li>
                            <li className="skill">Express.js</li>
                            <li className="skill">MySQL + NoSQL </li>
                            <li className="skill">React</li>
                            <li className="skill">Mongoose + MongoDB</li>
                            <li className="skill">Heroku</li>
                            <li className="skill">GitHub + GitLab</li>
                        </ul>
                    </div>
                </div>
            </div>

        </section>
    ); 
};

export default Resume;