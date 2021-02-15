import React from 'react'
import styled from 'styled-components'
import useInput from '../../../custom/hooks/useInput'
import firebaseClient from '../../../firebase/firebaseClient'
import firebase from 'firebase/app'
import 'firebase/firestore'


firebaseClient();

const Newsletter = props => {
    const email = useInput('');

    const onSubmit = eve => {
        eve.preventDefault();
        firebase.firestore().collection('email-subscribe').doc(email.value).set({
            email: email.value
        })
        .then(_ => console.log("Your response have been submitted"))
        .catch(err => console.log(err));
    }

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
                        <form onSubmit={onSubmit}>
                            <div className="form-fields">
                                <div className="form">
                                    <input 
                                    value={email.value}
                                    onChange={email.onChange}
                                    type="email" 
                                    name="email" 
                                    placeholder="Enter your e-mail" /> 
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
    font-family: var(--head);
    color: var(--tertiary2);
    text-transform: capitalize;
    margin-bottom: 30px;
}
.footer-newsletter.style-1 .footer-newsletter-right {
    margin-bottom: 30px;
}
.footer-newsletter.style-1 .footer-newsletter-left {
  
}
.footer-newsletter.style-1 .footer-newsletter-right .form {
    position: relative;
    height: 48px;
    line-height: 48px;
    background-color: var(--lynxWhite);
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
}
.footer-newsletter.style-1 .footer-newsletter-right .form input[type="text"], 
.footer-newsletter.style-1 .footer-newsletter-right .form input[type="email"] {
    display: inline-block;
    background-color: transparent;
    color: var(--tertiary2);
    font-size: 14px;
    font-family: var(--display);
    border: 0;
}
.footer-newsletter.style-1 .footer-newsletter-right .form input[type="submit"] {
    display: inline-block;
    height: 40px;
    line-height: 40px;
    text-align: center;
    padding: 0 25px;
    background-color: var(--primary);
    font-size: 14px;
    font-family: var(--display);
    font-weight: 400;
    text-transform: uppercase;
    color: var(--baseBg);
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
    background-color: var(--tertiary2);
    color: var(--baseBg);
}
.footer-newsletter.style-1 .footer-newsletter-right p {
    color: var(--gray67);
    font-size: 14px;
    font-style: italic;
    margin-bottom: 0;
}

`
export default Newsletter
