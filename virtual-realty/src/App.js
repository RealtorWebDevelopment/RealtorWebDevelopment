import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import RealtyHeader from './Components/realtyheader';
import RealtyFooter from './Components/realtyfooter';
import LandingPage from './Components/landingpage';
import ImageDisplay from './Components/imagedisplay';

import About from './Components/about';
import Contact from './Components/contact';

import LoginForm from './Components/loginForm';
import Register from './Components/registartionForm';


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
            <section>
             <div className="signin-Body">
                <Route exact path="/signin" component={LoginForm}/>
                
            </div>
             <div className="signup-Body">
                <Route exact path="/signup" component={Register}/>
                
            </div>
            </section>
           
            <div className="footer-display">

                <RealtyFooter/>
            </div>
        </div>
    );
}

export default App;
