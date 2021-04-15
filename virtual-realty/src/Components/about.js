import React, {Component} from 'react';
import './realtyheader.css';
import './about.css';
import location from '../Assets/Locationicon.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class About extends Component{
    Constructor(props){

    }
    render()
    {
        return(
            <div class="about-us">
                <div class="TopDisplay">

                    <div class="section">
                        <div class="container about-us">
                            <div class="wrapper">

                                <h1>ABOUT SMARTECHOMES</h1>
                                <div class="about-info"><b> SMARTECHOMES is a Small Business that has specialized in delivering realtor solutions.</b></div>
                            </div>
                        </div>
                    </div>
                </div>
                <section>

                    <div class="aboutus-grid">

                        <div class="aboutus-item"><a class="links" href="/"> </a></div>
                        <div class="aboutus-item"><a class="links" href="/"> Our Story</a></div>
                        <div class="aboutus-item"><a class="links" href="/"> </a></div>
                    </div>
                </section>
                <div class="container-fluid about-us story-info">
                    <div class="info-grid">
                        <div class="story-object">
                            <div class="left-info">
                                <img src={location} alt="LocationDiagram" class="icon"/>
                                <p class="right-info">12 S Clyde Ave, Kissimmee  <br/>FL 34741, UNITED STATES</p>
                                <FontAwesomeIcon icon="phone"/>
                                <p class="right-info">+1 407 668 1196</p>
                            </div>
                            <div class="right-info">
                                <p class="left-info">
                                    With extensive knowledge of the real estate industry, we are dedicated to helping clients successfully buy, rent and sell their properties. Our experienced agents are passionate about finding dream homes for families across the state.
                                    <br/>
                                    Trust in our know-how when selling your home. We ensure that it is listed at the right price by analyzing the current real estate market. Then we will show you tried-and-tested staging techniques so that your home is presented in the best light.

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <section>
                    <div class="aboutus-grid">

                        <div class="aboutus-item"><a class="links" href="/"> </a></div>
                        <div class="aboutus-item"><a class="links" href="/"> Our Mission</a></div>
                        <div class="aboutus-item"><a class="links" href="/"> </a></div>

                    </div>
                </section>
                <section>
                    <div class="container-fluid about-us mission-info">
                        <div class="info-grid">
                            <div class="mission-object">

                                <div class="right-info mission">

                                    To be a trusted partner to our  customers in the development, design, management, and implementation of proven business processes and innovative technical solutions to drive mission success today – and for the future.


                                </div>
                            </div>
                        </div>
                    </div>

                </section>
                <section>

                    <div class="aboutus-grid">

                        <div class="aboutus-item"><a class="links" href="/"> </a></div>
                        <div class="aboutus-item"><a class="links" href="/"> Our Vision</a></div>
                        <div class="aboutus-item"><a class="links" href="/"> </a></div>

                    </div>


                </section>
            
                <section>
                    <div class="container-fluid about-us vision-info">
                        <div class="info-grid">
                            <div class="mission-object">

                                <div class="right-info mission">

                                    To be a trusted partner to our  customers in the development, design, management, and implementation of proven business processes and innovative technical solutions to drive mission success today – and for the future.


                                </div>
                            </div>
                        </div>
                    </div>

                </section>
              
                <section>

                    <div class="aboutus-grid">

                        <div class="aboutus-item"><a class="links" href="/"> </a></div>
                        <div class="aboutus-item"><a class="links" href="/"> Our Customers</a></div>
                        <div class="aboutus-item"><a class="links" href="/"> </a></div>

                    </div>


                </section>
                <section>
                <div class="container-fluid about-us customer-info">
                    <div class="info-grid">
                <div class="story-object">
                    <div class="left-info">
                    <img  data-inject="home-At6row5Img" src="https://le-cdn.website-editor.net/0249a015cc4f45fd95510277da7b39fc/dms3rep/multi/opt/97e9f39a8a10aeaf4cfc022e52e27cac86f9c8239e7071783a9a06c49e3a4e48-400w.jpeg" id="1696370438" class="" data-cms-image-id="112026" data-cms-image-version="1" onerror="handleImageLoadError(this)" height="200px" alt="customer-happy"/>
                        </div>
                    <div class="right-info">
                <p >
                  <div id="sample1"><font class="lh-1 size-22"><i ><font data-inject="home-At6row5Quote" class="lh-1">“With help from the brilliant Carmen, we found our dream home in next to no time, and we’ll be moving in next week. We couldn't be happier!”</font></i></font><font class="lh-1 size-22">&nbsp; <font data-inject="home-At6row5Signature" class="lh-1">– Michael and Debra McClurg</font></font><font class="lh-1 size-22"><br/></font></div>
                </p>
                  </div>
                </div>
                </div>
                </div>

          </section>
               

            </div>




        );
    }
}

export default About;
