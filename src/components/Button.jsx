import "../css/navbar.css";
import "../css/modal.css";
function FormButton({name,value}){
    return(
    <>  
        <button name={name}>{value}</button>    
    </>
    );
} 
export default FormButton;