import React, {Component} from 'react';
import './realtyheader.css';
import './about.css';



class Contact extends Component{
    Constructor(props){

    }
    render()
    {
        return(
            <div class="Contact-us">
            <div class="TopDisplay1">


                <div class="section">
                    <div class="container-fluid about-us">
                        <div class="wrapper">

                            <h1>Contact SMARTECHOMES.com<sup>®</sup></h1>
                        </div>
                    </div>
                </div>
            </div>




            <div class="container2 contact-us">

                <aside id="sideBar" class="pull-right thBxSh">
                    <h4>Send Us A Note</h4>
                    <hr class="rdLine"/>
                        <p><b/>
                            Please fill out the information below to get in touch with us.
                        </p>
                        <div class="before-submit">
                            <form id="contact-form" class="go-bottom">


                                <div class="select">
                                    <select name="realtor_type" id="realtor_type">
                                        <option value=""> I am...</option>
                                        <option value="Using this site to search">Using this site to search to Buy</option>
                                        <option value="Using this site to search">Using this site to search to Sell</option>
                                        <option value="Using this site for non-real estate">Using this site for non-real estate content</option>
                                        <option value="REALTOR">A REALTOR®</option>
                                        <option value="Homebuilder">A Homebuilder</option>
                                        <option value="An apartment manager">An apartment manager or have a property to rent</option>
                                        <option value="Lender">A lender</option>
                                        <option value="None">None of the above</option>
                                    </select>
                                    <div class="select__arrow"></div>
                                </div>
                                <div class="select">
                                    <select name="question" id="question">
                                        <option value="">My question is..</option>
                                        <option value="Home &amp; Garden">Home &amp; Garden</option>
                                        <option value="Home Finance">Home Finance</option>
                                        <option value="Home Plans">Home Plans</option>
                                        <option value="Homes by realtor.com">Homes by REALTOR.com</option>
                                        <option value="Advertise with Move™">How to advertise with Move™</option>
                                        <option value="Manufactured Housing">Manufactured Housing</option>
                                        <option value="Media Relations">Media Relations</option>
                                        <option value="HMove.com">Move.com</option>
                                        <option value="Moving &amp; Storage">Moving &amp; Storage</option>
                                        <option value="New Homes">New Homes</option>
                                        <option value="Other">Other</option>
                                        <option value="Privacy">Privacy</option>
                                        <option value="Rentals">Rentals</option>
                                        <option value="Senior Housing">Senior Housing Homes</option>
                                        <option value="Top Producer">Top Producer</option>
                                        <option value="Welcome Wagon">Welcome Wagon</option>
                                    </select>
                                    <div class="select__arrow"></div>
                                </div>

                                <div class="input-group">

                                    <input type="email" name="email" id="email" placeholder="Email"/>
                                </div>

                                <div class="input-group">

                                    <input type="subject" name="subject" id="subject" placeholder="subject"/>
                                </div>

                                <div class="input-group">
                                    <textarea name="message" id="message" placeholder="Message"></textarea>
                                </div>

                                <button class="hvr-sweep-to-top">Get More Information</button>
                       
                        
                                </form>
                            </div>
                    </aside>
            </div>







                        <div class="container3">
                            <div class="row">
                                <div class="col-1"></div>
                                <div class="col-5">
                                    <div class="dmRespCol small-12 medium-6 large-6" id="1976554779"> <span id="1830874292"></span>

                                        <h3 class="dmwidget-title ">Find us here</h3>

                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3513.2329732865264!2d-81.41559918544833!3d28.29126600619625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd8413daba2867%3A0xa888c44f51bb3c05!2s12%20S%20Clyde%20Ave%2C%20Kissimmee%2C%20FL%2034741!5e0!3m2!1sen!2sus!4v1615477242084!5m2!1sen!2sus" width="500" height="450" title="googleMap" allowfullscreen="" loading="lazy"></iframe>
                                    </div>
                                </div>
                                <div class="col-1"></div>
                                <div class="col-4">
                                    <div class="u_1211765304 default dmHoursOfOperation" id="1211765304" dmle_extension="open_hours" data-element-type="open_hours" time_format="24" data-inject="contactMax-businessHoursTitle" wr="true" displaytitle="true" forcedisplay="false" localization_key_title="googleTranslate.mKJ7poo.53" icon="true" surround="true" adwords=""> <h3 class="dmwidget-title ">Business Hours</h3>
                                        <dl class="open-hours-data"> <div class="open-hours-item"> <dt day="0">Mon - Fri</dt>
                                            <dd> <time>9:00</time>
                                                - <time>17:00</time>
                                            </dd>
                                            </div>
                                            <div class="open-hours-item"> <dt day="5">Sat - Sun</dt>
                                                <dd>Closed</dd>
                                            </div>
                                        </dl>
                                        <hr/>
                                        <h3 class="dmwidget-title ">Call / Text</h3>
                                        <p class="right-info">+1 407 668 1196</p>

                                        <hr/>
                                        <h3 class="dmwidget-title ">Office Location </h3>
                                        <p class="right-info">12 S Clyde Ave, Kissimmee  <br/>FL 34741, UNITED STATES</p>

                                        <hr/>
                                        <h3 class="dmwidget-title ">Email </h3>
                                        <p class="right-info">smartechhomes@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                
</div>

                        );
                        }
                        }

     export default Contact;