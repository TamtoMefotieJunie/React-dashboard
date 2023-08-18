import "../css/navbar.css";
function FormButton({name,value}){
    return(
    <>  
        <button name={name}>{value}</button>    
    </>
    );
} 
export default FormButton;