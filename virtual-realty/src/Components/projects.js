import React, {Component} from 'react';
import './projectdata.css';


import image1 from '../Assets/RealEstates/Image5.jpg';
import ProjectData from './projectData';

class Projects extends Component{
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
    <a class="nav-link active" id="pills-residential-tab" data-toggle="pill" href="#pills-residential" role="tab" aria-controls="pills-residential" aria-selected="true">Current</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="pills-commercial-tab" data-toggle="pill" href="#pills-commercial" role="tab" aria-controls="pills-commercial" aria-selected="false">Upcoming</a>
  </li>
  
</ul>
                
<div class="tab-content" id="pills-tabContent">
   <div class="tab-pane fade show active" id="pills-residential" role="tabpanel" aria-labelledby="pills-residential-tab">
    
       <div class="container portfolio-wrapper">
          <div className="row">
        <ProjectData className="col-sm-4" image1={image1} name="Current Project" description="            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio."/>
              <ProjectData className="col-sm-4" image1={image1} name="Current Project" description="            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio."/>
              <ProjectData className="col-sm-4" image1={image1} name="Current Project" description="            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio."/>
              </div>
      </div>
    

    </div>
   <div class="tab-pane fade" id="pills-commercial" role="tabpanel" aria-labelledby="pills-commercial-tab">
    
     <div class="container portfolio-wrapper">
          <div className="row">
        <ProjectData className="col-sm-4" image1={image1} name="Upcoming Project" description="            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio."/>
              <ProjectData className="col-sm-4" image1={image1} name="Upcoming Project" description="            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio."/>
              <ProjectData className="col-sm-4" image1={image1} name="Upcoming Project" description="            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio."/>
              </div>
    </div>
    </div>
 
            </div>
            <br></br>
        </div>
            
            
        
            );
    }
}

export default Projects;