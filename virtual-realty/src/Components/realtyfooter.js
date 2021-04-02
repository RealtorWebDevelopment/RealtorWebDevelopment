import React, {Component} from 'react';
import './realtyheader.css';
import logo from '../Assets/logo.jpg';
class RealtyFooter extends Component{
    Constructor(props){

    }
    render(){
        return(
            <footer class="page-footer font-small stylish-color-dark pt-4 footsy">

                <div class="container-fluid text-center text-md-left">
                    <div class="row">
                        <div class="col-md-4 mx-auto">
                            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">SMARTECHOMES</h5>
                            <img class="img-fluid" src={logo} height="170" width="170"/>
                        </div>
                        <hr class="clearfix w-100 d-md-none"/>
                        <div class="col-md-2 mx-auto">
                            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Real Estate</h5>
                            <ul class="list-unstyled">
                                <li>
                                    <a href="realEstate.html">Residential</a>
                                </li>
                                <li>
                                    <a href="realEstate.html">Industrial</a>
                                </li>
                                <li>
                                    <a href="realEstate.html">Commercial</a>
                                </li>
                            </ul>
                        </div>

                        <hr class="clearfix w-100 d-md-none"/>
                        <div class="col-md-2 mx-auto">
                            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Project</h5>
                            <ul class="list-unstyled">
                                <li>
                                    <a href="#!">Current</a>
                                </li>
                                <li>
                                    <a href="#!">Upcoming</a>
                                </li>

                            </ul>
                        </div>
                        <hr class="clearfix w-100 d-md-none"/>


                        <div class="col-md-2 mx-auto">
                            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">About </h5>
                            <ul class="list-unstyled">
                                <li>
                                    <a href="aboutus.html">Company</a>
                                </li>
                                <li>
                                    <a href="#!">Investors</a>
                                </li>
                                <li>
                                    <a href="#!">Agents</a>
                                </li>

                            </ul>

                        </div>
                        <div class="col-md-2 mx-auto">
                            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Contact us</h5>
                            <ul class="list-unstyled">
                                <li>
                                    <a href="contactus.html">Email <i class="fab fa-google-plus-g fa-xs"> </i></a>
                                </li>
                                <li>
                                    <a href="#!">Facebook <i class="fa fa-facebook-official fa-xs" aria-hidden="true"></i> </a>
                                </li>
                                <li>
                                    <a href="#!">Instagram <i class="fa fa-instagram fa-xs" aria-hidden="true"></i></a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

                <hr/>

                <ul class="list-unstyled list-inline text-center">

                    <li class="list-inline-item">
                        <a class="btn-floating btn-gplus mx-1" href="https://www.instagram.com/accounts/login/">
                            <i class="fa fa-instagram fa-xs" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a class="btn-floating btn-li mx-1" href="https://in.linkedin.com/">
                            <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a class="btn-floating btn-dribbble mx-1" href="https://www.facebook.com/">
                            <i class="fa fa-facebook-official" aria-hidden="true"></i></a>
                    </li>
                </ul>



                <div class="footer-copyright text-center py-3">© 2020 Copyright:
                    <a href="https://mdbootstrap.com/"> SMARTECHOMES</a>
                </div>
            </footer>
        );
    }
}

export default RealtyFooter;