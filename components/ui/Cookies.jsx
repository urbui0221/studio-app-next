import React, { useState } from 'react';
import styled from 'styled-components';

const Cookies = ({ handleClose }) => {
	return (
		<Container>
			<CloseBtn onClick={() => handleClose(false)}>&times;</CloseBtn>
			<p>
				We use cookies to give you the best possible experience on our
				website. By continuing to brouse this site, you give consent for
				cookies to be used.
			</p>
		</Container>
	);
};

const Container = styled.div`
	color: var(--baseBg);
	background-color: var(--baseCol);
	padding: 28px;
	position: fixed;
	bottom: 20px;
	z-index: 2;
	border-radius: 4px;
    @media screen and (max-width: 321px) {
        padding: 23px;
	}

	p {
		width: 250px;
		font-size: 12px;
		margin-bottom: 0;
	}
`;

const CloseBtn = styled.div`
	font-size: 28px;
	position: absolute;
	right: 10px;
	top: 0px;
`;
export default Cookies;
