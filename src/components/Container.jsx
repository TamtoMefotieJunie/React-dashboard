import "../css/navbar.css";
import Contact from "./Contact";
import NavBar from "./NavBar";
import SideBar from "./sidebar";

function MainContainer(){
    return(
    <>  
   <div className="container">
        <div className="side-bar">
            <SideBar/>
            
        </div>
        <div className="content">
            <NavBar/>

        </div>
   </div>     
    </>
    );
} 
export default MainContainer;

