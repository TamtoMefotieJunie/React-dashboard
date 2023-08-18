import "../css/navbar.css";
function Input({type,name,value,placeholder, onChange, register, validationRules}){
   
    return(
    <>  
        <div className="form-input">
            <input type={type}
                name={name} 
                {
                    ...register(name, validationRules)
                }
                value={value} 
                placeholder={placeholder} 
                // onChange={() => onChange()}
                
            
            /> 
        </div>
    </>
    );
} 
export default Input ;