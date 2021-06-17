import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import Button from './Button.component';
const Cookies = ({ handleClose,...animationProps }) => {
	return (
		<Container {...animationProps}>
			<CloseBtn onClick={handleClose}>&times;</CloseBtn>
			<p>
				We use cookies to give you the best possible experience on our
				website. By continuing to brouse this site, you give consent for
				cookies to be used.
			</p>
			<CookieBtn onClick={handleClose}> I accept </CookieBtn>
		</Container>
	);
};


const CookieBtn = styled(Button)`
border : 1px solid white;
border-radius: 1rem;
padding : 0.8rem 1rem;
font-weight: 500;
margin-top : 1rem;
width : 100%;
`

const Container = styled(motion.div)`
	color: var(--baseBg);
	background-color: var(--baseCol);
	padding: 28px;
	position: fixed;
	bottom: 10px;
	left : 10px;
	z-index: 10000;
	border-radius: 1rem;
	box-shadow : 1px 3px 5px rgba(0, 0, 0, 0.2);
	p {
		width: 250px;
		font-size: 12px;
		margin-bottom: 0;
		font-weight : 500;
	}
	@media screen and (max-width: 600px) {
		width: 100%;
		bottom: 0;
		left: 0;
		border-radius: 0;
		p{
			width: 100%;
			text-align:center;
		}
	}
	@media screen and (max-width: 600px) {
        padding: 18px;
	}
`;

const CloseBtn = styled.div`
	font-size: 28px;
	position: absolute;
	right: 12px;
	top: 0px;
	cursor: pointer;
	@media screen and (max-width: 600px){
		top : -13px;
		right: 5px;
	}
`;
export default Cookies;
