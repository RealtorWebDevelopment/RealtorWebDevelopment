import React, {Component} from 'react';
import './realtyheader.css';
import logo from '../Assets/logo.jpg';
import realestatelogo from '../Assets/RealEstateIcon.png';
import Investorlogo from '../Assets/InvestoIcon.png';
import Agentslogo from '../Assets/AgentsIcon.png';
import Projectslogo from '../Assets/ProjectsIcon2.png';


class ImageDisplay extends Component{
    Constructor(props){

    }
    render()
    {
        return(

            <div className="container">
                <div className="sectionsearch">
                    <div className="row">
                        <div className="col-sm">

                        </div>
                        <div className="col-sm">
                            <input type="text" name="search-content" placeholder="Address"/>
                        </div>
                        <div className="col-sm">
                            <input type="text" name="search-content" placeholder="Zipcode"/>
                        </div>
                        <div className="col-sm">
                            <input type="text" name="search-content" placeholder="Area"/>
                        </div>
                        <div className="col-sm">
                            <input type="text" name="search-content" placeholder="State"/>
                        </div>
                        <div className="col-sm">
                            <a href="#!" class="btn btn-danger btn-rounded">Search</a>
                        </div>
                    </div>
                </div>
            </div>



        );
    }
}
export default ImageDisplay;