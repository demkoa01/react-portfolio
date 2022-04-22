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
                    <p>{bio}</p>

                    <div className='row'>
                        <div className='columns contact-details'>
                            <h2>Contact Information</h2>    
                            <p className='address'>
                                <span>{name}</span><br/>
                                <span>{phone}</span><br/>
                                <span>{email}</span><br/>
                                <span>{city}, {state}</span><br/>
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