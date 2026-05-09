import Footer from "./Footer";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";

function Layout(){

    return(

        <div className="page-container">
            <Nav/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Layout