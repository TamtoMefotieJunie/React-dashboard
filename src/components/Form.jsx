import "../css/navbar.css";
import { MTNPhoneNumber, OrangePhoneNumber } from "../util/Validation";
import FormButton from "./Button";
import Input from "..components/Input";
import { useForm } from "react-hook-form"; 


function RegisterForm({title,label1,label2,label3,label4}){
    
    const {register, handleSubmit,formState: {errors}} = useForm()
    return(
        <>  
            <form action="" method = "POST" onSubmit={handleSubmit(() => console.log("user registered successfully!"))}>
            
                <h1>{title}</h1>
                <br /><br />
                <label htmlFor="name">{label1}</label>
                <Input 
                register={register}
                validationRules={
                    {
                    required: "Please Enter Your Name",
                    minLength: {
                    value: 4,
                    message: "Name must be at least 4 characters long!"
                    }
                }
                }
                name="name" type="text" placeholder="exx john doe"/>
                <p className="error-message">{errors.name?.message}</p>
                
                <br />
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

                <br />
                <label htmlFor="telephone">{label4}</label>
                <Input 
                    register={register}
                    validationRules={
                    {
                    required: "Please Enter Your phone number",
                    // pattern: {
                    // value: /^6(5|7|8|9)[0-9]{7}$/,
                    // message: "Phone number must be at least 8 characters long and start with 6!"
                    // },
                    validate: {
                        validateNumber: (tel) => (MTNPhoneNumber(tel) || OrangePhoneNumber(tel)) == true || "Your phone number is not a Cameroon number"  }
                   }
                   } 
                 name="tel" 
                 type="telephone" 
                 placeholder=""
                
                />
                <p className="error-message">{errors.tel?.message}</p> 

                <br />

                <FormButton name="submit" value="Register"  />
                
            </form>
           
        </>
    );
} 
export default RegisterForm;