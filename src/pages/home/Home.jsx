

function Home(){
    return(
        <div className="page-container">
            <div className="hero">

                <div hero-content-container>
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

            <body>

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

                    <h3>Recent projects</h3>

                    <div className="project-card-container">
                        <div className="project-card">
                            <img src="" alt="" />
                            <div>
                                <h4>Project name</h4>
                                <p>Description</p>
                            </div>
                        </div>
                    </div>

                </div>
            </body>
        </div>

    )
}

export default Home