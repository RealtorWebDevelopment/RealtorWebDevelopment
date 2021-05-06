import React, {Component} from 'react';
import './projectdata.css';


import image1 from '../Assets/RealEstates/Image5.jpg';
import ProjectData from './projectData';

class RealEstate extends Component{
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
                  
                  	<h1>RealEstate @ SMARTECHOMES.com<sup>®</sup></h1>
            		
              </div>
            </div>
          </div>
        </div>
                
        <ul class="nav nav-pills mb-3 tabs" id="pills-tab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="pills-residential-tab" data-toggle="pill" href="#pills-residential" role="tab" aria-controls="pills-residential" aria-selected="true">Residential</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="pills-commercial-tab" data-toggle="pill" href="#pills-commercial" role="tab" aria-controls="pills-commercial" aria-selected="false">Commercial</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="pills-industrial-tab" data-toggle="pill" href="#pills-industrial" role="tab" aria-controls="pills-industrial" aria-selected="false">Industrial</a>
  </li>
</ul>
                
<div class="tab-content" id="pills-tabContent">
   <div class="tab-pane fade show active" id="pills-residential" role="tabpanel" aria-labelledby="pills-residential-tab">
    
       <div class="container portfolio-wrapper">
          <div className="row">
        <ProjectData className="col-sm-4" image1={image1} title="R Project" description="            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio."/>
              <ProjectData className="col-sm-4" image1={image1} title="R Project" description="            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio."/>
              <ProjectData className="col-sm-4" image1={image1} title="R Project" description="            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio."/>
              </div>
      </div>
    

    </div>
   <div class="tab-pane fade" id="pills-commercial" role="tabpanel" aria-labelledby="pills-commercial-tab">
    
     <div class="container portfolio-wrapper">
          <div className="row">
        <ProjectData className="col-sm-4" image1={image1} title="C Project" description="            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio."/>
              <ProjectData className="col-sm-4" image1={image1} title="C Project" description="            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio."/>
              <ProjectData className="col-sm-4" image1={image1} title="C Project" description="            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio."/>
              </div>
    </div>
    </div>
  <div class="tab-pane fade" id="pills-industrial" role="tabpanel" aria-labelledby="pills-industrial-tab">
      
       <div class="container portfolio-wrapper">
          <div className="row">
        <ProjectData className="col-sm-4" image1={image1} title="I Project" description="            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio."/>
              <ProjectData className="col-sm-4" image1={image1} title="I Project" description="            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio."/>
              <ProjectData className="col-sm-4" image1={image1} title="I Project" description="            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio."/>
              </div>
      </div>
</div>
            </div>
            <br></br>
        </div>
            
            
        
            );
    }
}

export default RealEstate;