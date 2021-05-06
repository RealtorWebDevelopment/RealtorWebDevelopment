import React, {Component} from 'react';
import './projectdata.css';

//import image3 from '../Assets/person.jpg';
import image2 from '../Assets/company.jpg';
import ProjectData from './projectData';

class Investors extends Component{
    Constructor(props){

    }
   
        

    render()
    {
          
        return(
            <div class="realestate">

      <div class="TopDisplay2">

                  
                  <div class="section">
                    <div class="container-fluid about-us">
                      <div class="wrapper">
                  
                  	<h1>Projects @ SMARTECHOMES.com<sup>®</sup></h1>
            		
              </div>
            </div>
          </div>
        </div>
                
        <ul class="nav nav-pills mb-3 tabs" id="pills-tab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="pills-residential-tab" data-toggle="pill" href="#pills-residential" role="tab" aria-controls="pills-residential" aria-selected="true">Investors</a>
  </li>
    
</ul>
                
<div class="tab-content" id="pills-tabContent">
   <div class="tab-pane fade show active" id="pills-residential" role="tabpanel" aria-labelledby="pills-residential-tab">
    
       <div class="container portfolio-wrapper">
          <div className="row">
        <ProjectData className="col-sm-4" image1={image2} name="Investor1" description="Information about Investor, Address all details"/>
              <ProjectData className="col-sm-4" image1={image2} name="Investor 2" description="            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio."/>
              <ProjectData className="col-sm-4" image1={image2} name="Investor 3" description="            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio."/>
              </div>
      </div>
    

    </div>
  
 
            </div>
            <br></br>
        </div>
            
            
        
            );
    }
}

export default Investors;