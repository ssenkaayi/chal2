import { Link } from "react-router-dom"
import { IoMdMenu,IoMdCloseCircleOutline } from "react-icons/io";

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

            <div className="mobile-nav">
                <div className="mobile-nav-menu">
                    <div className="nav-logo">
                        Chal2
                    </div>

                    <div className="mobile-menu">
                        < IoMdMenu className="mobile-svg-menu"/>
                        <IoMdCloseCircleOutline className="mobile-close-svg"/>
                        
                    </div>
                </div>


                <ul className="mobile-nav-links">
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