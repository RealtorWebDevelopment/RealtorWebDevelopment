import React, {Component} from 'react';
import {useHistory} from 'react-router-dom';
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
//    const history=useHistory(){
//        if(res.status===200){
//            history.push('/');
//        }
//    }
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
          
        
        fetch('http://localhost:8000/api/RealtorLogin',{
            
            method: 'post',
            headers: {
                'content-type': 'application/json'
                
            },
            body: JSON.stringify(user)     
            
        }).then(res => {
            
            console.log(res.json())
            
        })
    }

    
    

 
    
render(){
    return(

    <section>
        <div className="container-fluid">
            <div className="loginForm">
                <h1 className="welcome">Welcome to smartechomes</h1>
                <div className="col-sm-8 ml-auto mr-auto">
                    <form className="px-4 py-3" onSubmit={this.onSubmit} id="loginForm" >
                        <div className="mb-3">
                            <label for="exampleDropdownFormEmail1" className="form-label">Email address</label>
                            <input name="email" type="text" className="form-control" id="email" placeholder="email@example.com" onChange={this.onChange} value={this.state.email}/>
                              
                        </div>
                        <div className="mb-3">
                            <label for="exampleDropdownFormPassword1" className="form-label">Password</label>
                            <input name="password" type="password" className="form-control" id="password"  placeholder="password" onChange={this.onChange} value={this.state.password}/>
                            <a className="forgotPassword" href="/forgotpassword">Forgot password?</a>
                        </div>
                        <div className="mb-3">
                            <div className="form-check" >
                                <div className="row">
                                    <div className="col-3">
                                        <input type="checkbox"  id="dropdownCheck"/>
                                    </div>
                                    <div className="col-6">
                                        <label className="form-check-label" for="dropdownCheck">
                                            Remember me
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary" >Sign in</button>
                    </form>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="/signup" >New around here?<br/><button className="btn btn-primary">Sign up</button></a>

                </div>
            </div>
        </div>
    </section>

    );

}
}
export default LoginForm;