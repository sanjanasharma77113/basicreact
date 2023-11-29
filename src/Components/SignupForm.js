import React, { useState } from "react"
import validation from "./Validation";
class Validation {
  // Your Validation class code here
}




const SignupForm = () => {
  const [values,setValues]= useState({
     Fullname:"",
     email: "",
     password:"",

  });
  const[errors,setErrors] = useState({});

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });

  };

  const handleFormSubmit =(event) =>{
    event.preventDefault();
    setErrors(Validation(values));
  };
  return (
    <div className="app-wrapper">
      <div className="app-wrapper">
        <div>
          <h2 className="title">Create Account</h2>
        </div>
        <form  className="form-wrapper">
          <div className="name">
            <label className="label"> Full Name</label>
            <input className="input" type="text" name="fullname" value={values.fullname} onChange={handleChange}/>
            {errors.email&& <p className="error">{errors.FullName}</p>}
            
          </div>

          <div className="email">
            <label className="label"> Email</label>
            <input className="input" type="text" name="email" value={values.email} onChange={handleChange}/>
            {errors.email&& <p className="error">{errors.email}</p>}
          </div>

          <div className="password">
            <label className="label"> password</label>
            <input className="input" type="text" name="password" value={values.password} onChange={handleChange}/>
            {errors.email&& <p className="error">{errors.Password}</p>}
          </div>
<button className='submit'onClick={handleFormSubmit}>Sign Up</button>
        </form>
      </div>
    </div>
    
  )
}

export default SignupForm