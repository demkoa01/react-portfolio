import React from "react";

const Projects = () => {

    return(
        <section id="projects">
            <div className="row">
                <div className="twelve columns collapsed">
                    <h1>Projects</h1>
                    <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thrids cd">
                        <img style={{ width: "485px "}} 
                        src="" alt="All-Star Sporting Goods" />
                        <p>Mock up inventory site for a small company that has multiple locations.
                            With this site, the employee can check other stores to refer guests to get their equipment.
                        </p>
                        <button type="submit" href="https://cryptic-sea-45670.herokuapp.com/" target="_blank">View Project</button>
                        <button type="submit" href="" target="_blank">View Code</button>
                    </div>

                    <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thrids cd">
                        <img style={{ width: "485px "}} 
                        src="" alt="Budget Tracker" />
                        <p>Budget tracker to help the user keep track of their expenses. This application works and saves data if the user
                            is offline as well.
                        </p>
                        <button type="submit" href="https://evening-earth-88072.herokuapp.com/" target="_blank">View Project</button>
                        <button type="submit" href="https://github.com/demkoa01/budget-tracker" target="_blank">View Code</button>
                    </div>

                    <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thrids cd">
                        <img style={{ width: "485px "}} 
                        src="" alt="Weather Dashboard" />
                        <p> Weather application that can report current weather in any city, share the 5 day forecase and save your previously
                            searched cities.
                        </p>
                        <button type="submit" href="https://demkoa01.github.io/Weather-Dashboard/" target="_blank">View Project</button>
                        <button type="submit" href="https://github.com/demkoa01/Weather-Dashboard" target="_blank">View Code</button>
                    </div>

                    <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thrids cd">
                        <img style={{ width: "485px "}} 
                        src="" alt="Food and a Flick" />
                        <p>Web API application that offers the user movie suggestions and dinner suggestions based based off a single ingredient and 
                            the users movie genre preference.
                        </p>
                        <button type="submit" href="https://brandonespencer.github.io/Food-and-a-Flick/" target="_blank">View Project</button>
                        <button type="submit" href="https://github.com/brandonespencer/Food-and-a-Flick" target="_blank">View Code</button>
                    </div>

                    <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thrids cd">
                        <img style={{ width: "485px "}} 
                        src="" alt="Javascript Quiz" />
                        <p>Javascript quiz to test the users knowledge on the coding language.
                        </p>
                        <button type="submit" href="https://demkoa01.github.io/JavaScrpit-Quiz/" target="_blank">View Project</button>
                        <button type="submit" href="https://github.com/demkoa01/JavaScrpit-Quiz" target="_blank">View Code</button>
                    </div>

                    <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thrids cd">
                        <img style={{ width: "485px "}} 
                        src="" alt="Tech Blog" />
                        <p>Blog where users can post their thoughts on all things coding and whaterever else they want.
                        </p>
                        <button type="submit" href="https://obscure-earth-61012.herokuapp.com/" target="_blank">View Project</button>
                        <button type="submit" href="https://github.com/demkoa01/Tech-Blog" target="_blank">View Code</button>
                    </div>
                </div>
            </div>
        </section>
    ); 
};

export default Projects;