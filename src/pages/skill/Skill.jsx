import './skill.css';
import '../../App.css';
import { Link } from "react-router-dom";

function Skill(){
    return(

    <>
        <nav className="skill-hero">
            <div >
                <h1 className='hero-heading4'>What i do</h1>
                <p className='skill-hero-para'>Craft robust, secure and cross-bowser web apps.</p>
                <span className="project-link"><Link  className="btn project-btn-link" to='/experience'  >Explore</Link></span>
            </div>
        </nav>

        <main>

            <div className="feature-container">

                <div className='feature-text-content'>
                    <h2 className='feature-heading'>Skills</h2>
                    <p className='feature-para'>Build, Deploy and Scale</p>
                </div>


                <div className='universal-grid-box'>

                    <div className='feature-card'>
                        <h3 className='feature-card-heading'>Frontend</h3>
                        <p>Responsive layouts</p>
                        <p>Browser compatibility</p>
                        <p>State management</p>
                        <p>Version Control</p>
                        <p>Api integration</p>
                    </div>

                    <div className='feature-card'>
                        <h3 className='feature-card-heading'>Backend</h3>
                        <p>Api development</p>
                        <p>Api Authentication</p>
                        <p>Api Authorisation</p>
                        <p>Database design</p>
                        <p>DevOps & Deployment </p>
                    </div>

                    <div className='feature-card'>
                        <h3 className='feature-card-heading'>Others</h3>
                        <p>Code deburging </p>
                        <p>Code testing</p>
                        <p>Research</p>
                        <p>Report writing</p>
                        <p>Communication</p>
                        
                    </div>
                </div>

            </div>

            <div className='strategy-container'>

                <h2 className='strategy-heading'>How it's archived</h2>
                <p className='strategy-para'>In four stages, no shortcuts!</p>

                <div className="strategy-card-container">

                    <div className='strategy-card'>
                        <h3 className='startegy-heading'>
                            <span className='number-highlight'>1</span> Research
                        </h3>
                        <p>
                            
                            Project analysis and solution exploration
                        </p>
                    </div>

                    <div className='strategy-card'>
                        <h3 className='startegy-heading'>
                            <span className='number-highlight'>2</span> Approach
                        </h3>
                        <p>
                            
                            Choosing the best solution
                        </p>
                    </div>

                    <div className='strategy-card'>
                        <h3 className='startegy-heading'>
                            <span className='number-highlight'>3</span> Planning
                        </h3>
                        <p>
                            
                            Planning and laying timelines 
                        </p>
                    </div>

                    <div className='strategy-card'>
                        <h3 className='startegy-heading'>
                           <span className='number-highlight'>4</span> Delivery
                        </h3>
                        <p>
                            
                            Ensuring on-time project delivery
                        </p>
                    </div>
                </div>
            </div>

        </main>
        




    </>)
}

export default Skill