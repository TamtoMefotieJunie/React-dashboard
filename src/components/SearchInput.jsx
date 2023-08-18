import "../css/navbar.css";
function Input({type,name,value,placeholder, onChange}){
    return(
    <>  
        <div className="search-input">
            <input type={type} name={name} value={value} placeholder={placeholder} onChange={() => onChange()} /> 
        </div>
    </>
    );
} 
export default Input ;