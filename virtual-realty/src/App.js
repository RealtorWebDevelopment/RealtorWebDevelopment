import logo from './Assets/logo.jpg';
import './App.css';
import RealtyHeader from './Components/realtyheader';
import RealtyFooter from './Components/realtyfooter';
import LandingPage from './Components/landingpage';
import ImageDisplay from './Components/imagedisplay';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />

            </header>

            <div className="header-display">
                <RealtyHeader/>
            </div>
            <div className="display-image">
            
            <ImageDisplay/>
            </div>
            <div className="landingpage-Body">
            <LandingPage/>
            
            </div>
            
            
            
            
            
            
            <div className="footer-display">

                <RealtyFooter/>
            </div>
        </div>
    );
}

export default App;
