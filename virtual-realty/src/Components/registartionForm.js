import React, {  useState, useEffect, Component} from 'react';

import './realtyheader.css';

import './login.css';


function RegistrationForm (){
   
         const [email,setEmail]=useState("");
     const [password,setPassword]=useState("");
     const [firstname,setFirstname]=useState("");
     const [lastname,setLastname]=useState("");
     const [zipcode,setZipcode]=useState("");
     const [phonenumber,setPhonenumber]=useState("");
       function Form_submit()
    {
        console.warn(email,password,firstname,lastname,zipcode,phonenumber);
    }
        return(
            <section>
                <div class="container-fluid">
            <div class="loginForm">
                
                              <h1 class="welcome">Welcome to smartechomes</h1>
                 <div class="col-sm-8 ml-auto mr-auto">
                    <form class="px-4 py-3" method="post" id="registerForm">
                        <div class="mb-3">
                            <label for="exampleDropdownFormEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="email" placeholder="email@example.com" onChange={(e)=>setEmail(e.target.value)} value={email}/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleDropdownFormPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
                             
                        </div>
            <div class="mb-3">
                            <label for="exampleDropdownFormPassword1" class="form-label">First Name</label>
                            <input type="text" class="form-control" id="fname" placeholder="FirstName" onChange={(e)=>setFirstname(e.target.value)} value={firstname}/>
                             
                        </div>
            <div class="mb-3">
                            <label for="exampleDropdownFormPassword1" class="form-label">Last Name</label>
                            <input type="text" class="form-control" id="lname" placeholder="Last Name" onChange={(e)=>setLastname(e.target.value)} value={lastname}/>
                             
                        </div>
             <div class="mb-3">
                            <label for="exampleDropdownFormPassword1" class="form-label">Zip Code</label>
                            <input type="text" class="form-control" id="Postal Code" placeholder="ZipCode" onChange={(e)=>setZipcode(e.target.value)} value={zipcode}/>
                             
                        </div>
                         <div class="mb-3">
                            <label for="exampleDropdownFormPassword1" class="form-label">Phone Number</label>
                            <input type="text" class="form-control" id="phone" placeholder="phone Number" onChange={(e)=>setPhonenumber(e.target.value)} value={phonenumber}/>
                             
                        </div>
                        
                            
                            <button type="submit" class="btn btn-primary" onclick={Form_submit()}>Register</button>
                    </form>
                    
            </div>
                    </div>
                </div>
                
                </section>

        );
    }
                  

export default RegistrationForm;