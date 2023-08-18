import "../css/navbar.css";
import FormButton from "../components/Button";
import Input from "../components/input";
import { useForm } from "react-hook-form"; 


function Form({title,label2,label3}){
    
    const {register, handleSubmit,formState: {errors}} = useForm()
    return(
        <>  
            <form action="" method = "POST" onSubmit={handleSubmit(() => console.log("user registered successfully!"))}>
            
                <h1>{title}</h1>
                <br /><br />
                 <label htmlFor="email">{label2}</label>
                <Input 
                register={register}
               validationRules={
                    {
                        required: "Please Enter Your Email!",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
                            message: "Please Enter A Valid Email!"
                        }
                    }}
                     name="mail" type="text" placeholder="exx john@doe.com"/>
                <p className="error-message">{errors.email?.message}</p>

                <br />
                <label htmlFor="password">{label3}</label>
                <Input 
                    register={register}
                    validationRules={
                    {
                    required: "Please Enter Your Password",
                    minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long!"
                    }
                   }
                   } 
                 name="password" type="text" placeholder="********"
                />
                <p className="error-message">{errors.password?.message}</p> 
                
                <FormButton name="submit" value="Login" />
            </form>
           
        </>
    );
} 
export default Form;