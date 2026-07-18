import { useState } from "react"
import { Link } from "react-router-dom"
import { FaLinkedinIn } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";
import recentProjects from "../../data/data";
import '../../App.css'
import './home.css'

function Home(){

    const [projects,setProject] = useState(recentProjects);
    let resume_path = 'https://drive.google.com/file/d/1jOREjW-7AdR2r6MgmD-rt3Z1Lp7QigdN/view?usp=sharing';
    let git_path = 'https://github.com/ssenkaayi';
    let linkedIn_path = 'https://www.linkedin.com/in/charles-ssenkaayi-6b6275246/';

    // console.log(projects)
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
                        
                        <Link to={git_path } className="hero-svg-container"><PiGithubLogoFill className="hero-svg  git-svg"/></Link>
                        <li><Link className="btn hero-btn-link" to={resume_path }>Resume</Link></li>
                        <Link to={linkedIn_path } className="hero-svg-container"><FaLinkedinIn className="hero-svg linkedIn-svg"/></Link>
                    </ul>
                </div>

            </div>

            <div className="feature">

                <div className="tech-stack-container">

                    <h3 className="tech-stack-heading">Tech stack</h3>

                    <ul className="tech-stack">
                        <li className="tech-highlight"><p>MongoDb</p></li>
                        <li className="tech-highlight"><p>Express</p></li>
                        <li className="tech-highlight"><p>React</p></li>
                        <li className="tech-highlight"><p>Node Js</p></li>
                    </ul>
                </div>

                <div className="projects">

                    <h3 className="project-h3">Projects</h3>

                    <div className="project-card-container">
                        {projects.map((project)=>

                            <Link to={project.url} key={project.name} className="project-card">


                                <img className="project-img" src={project.image_path} alt={project.name} />

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