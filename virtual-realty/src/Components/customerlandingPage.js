import React from 'react';
//import {Route} from 'react-router-dom';
import '../App.css';
import RealtyHeader from './realtyheader';
import RealtyFooter from './realtyfooter';

import './realtyheader.css';
//import logo from '../Assets/logo.jpg';


function CustomerLandingPage() {
    
              return (
                  <div class="landingpage">
               
                        <ul>
                            <li className="nav-item dropdown">
                                <i class="far fa-user"></i>
                                <a className="nav-link" href="/Contact">customerfname
                                </a>

                            </li>
                                                                                             
                    <li>
                         <a href="#" className="btn btn-primary">see more </a>
                 
                            
                            </li>      
                            
                        </ul>
                                      
                        
                  
                      </div>

        );
    }

export default CustomerLandingPage;

  