import { useState } from "react"
import { Link } from "react-router-dom"
import recentProjects from "./data"
import '../../App.css'

function Home(){

    const [projects,setProject] = useState(recentProjects);
    let resume_path = 'https://drive.google.com/file/d/1jOREjW-7AdR2r6MgmD-rt3Z1Lp7QigdN/view?usp=sharing'

    console.log(projects)
    return(
        <div >

            <div className="hero">

                <div className="hero-content-container">
                    <h3 className="hero-h3">
                        Hello, my name is Charles Ssenkaayi
                    </h3>
                    <h1 className="hero-h1">
                        And i am a <span className="hero-highlight">Web Developer</span> 
                    </h1>
                    <p className="hero-para">Skilled in HTML, CSS and Javascript</p>
                    <ul className="hero-social-links">
                        <Link className="btn hero-btn-link" to={resume_path }>Resume</Link>
                        <li>Git</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>

            </div>

            <div className="feature">

                <div className="tech-stack-container">

                    <h3 className="tech-stack-heading">Tech stack</h3>

                    <ul className="tech-stack">
                        <li className="tech-highlight">MongoDb</li>
                        <li className="tech-highlight">Express</li>
                        <li className="tech-highlight">React</li>
                        <li className="tech-highlight">Node Js</li>
                    </ul>
                </div>

                <div className="projects">

                    <h3 className="project-h3">Projects</h3>

                    <div className="project-card-container">
                        {projects.map((project)=>

                            <Link to={project.url} key={project.name} className="project-card">

                                <div className="project-img-container">
                                    <img className="project-img" src={project.image_path} alt={project.name} />

                                </div>

                                <div className="project-des">
                                    <h5 className="project-h5">{project.name}</h5>
                                    <p>{project.des}</p>
                                </div>
                                
                            </Link>

                        )}
                    </div>

                    <span className="project-link"><Link  className="btn project-btn-link" to='/experience'  >More projects +</Link></span>

                </div>
            </div>
        </div>

    )
}

export default Home