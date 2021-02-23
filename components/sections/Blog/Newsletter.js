import React, { useContext } from 'react';
import styled from 'styled-components';
import useInput from '../../../custom/hooks/useInput';
import firebaseClient from '../../../firebase/firebaseClient';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { ToastContext } from '../../utils/ToastState';

firebaseClient();

const Newsletter = () => {
	const email = useInput('');

	const { submessge,subscriber } = useContext(ToastContext)

    const onSubmit = eve => {
        eve.preventDefault();
        firebase.firestore().collection('email-subscribe').doc(email.value).set({
            email: email.value
        })
        .then(_ => {
			submessge('Your response have been submitted');
			subscriber(true);
			setTimeout(() => { 
				subscriber(false)
			},6000)
		})
        .catch(err => console.log(err));

        email.setValue("");
    }

	return (
		<Container>
			<div className='section section-bg-3 section-cover footer-newsletter style-1 pt-11 pb-8'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-1'>&nbsp;</div>
						<div className='col-md-4'>
							<div className='footer-newsletter-left'>
								Subscribe to our Newsletter
							</div>
						</div>
						<div className='col-md-6'>
							<div className='footer-newsletter-right'>
								<form onSubmit={onSubmit}>
									<div className='form-fields'>
										<div className='form'>
											<input
												value={email.value}
												onChange={email.onChange}
												type='email'
												name='email'
												placeholder='Enter your e-mail'
											/>
											<input
												type='submit'
												value='Submit'
											/>
										</div>
										<p className='note'>
											Note* : Spectators are our passion.
											Creation is our core.
										</p>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
};
const Container = styled.div`
	background-image: url('/images/background/news.jpg');
	background-repeat: no-repeat;
	background-position: center bottom;
	background-size: cover;
    background-color: var(--whiteSmoke);
	.footer-newsletter.style-1 .footer-newsletter-left {
		font-size: 34px;
		font-weight: 400;
        line-height: 46px;
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
		background-color: var(--baseBg);
		-webkit-border-radius: 3px;
		-moz-border-radius: 3px;
		border-radius: 3px;
	}
	.footer-newsletter.style-1
		.footer-newsletter-right
		.form
		input[type='text'],
	.footer-newsletter.style-1
		.footer-newsletter-right
		.form
		input[type='email'] {
		display: inline-block;
		background-color: transparent;
		color: var(--tertiary2);
		font-size: 14px;
		font-family: var(--display);
		border: 0;
	}
	.footer-newsletter.style-1
		.footer-newsletter-right
		.form
		input[type='submit'] {
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
		-webkit-transition: all 0.5s;
		-moz-transition: all 0.5s;
		-ms-transition: all 0.5s;
		-o-transition: all 0.5s;
		transition: all 0.5s;
	}
	.footer-newsletter.style-1
		.footer-newsletter-right
		.form
		input[type='submit']:hover {
		background-color: var(--tertiary2);
		color: var(--baseBg);
	}
	.footer-newsletter.style-1 .footer-newsletter-right p {
		color: var(--gray67);
		font-size: 14px;
		font-style: italic;
		margin-bottom: 0;
        margin-top: 1em;
	}
`;
export default Newsletter;
