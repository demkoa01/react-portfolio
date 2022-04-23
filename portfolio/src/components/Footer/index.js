import React from "react";
import './style.css';

const Footer = () => {
    return(
        <footer>
            <div className="row">
                <div className="twelve columns">
                    <ul className="social-links">
                        <li><a className="btn-floating btn-fb mx-1" href="https://github.com/demkoa01"><i className="fab fa-github"></i></a></li>
                        <li><a className="btn-floating btn-fb mx-1" href="https://www.linkedin.com/in/allison-demkovich-96b73897/"><i className="fab fa-linkedin"></i></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; Copyright 2022 - demkoa01 </li>
                    </ul>
                </div>

                <div id="go-top">
                    <a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;