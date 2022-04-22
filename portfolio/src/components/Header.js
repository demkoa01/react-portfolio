import React, { Component } from "react";

class Header extends Component {
    render() {


    return(
        <header id="home">
            <ParticlesBg type="lines" bg={true}/>
            <nav id="nav-wrap">
                <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show Navigation</a>
                <a className="mobile-btn" href="#home" title="Hide navigation">Hide Navigation</a>

                <ul id="nav" className="nav">
                    <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                    <li><a className="smoothscroll" href="#about">About</a></li>
                    <li><a className="smoothscroll" href="#resume">Resume</a></li>
                    <li><a className="smoothscroll" href="#projects">Projects</a></li>
                    <li><a className="smoothscroll" href="#contact">Contact Me</a></li>
                </ul>
            </nav>

            <div className="row banner">
                <div className="banner-text">
                    <h1 className="responsive-headline">{name}</h1>
                    <h3>{description}.</h3>
                    <hr/>

                    <ul className="social">
                        <a href="https://www.linkedin.com/in/allison-demkovich-96b73897/" target="_blank" className="button btn"><i className="fa fa-linkedin"></i></a>
                        <a href="https://github.com/demkoa01" target="_blank" className="button btn"><i className="fa fa-github"></i></a>
                    </ul>
                </div>
            </div>

            <p className="scrolldown">
                <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>
        </header>
    ); 
    }
}

export default Header;