import { Link } from "react-router-dom"

function Nav(){
    return(
        <>
            <div className="nav">
                <div className="nav-logo">
                    Chal2
                </div>

                <ul className="nav-menu">
                    <li><Link className="nav-links" to='/' >Home</Link></li>
                    <li><Link className="nav-links" to='/skill' >Skill</Link></li>
                    <li><Link className="nav-links" to='/experience' >Experience</Link></li>
                    <li><Link className="nav-links" to='/about' >About</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Nav