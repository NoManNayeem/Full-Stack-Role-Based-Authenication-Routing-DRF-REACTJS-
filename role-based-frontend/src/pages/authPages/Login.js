import { useState } from "react";
import { toast } from "react-toastify";
import "./LoginStyle.css";
import { LOGIN_API } from "../../store/API";



const Login = () => {
    const [loginForm, setLoginFrom]=useState(true);
    const [username, setUsername]=useState("");
    const [password, setPassword]=useState("");
    function signInForm(){
        setLoginFrom(!loginForm);
    }
    // handle login
    const handleAuth= async (e )=> {
        e.preventDefault()
        let response = await fetch(LOGIN_API, {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'username':username, 'password':password})
        })
        let data = await response.json()

        if(response.status === 200){
            // localStorage.setItem('accessToken', data.access);
            // localStorage.setItem("userType",data.userType);
            sessionStorage.setItem('accessToken', data.access);
            sessionStorage.setItem("userType",data.userType);
            toast.success("Log In Successful")
            window.location.href = "/";
            
        }else{
            toast.error('Something went wrong!')
        }
    }
    // handle login

    return (
        <>
            <div class="wrapper">
                <div class="logo">
                    <img src="https://www.freepnglogos.com/uploads/a-letter-logo-png-7.png" width="200" alt="Logo"/>
                </div>
                <div class="text-center mt-4 name">
                    Super Website
                </div>
                { loginForm &&
                    <div>
                        <form class="p-3 mt-3" onSubmit={handleAuth}>
                            <div class="form-field d-flex align-items-center">
                                <span class="far fa-user"></span>
                                <input type="text" name="userName" id="userName" placeholder="Username" onChange={e => setUsername(e.target.value)}/>
                            </div>
                            <div class="form-field d-flex align-items-center">
                                <span class="fas fa-key"></span>
                                <input type="password" name="password" id="pwd" placeholder="Password"onChange={e => setPassword(e.target.value)}/>
                            </div>
                            <button class="btn mt-3">Login</button>
                        </form>
                        <div class="text-center fs-6">
                            <p>Don't have an account? <a href="#" onClick={signInForm}>Sign up</a></p>
                        </div>
                    </div>
                }
                
                { !loginForm &&
                    <div>
                        <form class="p-3 mt-3">
                            <div class="form-field d-flex align-items-center">
                                <span class="far fa-user"></span>
                                <input type="text" name="userName" id="userName" placeholder="Username"/>
                            </div>
                            
                            <div class="form-field d-flex align-items-center">
                                <span class="far fa-user"></span>
                                <input type="email" name="email" id="email" placeholder="Email"/>
                            </div>
                            <div class="form-field d-flex align-items-center">
                                <span class="fas fa-key"></span>
                                <input type="password" name="password" id="pwd" placeholder="Password"/>
                            </div>
                            <button class="btn mt-3">Sign Up</button>
                        </form>
                        <div class="text-center fs-6">
                            <p>Already have an account? <a href="#" onClick={signInForm}>Log In</a></p>
                        </div>
                    </div>
                }
            </div>
        </>
      );
  };
  
  export default Login;