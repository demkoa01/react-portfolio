import React, { Component } from "react";

class Contact extends Component {
    render() {

    
    return(
        <section id="contact">
            <div className="row section-head">
                <div className="two columns header-col">
                    <h1><span>Get In Touch</span></h1>
                </div>
                <div className="ten columns">
                    <p className="lead">{message}</p>
                </div>
            </div>

            <div className="row">
                <div className="eight columns">
                    <form action="" method="post" id="contactForm" name="contactForm">
                        <fieldset>
                            <div>
                                <label htmlFor="contactName">Name<span className="required">*</span></label>
                                <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={this.handleChange}/>
                            </div>
                            <div>
                                <label htmlFor="contactEmail">Email Address<span className="required">*</span></label>
                                <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={this.handleChange}/>
                            </div>
                            <div>
                                <label htmlFor="contactSubject">What do you want to talk about?!<span className="required">*</span></label>
                                <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={this.handleChange}/>
                            </div>
                            <div>
                                <label htmlFor="contactMessage">Tell me more!<span className="required">*</span></label>
                                <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                            </div>
                            <div>
                                <button className="submit">Sumbit</button>
                            </div>
                        </fieldset>
                    </form>

                    <div id="message-warning">Error</div>
                    <div id="message-success">
                        <i className="fa fa-check"></i>Your message was sent, thank you!
                    </div>
                </div>
            </div>
        </section>
    );
    }
}

export default Contact;