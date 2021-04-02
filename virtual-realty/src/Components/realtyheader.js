import React, {Component} from 'react';
import './realtyheader.css';
import logo from '../Assets/logo.jpg';

class RealtyHeader extends Component{
    Constructor(props){

    }
    render(){
        return(
            <div class="container-fluid">
                <nav class="navbar navbar-expand-lg navbar-toggleable-md navbar-light bg-faded">
                    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="homebar">
                        <a class="navbar-brand home" href="index.html">Home</a>
                    </div>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav ulist">
                            <li class="nav-item dropdown active">
                                <a class="nav-link" href="realEstate.html">Real estate</a>

                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Investors</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Agents<span class="sr-only">(current)</span></a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a class="dropdown-item" href="#">Login</a>
                                </div>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link" href="">Project</a>

                            </li>
                        </ul>


                        <ul class="navbar navbar-expand-sm">
                            <li  class="companyname">
                                <img class="img-fluid" src={logo} width="120"/>
                            </li>
                        </ul>
                        <ul class="navbar-nav ml-auto topnav ulist">
                            <li class="nav-item">
                                <a class="nav-link" href="aboutus.html">About us</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link" href="#">Contact us
                                </a>

                            </li>

                            <li class="nav-link">
                                <button class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Sign in/Sign Up</button>

                                <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-lg">
                                        <div class="modal-content">
                                            <div class="container-fluid mt-4 mb-">
                                                <div class="col-sm-8 ml-auto mr-auto">

                                                    <h1 class="welcome">Welcome to smartechomes</h1>
                                                    <ul class="nav nav-pills nav-fill mb-1" id="pills-tab" role="tablist">
                                                        <li class="nav-item"> <a class="nav-link active" id="pills-signin-tab" data-toggle="pill" href="#pills-signin" role="tab" aria-controls="pills-signin" aria-selected="true">Sign In</a> </li>
                                                        <li class="nav-item"> <a class="nav-link" id="pills-signup-tab" data-toggle="pill" href="#pills-signup" role="tab" aria-controls="pills-signup" aria-selected="false">New account</a> </li>
                                                    </ul>
                                                    <div class="tab-content" id="pills-tabContent">
                                                        <div class="tab-pane fade show active" id="pills-signin" role="tabpanel" aria-labelledby="pills-signin-tab">
                                                            <div class="col-sm-12 border border-primary shadow rounded pt-2">

                                                                <form method="post" id="singninFrom" name="LoginForm">
                                                                    <div class="form-group">
                                                                        <label class="font-weight-bold">Email <span class="text-danger">*</span></label>
                                                                        <input type="email" name="email" id="email" class="form-control" onchange="ValidateEmail(document.LoginForm.email)" placeholder="Enter Email" required/>
                                                                    </div>
                                                                    <div class="form-group">
                                                                        <label class="font-weight-bold">Password <span class="text-danger">*</span></label>
                                                                        <input type="password" name="password" id="password" class="form-control" placeholder="Enter password" required/>
                                                                    </div>
                                                                    <div class="form-group">
                                                                        <div class="form-group">
                                                                            <input type="submit" name="submit" value="Sign In" onclick="CustomerPage()" class="btn btn-block btn-primary"/>
                                                                        </div>

                                                                        <div class="row">

                                                                            <div class="col text-right"> <a href="#" data-toggle="modal" data-target="#forgotPass">Forgot Password?</a> </div>
                                                                        </div>
                                                                    </div>
                                                                    <hr/>

                                                                </form>
                                                                <button class="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i class="fa fa-google" aria-hidden="true"></i> continue with Google</button>
                                                                <button class="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i class="fa fa-facebook-official" aria-hidden="true"></i> continue with Facebook</button>
                                                                <button class="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i class="fa fa-apple" aria-hidden="true"></i> continue with Google</button>
                                                            </div>
                                                        </div>
                                                        <div class="tab-pane fade" id="pills-signup" role="tabpanel" aria-labelledby="pills-signup-tab">
                                                            <div class="col-sm-12 border border-primary shadow rounded pt-2">
                                                                <form method="post" id="singnupFrom">
                                                                    <div class="form-group">
                                                                        <label class="font-weight-bold">Email <span class="text-danger">*</span></label>
                                                                        <input type="email" name="signupemail" id="signupemail" class="form-control" placeholder="Enter valid email" required/>
                                                                    </div>
                                                                    <div class="form-group">
                                                                        <label class="font-weight-bold">Password <span class="text-danger">*</span></label>
                                                                        <input type="text" name="signupusername" id="signupusername" class="form-control" placeholder="Choose your user name" required/>
                                                                        <div class="text-danger"><em></em></div>
                                                                    </div>
                                                                    <label><input type="checkbox" name="signupcondition" id="signupcondition" required/> I am a landlord industry professional </label>
                                                                    <div class="form-group">
                                                                        <input type="submit" name="submit" value="Submit" class="btn btn-block btn-primary"/>
                                                                    </div>
                                                                    <p>By Submitting,I accept smartechomes<a href="#">terms of use</a></p>
                                                                    <h3>Professional's Inforamtion</h3>
                                                                    <div class="form-group">
                                                                        <label class="font-weight-bold">Select your category <span class="text-danger">*</span></label>
                                                                        <div class="input-group mb-3">
                                                                            <select class="custom-select" id="inputGroupSelect02">
                                                                                <option selected>select your category</option>
                                                                                <option value="1">One</option>
                                                                                <option value="2">Two</option>
                                                                                <option value="3">Three</option>
                                                                            </select>

                                                                        </div>


                                                                        <div class="form-row">
                                                                            <div class="col-md-6 form-group">
                                                                                <label>First name </label>
                                                                                <input type="text" class="form-control" placeholder=""/>
                                                                            </div> 
                                                                            <div class="col-md-6 form-group">
                                                                                <label>Last name</label>
                                                                                <input type="text" class="form-control" placeholder=" "/>
                                                                            </div> 
                                                                            <div class="form-group">
                                                                                <div class="col-md-6">
                                                                                    <label class="font-weight-bold">Zip/Postal</label>
                                                                                    <input type="text" name="signupphone" id="signupphone" class="form-control" placeholder="Zip/Postal"/>
                                                                                </div>
                                                                            </div>
                                                                            <div class="row">
                                                                                <div class="col-sm-2 phone">
                                                                                    <label>Phone Number</label>
                                                                                    <input type="number" placeholder="555-555-5555"/>
                                                                                </div>

                                                                            </div>

                                                                            <div class="form-group">
                                                                                <input type="submit" name="signupsubmit" value="Continue" class="btn btn-block btn-primary"/>
                                                                            </div>

                                                                        </div>
                                                                    </div>

                                                                </form>

                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>


        );
    }
}
export default RealtyHeader;
