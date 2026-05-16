import { useState } from "react"
// import { useEffect } from "react";
import recentProjects from "./data"
import '../../App.css'

function Home(){

    const [projects,setProject] = useState(recentProjects);

    console.log(projects)
    return(
        <div >

            <div className="hero">

                <div className="hero-content-container">
                    <h3 className="hero-h3">
                        Hello, my name is Charles Ssenkaayi
                    </h3>
                    <h1 className="hero-h1">
                        And i am a <span className="hero-highlight">web developer</span> 
                    </h1>
                    <p className="hero-para">Experience in HTML, CSS and Javascript</p>
                    <ul className="hero-social-links">
                        <li>Resume</li>
                        <li>Git</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>

            </div>

            <div className="feature">

                <div className="tech-stack-container">

                    <h3>Tech stack</h3>

                    <ul className="tech-stack">
                        <li>MongoDb</li>
                        <li>Express</li>
                        <li>React</li>
                        <li>Node</li>
                    </ul>
                </div>

                <div className="projects">

                    <h3 className="project-h3">Projects</h3>

                    <div className="project-card-container">
                        {projects.map((project)=>

                            <div key={project.name} className="project-card">

                                <div className="project-img-container">
                                    <img className="project-img" src={project.image_path} alt={project.name} />

                                </div>

                                <div className="project-des">
                                    <h5 className="project-h5">{project.name}</h5>
                                    <p>{project.des}</p>
                                </div>
                                
                            </div>

                        )}
                    </div>

                    <a className="project-link" >More projects +</a>

                </div>
            </div>
        </div>

    )
}

export default Home