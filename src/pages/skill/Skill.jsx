import './skill.css'

function Skill(){
    return(

    <>
        <nav className="skill-hero">
            <div >
                <h1 className='hero-heading4'>What i do</h1>
                <p className='hero-para'>Craft robust, secure and cross-bowser web apps.</p>
            </div>
        </nav>

        <main>

            <div className="feature-container">

                <div className='feature-text-content'>
                    <h2 className='feature-heading'>Skills</h2>
                    <p className='feature-para'>Build, Deploy and Scale</p>
                </div>


                <div className='feature-card-container'>

                    <div className='feature-card'>
                        <h3>frontend</h3>
                        <p>Responsive layouts</p>
                        <p>Cross-browser compatibility</p>
                        <p>State management</p>
                        <p>Version Control</p>
                        <p>Api integration</p>
                    </div>

                    <div>
                        <h3>Backend</h3>
                        <p>Api development</p>
                        <p>Api Authentication</p>
                        <p>Api Authorisation</p>
                        <p>Database design and development</p>
                        <p>DevOps and Deployment </p>
                    </div>

                    <div>
                        <h3>Soft Skills</h3>
                        <p>Code deburging and testing</p>
                        <p>Research</p>
                        <p>Report writing</p>
                        <p>Communication</p>
                        <p>Trouble shooting</p>
                    </div>
                </div>

            </div>

            <div className='strategy-container'>

                <h2>How i do it</h2>
                <p className='strategy-para'>Four stages, no shortcuts</p>

                <div className="strategy-card-container">

                    <div className='strategy-card'>
                        <h3>
                            1 Research
                        </h3>
                        <p>
                            
                            Project analysis and solution exploration
                        </p>
                    </div>

                    <div>
                        <h3>
                            2 Methodology
                        </h3>
                        <p>
                            
                            Choosing the best solution
                        </p>
                    </div>

                    <div>
                        <h3>
                            3 Planning
                        </h3>
                        <p>
                            
                               Planning and timeline development
                        </p>
                    </div>

                    <div>
                        <h3>
                           4 Delivery
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