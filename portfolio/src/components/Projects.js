import React, { Component } from "react";

class Projects extends Component {
    render() {


    return(
        <section id="projects">
            <div className="row">
                <div className="twelve columns collapsed">
                    <h1>Projects</h1>
                    <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thrids cd">
                        {projects}
                    </div>
                </div>
            </div>
        </section>
    ); 
    }
}

export default Projects;