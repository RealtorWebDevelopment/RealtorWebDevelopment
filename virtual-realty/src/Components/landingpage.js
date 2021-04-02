import React, {Component} from 'react';
import './realtyheader.css';
import logo from '../Assets/logo.jpg';
import realestatelogo from '../Assets/RealEstateIcon.png';
import Investorlogo from '../Assets/InvestoIcon.png';
import Agentslogo from '../Assets/AgentsIcon.png';
import Projectslogo from '../Assets/ProjectsIcon2.png';


class LandingPage extends Component{
    Constructor(props){

    }
    render()
    {
        return(

            <div className="infocontainer">
                <div className="row">
                    <div className="col-sm-12 col-md-3">
                        <div className="box">
                            <label>Real estate</label>
                            <img src={realestatelogo} height="80" width="80"/>
                            <p>Every person who invests in well-selected real estate
                                in a growing section of a prosperous community adopts. </p>

                        </div>
                    </div>
                    <div class="col-sm-12 col-md-3">
                        <div class="box">
                            <label>Investors</label>
                            <img src={Investorlogo} height="80" width="80"/>
                            <p>Investors are The individual investor should act consistently as an investor and not as a speculator." — Ben Graham</p>

                        </div>

                    </div>
                    <div class="col-sm-12 col-md-3">
                        <div class=" box">
                            <label>Agents</label>
                            <br/>
                            <img src={Agentslogo} height="80" width="80"/>
                            <p>Our agents pride themselves in having a attitude. Find an agent and discover why that makes a huge difference.</p>

                        </div>

                    </div>
                    <div class="col-sm-12 col-lg-3">
                        <div class="box">
                            <label>Projects</label><br/>
                            <img src={Projectslogo} height="80" width="80"/>
                            <p>Construction is a process which consists of building infrastructure. It includes all work and materials required. </p>

                        </div>

                    </div>
                </div>
            </div>


                    );
                    }
                    }

                    export default LandingPage;