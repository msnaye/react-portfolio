import React from 'react';
import '../../styles/Portfolio.css';
// import PhotoList from '..'

function Portfolio () {
    return(
        <section className='portCont'>
            <h1 id="portfolio">Portfolio</h1>

    
    <div className="my-projects-container">  

        <div className="project">
            <h3 className="project-name">
               Calculator
            </h3>
            <img src="./.assets/PhotoList/calculator" alt="calculator" class="project-image"></img>
            <div className="btn-container"> 
               <button className="repo-btn"> <a href="https://github.com/msnaye/calculator22">Go to Repo</a></button>
               <button className="live-website-btn"><a href="https://msnaye.github.io/calculator22/">Go Live</a></button>
            </div>
        </div>  

        <div className="project">
            <h3 className="project-name">
                Run Buddy
            </h3>
               <img className="project-image" src="./assets/PhotoList/run-buddy.png" alt=""/>
            <div className="btn-container"> 
              <button className="repo-btn"> <a href="https://github.com/msnaye/run-buddy">Go to Repo</a> </button>
              <button className="live-website-btn"><a href="https://msnaye.github.io/run-buddy/">Go Live</a></button>
            </div>

        </div> 

        <div className="project">
                <h3 className="project-name">
                  Trip Planner
                </h3>
                <img className="project-image" src=".assets/PhotoList/Project1.png" alt=""/>
            <div className="btn-container"> 
              <button className="repo-btn"> <a href="https://github.com/SnowLune/trip-planner">Go to Repo</a> </button>
              <button className="live-website-btn"><a href="https://snowlune.github.io/trip-planner/">Go Live</a></button>
            </div>
        </div>

        <div className="project">
            <h3 className="project-name">
              GeoChat
            </h3>
            <img className="project-image" src=".assets/PhotoList/nascreenshot.png" alt=""/>
        <div className="btn-container"> 
          <button className="repo-btn"> <a href="https://github.com/CarlJMcGee/Project-2_Neighborhood-group-chat">Go to Repo</a> </button>
          <button className="live-website-btn"><a href="https://geo-chat-neighborhoods.herokuapp.com/homepage">Go Live</a></button>
        </div>
    </div>
          
          
      
    </div>
        </section>
    );
}

export default Portfolio;