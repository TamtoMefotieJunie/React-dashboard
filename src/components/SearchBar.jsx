import "../css/navbar.css";
// import { FaBars, FaSearch } from "react-icons/fa";
function SearchBar(){
    return(
    <>  
    <div class="search-bar">
                
                <div class="search">
                    <span><FaBars As Menu classname=" face2"/></span>
                    <div class="search-right">
                        <FaSearch classname="icon4 fa fa-search"/>
                        
                        <Input name="name" type="text" placeholder="Search"/>
                    </div>
                </div>
            </div>
        
    </>
    );
} 
export default SearchBar;

