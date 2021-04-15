import React from 'react';
import './realtyheader.css';
import logo from '../Assets/logo.jpg';


class RealtyHeader extends React.Component{
    constructor(props){
       super(props);
        
        this.state={
            email:'',
            password:''
        }
    }
    
changeHandler=(e) => {
    this.setState({[e.target.name]:e.target.value});
}
submitHandler =(e) => {
    e.preventDefault();
    console.log(this.state);
}
    render(){
       
        return(
            <div class="container-fluid">
                <nav class="navbar navbar-expand-lg navbar-toggleable-md navbar-light bg-faded">
                    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="homebar">
                        <a class="navbar-brand home" href="/">Home</a>
                    </div>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav ulist">
                            <li class="nav-item dropdown active">
                                <a class="nav-link" href="/realEstate">Real estate</a>

                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/investors">Investors</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown"  aria-expanded="false">Agents<span class="sr-only">(current)</span></a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a class="dropdown-item" href="example.com">Login</a>
                                </div>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link" href="/projects">Project</a>

                            </li>
                        </ul>


                        <ul class="navbar navbar-expand-sm">
                            <li  class="companyname">
                                <header className="App-header">
                                    <img src={logo} className="App-logo" alt="logo" width="150" />

                                </header>

                            </li>
                        </ul>
                        <ul class="navbar-nav ml-auto topnav ulist">
                            <li class="nav-item">
                                <a class="nav-link" href="/About">About us</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link" href="/Contact">Contact us
                                </a>

                            </li>

                            <li class="nav-link">
                                <li class="nav-item">
                                    <link to={'/login'} className="nav-link">Login</link>

                                </li>
                               
                                </li>
                            
                        </ul>

                    </div>
                </nav>
            </div>




        );
    }
}
export default RealtyHeader;
