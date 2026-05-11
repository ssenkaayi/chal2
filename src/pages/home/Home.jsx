import { useState } from "react"
// import { useEffect } from "react";
import recentProjects from "./data"

function Home(){

    const [projects,setProject] = useState(recentProjects);



    console.log(projects)
    return(
        <div >

            <div className="hero">

                <div className="hero-content-container">
                    <h3>
                        Hello, my name is Charles Ssenkaayi
                    </h3>
                    <h1>
                        And i am a web developer
                    </h1>
                    <p>Experience in HTML, CSS and Javascript</p>
                    <ul>
                        <li>Resume</li>
                        <li>Git</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>

            </div>

            <div>

                <div className="tech-stack">

                    <h3>Tech stack</h3>

                    <ul>
                        <li>MongoDb</li>
                        <li>Express</li>
                        <li>React</li>
                        <li>Node</li>
                    </ul>
                </div>

                <div className="recent-projects">

                    <h3>Projects</h3>

                    {projects.map((project)=>

                        <div className="project-card-container">

                            <h3>{project.name}</h3>
                            
                            <div key={project.name} className="project-card">
                                <img width='366px'  src={project.image_path} alt={project.name} />
                                <div>
                                    <h4>{project.name}</h4>
                                    <p>{project.des}</p>
                                </div>
                            </div>
                            
                        </div>

                    )}

                    <a>More projects +</a>

                </div>
            </div>
        </div>

    )
}

export default Home