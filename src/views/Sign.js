import React from "react";
import'./Sign.css'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaApple } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa"; 
import { FaFacebookF } from "react-icons/fa"; 


const Sign = () =>{
    return (
        <div className="wrapper"> 
        
            <div className="box1">
                <h1>Y N A P</h1>
                <h2 class="title"> Sign In </h2>
                    <div className="input-box">
                        <input type="text" placeholder="Username" required/>
                        <FaUser className="icon" />
                    </div>

                    <div className="input-box">
                        <input type="password" placeholder="Password" required />
                        <FaLock className="icon"/>
                    </div>

                    <div className="remember-forgot">
                        <label> <input type="checkbox" /> Remember Me </label>
                        <a href="#"> Forgot Password? </a>
                    </div>

                    <button type ="submit"> Register</button>

                    <div className="si-logo"> 
                        <h4 class="title"> OR </h4>
                    </div>
                    
                    <div className="si-logo1">
                        <h5> sign in with </h5>
                    </div>
                    <div className="si-logo2">
                       <a href=""> <FaApple className="icon"/></a>
                       <a href=""> <FaGoogle className="icon"/></a>
                       <a href=""> <FaFacebookF className="icon"/></a>
                    </div>

                    <div className="register-link">
                        <p> Don't Have an account? <a href="#"> Create an account </a></p>
                    </div>
            </div>
            <div className="box2">
            
         </div>   
            </div>

          

            

             
     );
     
};




export default Sign