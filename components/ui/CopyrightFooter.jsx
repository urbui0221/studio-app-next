import React from 'react'
import styled from 'styled-components'

const CopyrightLayout = () => {
    return (
        <CopyrightContainer>
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
</CopyrightContainer>
    )
}
export default CopyrightLayout;

const CopyrightContainer = styled.div`

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
@media (max-width: 768px){

    .copyright .copyright-right, .text-left-sm {
        text-align: left;
    }
    .copyright .copyright-right ul li {
    display: inline-block;
    margin-left: 0px;
}
}

`