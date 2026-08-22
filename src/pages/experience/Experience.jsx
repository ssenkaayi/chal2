import { Link } from "react-router-dom";
import recentProjects from "../../data/data";

function Expirence(){

    const projects = recentProjects;
    let resume_path = 'https://drive.google.com/file/d/1jOREjW-7AdR2r6MgmD-rt3Z1Lp7QigdN/view?usp=sharing';
    let git_path = 'https://github.com/ssenkaayi';
    let linkedIn_path = 'https://www.linkedin.com/in/charles-ssenkaayi-6b6275246/';

    return(<>

        <nav className="skill-hero">
            <div >
                <h1 className='hero-heading4'>Experience</h1>
                <p className='skill-hero-para'>Experienced in Frontend and Backend development</p>
                <span className="project-link"><Link  className="btn project-btn-link" to='/experience' >Contact</Link></span>
            </div>

        </nav>
            <div>
                <div className="projects-container">

                    <h3 className="project-h3">Frontend Projects</h3>
                            <div className="universal-grid-box">
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

                    <li><Link  className="btn project-btn-link" to='/experience'  >More projects +</Link></li>

                </div>

                <div className="projects-container">

                    <h3 className="project-h3">Fullstack Projects</h3>
                            <div className="universal-grid-box">
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

                    <li><Link  className="btn project-btn-link" to='/experience'  >More projects +</Link></li>

                </div>

   
            </div>

    </>)
}

export default Expirence