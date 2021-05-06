import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import RealtyHeader from './Components/realtyheader';
import RealtyFooter from './Components/realtyfooter';
import LandingPage from './Components/landingpage';
import ImageDisplay from './Components/imagedisplay';

import About from './Components/about';
import Contact from './Components/contact';


import CustomerLandingPage from './Components/customerlandingPage';
import RealEstate from './Components/realestate';
import Projects from './Components/projects';
import Investors from './Components/investors';
function App() {
    
              return (
        <div className="App">


<div className="header-display">
                      
                      <RealtyHeader/>
                      </div>
                       
            <div className="landingpage-Body">
                
                <Route exact path="/" component={ImageDisplay}/>
                <Route exact path="/" component={LandingPage}/>
                <Route exact path="/About" component={About}/>
                <Route exact path="/Contact" component={Contact}/>

            </div>

         
                <div className="customer-landingPage">  
                       <Route exact path="/home" render={CustomerLandingPage}/>
                                    </div>
              
                      <div className="realestate">
               
               <Route exact path="/realestate" component={RealEstate}/>
                                    </div>
                    <div className="projects">
               
               <Route exact path="/projects" component={Projects}/>
                                    </div>
                         <div className="investors">
               
               <Route exact path="/investors" component={Investors}/>
                                    </div>
            <div className="footer-display">

                <RealtyFooter/>
            </div>
        </div>
    );
}

export default App;
