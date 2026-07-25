import { Link } from "react-router-dom"
import { IoMdMenu,IoMdCloseCircleOutline } from "react-icons/io";
import { useState } from "react";
import navMenu from "./menu"

function Nav(){

    const [clicked, setClicked] = useState(false);
    const [menu,setMenu] = useState(navMenu);
    // console.log(navMenu)
    const changeState = ()=>{

        setClicked(!clicked);
    }
    
    return(

        <>
            <div className="nav">

                <h3 className="nav-logo"> Chal2 </h3>

                <div>
                    {clicked? <IoMdCloseCircleOutline className="nav-svg" onClick={changeState}/>
                    : < IoMdMenu className="nav-svg" onClick={changeState}/>  }

                    <ul className= {clicked ? "nav-menu-links active" :"nav-menu-links"}>

                        {menu.map((item)=>{

                            return(                       

                                <li key={item.name}> 
                                    <Link className="nav-links" to={item.path} onClick={changeState}>{item.name}</Link>
                                </li>
                                
                            )

                        })}

                    </ul>
                </div>


            </div>

        </>
    )
}

export default Nav