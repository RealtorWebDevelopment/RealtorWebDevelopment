import React, {Component} from 'react';
//import {useHistory} from 'react-router-dom';
import './realtyheader.css';
import 'whatwg-fetch';
import './login.css';





class LoginForm  extends Component{
    constructor(props) {
        super();
        this.state = {
            email: '',
            password: ''
        };

    }


    onChange = e =>{
        this.setState({[e.target.name]: e.target.value});
        console.log(e.target.value);
    }
    
   
    onSubmit = e =>{
        e.preventDefault();

        const user={
            email: this.state.email,
            password: this.state.password
        };
        
        if (!(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            user.email)))
        {
            alert("Please Enter Valid Email");
        }
        
else{
        fetch('http://localhost:8000/api/RealtorLogin',{

            method: 'post',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(user)     

        }).then(res => {
                console.log(res.status);
            if(res.status===200){
                alert("Loggedin Successfully.");
            }
            else{
                alert("Invalid email/passowrd. Please Register by using signup button");
                
            }
//            this.props.history.push("/");
        })
}
        
    }






    render(){
        return(
           <ul>
     
                <li className="nav-link">
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                        Sign In
        </button>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Welcome to SmarTecHomes</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        </div>
        <div class="modal-body">
            <p>Login to your Account </p>
            <form  className="px-4 py-3" onSubmit={this.onSubmit} id="loginForm"  >
                <div className="mb-3">
                   
        <input name="email" type="text" className="form-control" id="email" placeholder="Email Address" onChange={this.onChange} value={this.state.email}  required/>

            </div>
        <div className="mb-3">
            
        <input name="password" type="password" className="form-control" id="password"  placeholder="Password" onChange={this.onChange} value={this.state.password} required/>
          
            <a className="forgotPassword" href="/forgotpassword">Forgot password?</a>
        </div>
       
        <button type="submit" className="btn btn-primary" >Log In</button>
        </form>
   
            
       

            
                    </div></div>
        </div>
        </div>
          </li>
               
            </ul>
        );

    }
}
export default LoginForm;