import React, {Component} from 'react';

import './realtyheader.css';
import logo from '../Assets/logo.jpg';



class RealtyHeader extends Component{
    Constructor(props){

    }
    render(){
        return(
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-toggleable-md navbar-light bg-faded">
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="homebar">
                        <a className="navbar-brand home" href="/">Home</a>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ulist">
                            <li className="nav-item dropdown active">
                                <a className="nav-link" href="/realEstate">Real estate</a>

                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/investors">Investors</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown"  aria-expanded="false">Agents<span className="sr-only">(current)</span></a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="example.com">Login</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="/projects">Project</a>

                            </li>
                        </ul>


                        <ul className="navbar navbar-expand-sm">
                            <li  className="companyname">
                                <header className="App-header">
                                    <img src={logo} className="App-logo" alt="logo" width="150" />

                                </header>

                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto topnav ulist">
                            <li className="nav-item">
                                <a className="nav-link" href="/About">About us</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="/Contact">Contact us
                                </a>

                            </li>

                            <li className="nav-link">
                                <a className="btn btn-primary" href="/signin" >Sign In</a>
                             
 <a className="btn btn-primary" href="/signup">Sign Up</a>
                              
                                       
                            </li>
                                                                  
                            
                        </ul>
                                 
                    
                            </div>
                </nav>   
            </div>


        );
    }
}
export default RealtyHeader;
