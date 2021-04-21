import React, {Component} from 'react';
import './realtyheader.css';
import logo from '../Assets/logo.jpg';

class RealtyFooter extends Component{
    Constructor(props){

    }
    render(){
        return(
            <footer className="page-footer font-small stylish-color-dark pt-4 footsy">

                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                        <div className="col-md-4 mx-auto">
                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">SMARTECHOMES</h5>
                            <img className="img-fluid" src={logo} alt="Company logo" height="170" width="170"/>
                        </div>
                        <hr className="clearfix w-100 d-md-none"/>
                        <div className="col-md-2 mx-auto">
                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Real Estate</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="/realEstate/residential">Residential</a>
                                </li>
                                <li>
                                    <a href="/realEstate/Industrial">Industrial</a>
                                </li>
                                <li>
                                    <a href="/realEstate">Commercial</a>
                                </li>
                            </ul>
                        </div>

                        <hr className="clearfix w-100 d-md-none"/>
                        <div className="col-md-2 mx-auto">
                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Project</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="/projects/current">Current</a>
                                </li>
                                <li>
                                    <a href="/projects/upcoming">Upcoming</a>
                                </li>

                            </ul>
                        </div>
                        <hr className="clearfix w-100 d-md-none"/>


                        <div className="col-md-2 mx-auto">
                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">About </h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="/About">Company</a>
                                </li>
                                <li>
                                    <a href="#!">Investors</a>
                                </li>
                                <li>
                                    <a href="#!">Agents</a>
                                </li>

                            </ul>

                        </div>
                        <div className="col-md-2 mx-auto">
                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Contact us</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="/Contact">Email <i className="fab fa-google-plus-g fa-xs"> </i></a>
                                </li>
                                <li>
                                    <a href="#!">Facebook <i className="fa fa-facebook-official fa-xs" aria-hidden="true"></i> </a>
                                </li>
                                <li>
                                    <a href="#!">Instagram <i className="fa fa-instagram fa-xs" aria-hidden="true"></i></a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

                <hr/>

                <ul className="list-unstyled list-inline text-center">

                    <li className="list-inline-item">
                        <a className="btn-floating btn-gplus mx-1" href="https://www.instagram.com/accounts/login/">
                            <i className="fa fa-instagram fa-xs" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="btn-floating btn-li mx-1" href="https://in.linkedin.com/">
                            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="btn-floating btn-dribbble mx-1" href="https://www.facebook.com/">
                            <i className="fa fa-facebook-official" aria-hidden="true"></i></a>
                    </li>
                </ul>



                <div className="footer-copyright text-center py-3">© 2020 Copyright:
                    <a href="https://mdbootstrap.com/"> SMARTECHOMES</a>
                </div>
            </footer>
        );
    }
}

export default RealtyFooter;