import React from 'react'
import styled from 'styled-components'


const Newsletter = props => {
    return (
        <Container>
        <div className="section section-bg-3 section-cover footer-newsletter style-1 pt-11 pb-8">
        <div className="container">
            <div className="row">
                <div className="col-md-1">&nbsp;</div>
                <div className="col-md-4">
                    <div className="footer-newsletter-left">Subscribe to our Newsletter</div>
                </div>
                <div className="col-md-6">
                    <div className="footer-newsletter-right">
                        <form method="post">
                            <div className="form-fields">
                                <div className="form">
                                    <input type="email" name="email" placeholder="Enter your e-mail" /> 
                                    <input type="submit" value="Submit" />
                                </div>
                                <p className="note">Note* : Spectators are our passion. Creation is our core.</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div> 
    </div>   
        </Container>
    )
}
const Container = styled.div`
.footer-newsletter.style-1 .footer-newsletter-left {
    font-size: 34px;
    font-weight: 400;
    font-family: Merriweather;
    color: #333;
    line-height: 46px;
    text-transform: capitalize;
    margin-bottom: 30px;
}
.footer-newsletter.style-1 .footer-newsletter-right {
    margin-bottom: 30px;
}
.footer-newsletter.style-1 .footer-newsletter-right .form {
    position: relative;
    height: 48px;
    line-height: 48px;
    background-color: #f7f7f7;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
}
.footer-newsletter.style-1 .footer-newsletter-right .form input[type="text"], 
.footer-newsletter.style-1 .footer-newsletter-right .form input[type="email"] {
    display: inline-block;
    background-color: transparent;
    color: #333;
    font-size: 14px;
    font-family: Montserrat;
    border: 0;
}
.footer-newsletter.style-1 .footer-newsletter-right .form input[type="submit"] {
    display: inline-block;
    height: 40px;
    line-height: 40px;
    text-align: center;
    padding: 0 25px;
    background-color: #da0e2b;
    font-size: 14px;
    font-family: Montserrat;
    font-weight: 400;
    text-transform: uppercase;
    color: #fff;
    border: 0;
    position: absolute;
    top: 4px;
    right: 4px;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -ms-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
}
.footer-newsletter.style-1 .footer-newsletter-right .form input[type="submit"]:hover {
    background-color: #333;
    color: #fff;
}
.footer-newsletter.style-1 .footer-newsletter-right p {
    color: #ababab;
    font-size: 14px;
    font-style: italic;
    margin-bottom: 0;
}

`
export default Newsletter
