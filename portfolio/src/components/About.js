import React, { Component } from 'react';

class About extends Component {
    render() {

    return(
        <section id='about'>

            <div className='row'>
                <div className='three columns'>
                    <img className='profile-pic' src={profilepic} alt="Image of developer."/>
                </div>
                <div className='nine columns main-col'>
                    <h2>About Me</h2>
                    <p>Hi! I am an early-career software engineer with a background in mechanical engineering. More specifically, I have been working at Target Corporate as a Product Engineer since June 2018 where I have been developing furniture for retail.
                        I am eager to begin blending my product and retail experience with my web development skills to create applications and sites that are user friendly, asthetically pleasing and powerful. 
                        I love collaborating with others and thinking outside of the box! 
                    </p>

                    <div className='row'>
                        <div className='columns contact-details'>
                            <h2>Contact Information</h2>    
                            <p className='address'>
                                <span>Allison Demkovich</span><br/>
                                <span>847.852.9500</span><br/>
                                <span>demkovich.allison@gmail.com</span><br/>
                                <span>Minneapolis, MN</span><br/>
                            </p>
                        </div>
                        <div className='columns download'>
                            <p>
                                <a href={resumeDownload} className='button' target="_blank"><i className='fa fa-download'></i>Download Resume</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
    }
}

export default About;