import { Link } from "react-router-dom"

function Nav(){
    return(
        <>
            <div className="nav">
                <div className="nav-logo">
                    Logo
                </div>

                <ul className="nav-menu">
                    <li><Link className="nav-links" to='/' >home</Link></li>
                    <li><Link className="nav-links" to='/skill' >skill</Link></li>
                    <li><Link className="nav-links" to='/experience' >experience</Link></li>
                    <li><Link className="nav-links" to='/about' >about</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Nav