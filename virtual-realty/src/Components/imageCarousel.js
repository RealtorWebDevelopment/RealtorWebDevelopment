import React, {Component} from 'react';
import './realtyheader.css';
import './about.css';
import './projectdata.css';
//import location from '../Assets/Locationicon.jpg';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class ImageCarousel extends Component{
    Constructor(props){

    }
    render()
    {
        return(
   
                    
        
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
 
  <ol class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
  </ol>

 
  <div class="carousel-inner">
    <div class="item active">
      <img src="/Assets/Aboutus.jpg" alt="Los Angeles"/>
    </div>

    <div class="item">
      <img src="/Assets/company.jpg" alt="Chicago"/>
    </div>

    <div class="item">
      <img src="/Assets/conatct.jpg" alt="New York"/>
    </div>
  </div>

 
  <a class="left carousel-control" href="#myCarousel" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#myCarousel" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
     
            );
    }
}
export default ImageCarousel;

