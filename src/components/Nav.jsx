import { Link } from "react-router-dom"

function Nav(){
    return(
        <>
            <div className="nav">
                <div className="nav-logo">
                    Logo
                </div>

                <ul className="nav-menu">
                    <li><Link to='/' >home</Link></li>
                    <li><Link to='/skill' >skill</Link></li>
                    <li><Link to='/experience' >experience</Link></li>
                    <li><Link to='/about' >about</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Nav