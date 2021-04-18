import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

import './realtyheader.css';

import './login.css';


function LoginForm(){
    
        const [email,setEmail]=useState("");
        const [password,setPassword]=useState("");
    const history=useHistory();
    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            history.push("/add")
            
        }
    })
   
   async function loginForm_submit(){
       console.warn(email,password);
       let item={email,password};
       let result=await fetch("http://localhost:3003/api/Realtorlogin",{
           method: 'POST',
           headers:{
               "content-type":"application/json",
               "Accept": "application/json"
               
           },
           body: JSON.stringify(item)
           
       });
       result= await result.json();
       localStorage.setItem("user-info",JSON.stringify(result));
       history.push("/add")
   }
    
        

        
        return(
             
            <section>
                <div class="container-fluid">
            <div class="loginForm">
                
                              <h1 class="welcome">Welcome to smartechomes</h1>
                 <div class="col-sm-8 ml-auto mr-auto">
                    <form class="px-4 py-3" method="post"  id="loginForm" >
                        <div class="mb-3">
                            <label for="exampleDropdownFormEmail1" class="form-label">Email address</label>
                            <input type="text" class="form-control" id="email" placeholder="email@example.com" onChange={(e)=>setEmail(e.target.value)}  />
                        </div>
                        <div class="mb-3">
                            <label for="exampleDropdownFormPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
                             <a class="forgotPassword" href="/forgotpassword">Forgot password?</a>
                        </div>
                        <div class="mb-3">
                            <div class="form-check" >
                                <div class="row">
                                    <div class="col-3">
                                <input type="checkbox"  id="dropdownCheck"/>
                                        </div>
                                    <div class="col-6">
                                <label class="form-check-label" for="dropdownCheck">
                                    Remember me
                                </label>
                                    </div>
                                    </div>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary" onclick={loginForm_submit} >Sign in</button>
                    </form>
                    <div class="dropdown-divider"></div>
                     <a class="dropdown-item" href="/register" >New around here?<br/><button class="btn btn-primary">Sign up</button></a>
                   
                </div>
            </div>
                    </div>
                </section>

        );
    
}
export default LoginForm;