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
      var nameFormat=/^[a-zA-Z ]{2,30}$/;
           if (!(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            customer.email)))
        {
            alert("Valid Email is required. Please Enter Valid Email");
        }
       
      else if(!(nameFormat.test(customer.firstname)))
      {
           alert ("Please enter valid FirstName");
      }
      else if(!(nameFormat.test(customer.lastname)))
      {
           alert ("Please enter valid Last Name");
      }
      else if(!(/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(customer.zipcode)))
      {
           alert ("Please enter 5 digit or 5-4 digits Zip code");
      }
  else if(!(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(customer.phonenumber)))
      {
           alert ("Please enter Valid 10 digit phone number");
      }
      else{
      
        fetch('http://localhost:8000/api/Register',{
            
            method: 'post',
            headers: {
                'content-type': 'application/json'
                
            },
            body: JSON.stringify(customer)     
            
        }).then(res => {
            
            console.log(res.json());
            if(res.status===200 || res.status===204){
                
                alert("Registered Successfully. Login with Credentials or go back to Home");

                this.props.history.push("/");
            }
        })
      }
    }

    
    render(){
        
        return(
         <ul>
                <li className="nav-link">
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal2">
                        Register
        </button>
                        
                    
                     <div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Welcome to smartechomes</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        </div>
        <div class="modal-body">
                              <p> Signup to get more property updates, Agents information and more</p>
                    <form className="px-4 py-3" onSubmit={this.onSubmit}  id="registrationForm" >
                        <div className="mb-3">
                            
                            <input name="email" type="text" className="form-control" id="email" placeholder="Email Address" onChange={this.onChange} value={this.state.email} required/>
                              
                        </div>
                        <div class="mb-3">
                           
                            <input name="password" type="password" class="form-control" id="password" placeholder="Password" onChange={this.onChange} value={this.state.password} required/>
                             
                        </div>
            <div class="mb-3">
                            
                            <input name="firstname" type="text" class="form-control" id="fname" placeholder="First Name" onChange={this.onChange} value={this.state.firstname} required/>
                             
                        </div>
            <div class="mb-3">
                            
                            <input name="lastname" type="text" class="form-control" id="lname" placeholder="Last Name" onChange={this.onChange} value={this.state.lastname} required/>
                             
                        </div>
             <div class="mb-3">
                           
                            <input name="zipcode" type="text" class="form-control" id="Postal Code" placeholder="ZipCode" onChange={this.onChange} value={this.state.zipcode} required/>
                             
                        </div>
                         <div class="mb-3">
                            
                            <input name="phonenumber" type="text" class="form-control" id="phone" placeholder="Phone Number" onChange={this.onChange} value={this.state.phonenumber} required/>
                             
                        </div>
                        
                            
                            <button type="submit" class="btn btn-primary">Register</button>
                    </form>
                    
           </div>
                    
        </div>
                         </div>
                    </div>
                </li>
            
            </ul>
        );
    }
}
                  

export default RegistrationForm;