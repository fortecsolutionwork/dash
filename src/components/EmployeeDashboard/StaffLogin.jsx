import React, { useState } from 'react'
import Logo from '../../images/logo.svg'
import { Link } from "react-router-dom";

const StaffLogin = () =>{
    const [item, setItem] = useState({
        email : "",
        password : "",
    })

    const inputEvent = (event) =>{
        const { name, value} = event.target;

        setItem((preValue) =>{
            return{
                ...preValue,
                [name] : value,
            }
        })
    }
     
    const submitForm = (event) =>{
         event.preventDefault();
         
    }

  return (
    <>
       <div className="login_wrapper">
           <form action="">
              <div className="logo"> <img src={Logo} alt="" /></div>
              <h2>Staff Login</h2>
              <p>Use the details provided to you for the login.<br/>If you haven't recieved the details <a href="">contact us</a></p>
               <div className="form-wrapper">
              <div className="form-group">
                  <input type="email" name="email" id="email" placeholder='Email Address' onChange={inputEvent} value={item.email}/>
              </div>
              <div className="form-group">
                  <input type="password" name="password" id="password" placeholder='Password' onChange={inputEvent} value={item.password}/>
              </div>
              <p><a href="" className='forgot_link'>Forgot email or password?</a></p>
              <Link to="/AllOrders"><input type="submit" value="Sign in" className='theme_btn mt-4' /></Link>
              </div>
              <p className='text-center mt-5'>Or sign in with</p>
              <div className="social_login mt-4">
                  <button><i className='fab fa-google'></i> Google</button>
                  <button><i className='fab fa-apple'></i>Apple ID</button>
                  <button><i className='fab fa-facebook'></i>Facebook</button>
              </div>
           </form>
           
          
       </div>
    </>
  )
}

export default StaffLogin