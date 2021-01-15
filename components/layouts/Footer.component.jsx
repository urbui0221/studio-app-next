import React from 'react'
import styled from 'styled-components'

const Footer = () => (
   <LayoutFooter>
   <footer className="footer">
   <div className="container">
       <div className="row">
           <div className="col-md-4">
               <a href="./" id="footer_logo">
                   <img className="footer-logo-image" src="images/logo_footer.png" alt="Nine Studio" />
               </a>
               <div className="footer-social">
                   <a data-toggle="tooltip" data-placement="top" title="" data-original-title="Facebook" href="#"><i className="fa fa-facebook"></i></a>
                   <a data-toggle="tooltip" data-placement="top" title="" data-original-title="Twitter" href="#"><i className="fa fa-twitter"></i></a>
                   <a data-toggle="tooltip" data-placement="top" title="" data-original-title="Pinterest" href="#"><i className="fa fa-pinterest"></i></a>
                   <a data-toggle="tooltip" data-placement="top" title="" data-original-title="Instagram" href="#"><i className="fa fa-instagram"></i></a>
               </div>
           </div>
           <div className="col-md-2">
               <div className="widget">
                   <h3 className="widget-title">Our Services</h3>
                   <ul>
                       <li><a href="#">Equipment Hire</a></li>
                       <li><a href="#">Filmming Services</a></li>
                       <li><a href="#">Studio Hire</a></li>
                       <li><a href="#">Dressing</a></li>
                       <li><a href="#">Flexibe Office Space</a></li>
                   </ul>
               </div>
           </div>
           <div className="col-md-2">
               <div className="widget">
                   <h3 className="widget-title">Quick Links</h3>
                   <ul>
                       <li><a href="#">My Account</a></li>
                       <li><a href="#">View Order</a></li>
                       <li><a href="#">About Us</a></li>
                       <li><a href="#">Promotions</a></li>
                       <li><a href="#">Contact Us</a></li>
                   </ul>
               </div>
           </div>
           <div className="col-md-4">
               <div className="widget">
                   <h3 className="widget-title">Conect With Us</h3>
                   <div className="textwidget">
                       <p>A: 14 L.E Goulburn St, Berlin 2000Wm</p>
                       <p>P: (+88) 1990 6886</p>
                       <p>E: <a href="mailto:contact@9studio.com">contact@9studio.com</a></p>
                   </div>
                   <div className="footer-gmap">
                       <a href="#gmap-popup" className="open-popup-link">Google Map</a>
                       {/* <div id="gmap-popup" className="mfp-hide">
                           <iframe id="gmap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.0554760559626!2d151.42366529037852!3d-32.80714560754794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b73360bf7441cf9%3A0x7d18a93f0244f271!2s14+Goulburn+St%2C+Abermain+NSW+2326%2C+Australia!5e0!3m2!1sen!2s!4v1482743874873" width="600" height="450" allowfullscreen></iframe>
                       </div> */}
                   </div>
               </div>
           </div>
       </div>
   </div>
</footer>
<div className="copyright">
   <div className="container">
       <div className="row">
           <div className="copyright-container">
               <div className="col-md-6 p-0">
                   <div className="copyright-left">
                       Copyright © 2017 <a href="#">NineStudio</a> - All Rights Reserved.
                   </div>
               </div>
               <div className="col-md-6 p-0">
                   <div className="copyright-right">
                       <ul>
                           <li><a href="#">Privacy Policy</a></li>
                           <li><a href="#">Term And Conditions</a></li>
                       </ul>
                   </div>
               </div>
           </div>
       </div>
   </div>
</div>   
   </LayoutFooter>
)

export default Footer

const LayoutFooter = styled.footer`
.footer {
    font-family: 'Lato';
	display: block;
    width: 100%;
    padding-top: 80px;
    padding-bottom: 40px;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 15px;
	background-color: #333;
    color: #ababab;
}
.footer .row > .col-md-4,
.footer .row > .col-md-2 {
	margin-bottom: 30px;
}
.footer a {
    color: #ababab;
}
.footer a:hover {
    color: #da0e2b;
}
.footer .footer-social {
    margin-top: 30px;
	margin-bottom: 50px;
}
.footer .footer-social a {
	position: relative;
    display: inline-block;
    width: 48px;
    height: 48px;
    line-height: 44px;
    text-align: center;
    border: 2px solid #585858;
    border-radius: 24px;
    margin-right: 6px;
    font-size: 16px;
    color: #ababab;
}
.footer .footer-social a:hover {
    background-color: #da0e2b;
    border-color: #da0e2b;
    color: #fff;
}
.footer .footer-social .tooltip.top .tooltip-arrow {
    border-top-color: #da0e2b;
}
.footer .footer-social .tooltip-inner {
    background-color: #da0e2b;
}
.footer .widget .widget-title {
    margin-bottom: 30px;
    padding-bottom: 10px;
    color: #fff;
    font-family: Merriweather;
    font-weight: 400;
    font-size: 18px;
    letter-spacing: 0;
    position: relative;
}
.footer .widget .widget-title:after {
    content: '';
    width: 30px;
    height: 1px;
    background-color: #da0e2b;
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -ms-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
}
.footer .widget ul {
    list-style: none;
    padding: 0;
}
.footer .widget ul li {
    margin-bottom: 15px;
    line-height: 1.6;
}
.footer .widget ul li a {
    position: relative;
    color: #ababab;
}
.footer .widget ul li a:hover {
    padding-left: 15px;
    color: #da0e2b;
}
.footer .widget ul li a:hover:before {
    position: absolute;
    content: '\f462';
    font-family: 'Ionicons';
    left: 0;
    top: 0;
    color: #da0e2b;
    line-height: 18px;
}
.footer .textwidget p {
    padding: 0;
    margin: 0 0 15px 0;
}
.footer .footer-gmap {
    margin-top: 35px;
}
.footer .footer-gmap a {
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    font-family: Montserrat;
    font-weight: 400;
}
.footer .footer-gmap a:before {
    content: '\f041';
    font-family: FontAwesome;
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 36px;
    text-align: center;
    color: #ababab;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    border: 2px solid #595959;
    margin-right: 10px;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -ms-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
}
.copyright {
    display: block;
    width: 100%;
    position: relative;
	background: #333;
}
.copyright .copyright-container {
    padding-top: 40px;
    padding-bottom: 40px;
    border-top: 2px solid #2d2d2d;
	float: left;
    width: 100%;
}
.copyright .copyright-left {
    font-size: 14px;
    color: #696969;
    font-family: Lato;
    font-style: italic;
    line-height: 25px;
}
.copyright .copyright-left a {
    color: #fff;
}
.copyright .copyright-left a:hover {
    color: #da0e2b;
}
.copyright .copyright-right {
    text-align: right;
}
.copyright .copyright-right ul {
    margin: 0;
    padding: 0;
    list-style: none;
}
.copyright .copyright-right ul li {
    display: inline-block;
    margin-left: 20px;
}
.copyright .copyright-right ul li a {
    text-transform: uppercase;
    font-family: Montserrat;
    color: #696969;
    font-size: 12px;
    font-weight: 400;
    line-height: 1;
}
.copyright .copyright-right ul li a:hover {
    color: #da0e2b;
}
.copyright.style-2 .copyright-container {
    border-top: 0;
}
.copyright.style-2 .copyright-left {
    line-height: 55px;
}
.copyright.style-2 .copyright-right ul li a {
    line-height: 55px;
}
@media (min-width: 769px) {
	.copyright.style-2 .copyright-container {
		padding: 120px 100px;
	}
}

`