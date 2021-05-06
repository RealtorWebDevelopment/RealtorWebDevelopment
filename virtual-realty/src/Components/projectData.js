import React, {Component} from 'react';
import './realtyheader.css';
import './about.css';
import './projectdata.css';
//import location from '../Assets/Locationicon.jpg';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ImageCarousel from './imageCarousel';

class ProjectData extends Component{
    Constructor(props){

    }
    render()
    {
        return(
             
        <div className="card project">
            
            <img className="card-img-top" src={this.props.image1} alt="ImageDisplay"></img>
                <div className="card-block">
                <h4 className="card-title">{this.props.name} </h4>
                    <p cassName="card-text"> {this.props.description}</p>
                    <a href="#" className="btn btn-primary">see more </a>
              
                    
                </div>
            </div>
    );
    }
}

export default ProjectData;