import React, {  Component} from 'react';

import './realtyheader.css';

import './login.css';
 import 'whatwg-fetch';


class RegistrationForm  extends Component{
   
      constructor(props) {
        super();
        this.state = {
            email: '',
            password: '',
            firstname: '',
            lastname:'',
            zipcode:'',
            phonenumber:''
        };
        
    }
    onChange = e =>{
        this.setState({[e.target.name]: e.target.value});
        console.log(e.target.value);
    }
    
  onSubmit = e =>{
        e.preventDefault();
        const customer={
            email: this.state.email,
            password: this.state.password,
            firstname: this.state.firstname,
             lastname: this.state.lastname,
             zipcode: this.state.zipcode,
             phonenumber: this.state.phonenumber
           
           
        };
          
        
        fetch('http://localhost:8000/api/Register',{
            
            method: 'post',
            headers: {
                'content-type': 'application/json'
                
            },
            body: JSON.stringify(customer)     
            
        }).then(res => {
            
            console.log(res.json());
            if(res.statusCode===200 || res.statusCode===204){
                alert("Registered Successfully");
            }
        })
    }

    
    render(){
        
        return(
            <section>
                <div class="container-fluid">
            <div class="loginForm">
                
                              <h1 class="welcome">Welcome to smartechomes</h1>
                 <div class="col-sm-8 ml-auto mr-auto">
                    <form className="px-4 py-3" onSubmit={this.onSubmit}  id="registrationForm" >
                        <div className="mb-3">
                            <label for="exampleDropdownFormEmail1" className="form-label">Email address</label>
                            <input name="email" type="text" className="form-control" id="email" placeholder="email@example.com" onChange={this.onChange} value={this.state.email}/>
                              
                        </div>
                        <div class="mb-3">
                            <label for="exampleDropdownFormPassword1" class="form-label">Password</label>
                            <input name="password" type="password" class="form-control" id="password" placeholder="Password" onChange={this.onChange} value={this.state.password}/>
                             
                        </div>
            <div class="mb-3">
                            <label for="exampleDropdownFormPassword1" class="form-label">First Name</label>
                            <input name="firstname" type="text" class="form-control" id="fname" placeholder="FirstName" onChange={this.onChange} value={this.state.firstname}/>
                             
                        </div>
            <div class="mb-3">
                            <label for="exampleDropdownFormPassword1" class="form-label">Last Name</label>
                            <input name="lastname" type="text" class="form-control" id="lname" placeholder="Last Name" onChange={this.onChange} value={this.state.lastname}/>
                             
                        </div>
             <div class="mb-3">
                            <label for="exampleDropdownFormPassword1" class="form-label">Zip Code</label>
                            <input name="zipcode" type="text" class="form-control" id="Postal Code" placeholder="ZipCode" onChange={this.onChange} value={this.state.zipcode}/>
                             
                        </div>
                         <div class="mb-3">
                            <label for="exampleDropdownFormPassword1" class="form-label">Phone Number</label>
                            <input name="phonenumber" type="text" class="form-control" id="phone" placeholder="phone Number" onChange={this.onChange} value={this.state.phonenumber}/>
                             
                        </div>
                        
                            
                            <button type="submit" class="btn btn-primary">Register</button>
                    </form>
                    
            </div>
                    </div>
                </div>
                
                </section>

        );
    }
}
                  

export default RegistrationForm;