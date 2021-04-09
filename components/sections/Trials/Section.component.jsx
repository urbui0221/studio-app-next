import React from 'react';
import styled, { css } from 'styled-components';
import Button from '../../ui/Button.component';

const Section = ({
	Icon,
	heading,
	description,
	btnTxt,
	children,
	...otherProps
}) => {
	return (
		<>
			{otherProps.bgColor && (
				<svg
					style={{ marginBottom: -10, fill: '#f5f5f5' }}
					version='1.1'
					xmlns='http://www.w3.org/2000/svg'
					x='0px'
					y='0px'
					viewBox='0 0 1920 150'
				>
					<path
						d='M0.3,150.8h1920v-65c-92.7-18.9-237.5-42.3-415.8-44.3c-249.7-2.8-279.5,39.6-526.6,43.5
                c-316.5,4.9-333.1-63.7-627-39.2C231.6,55.7,0.3,86.6,0.3,86.6c0,0,0,0,0,0V150.8z'
					/>
				</svg>
			)}{' '}
			<CommonSection {...otherProps}>
				<div className='content-container'>
					{Icon && (
						<div className='content-container--icon'>
							<Icon />
						</div>
					)}
					<h1>{heading}</h1>
					{description && <p>{description}</p>}
					{btnTxt && <TrBtn>{btnTxt}</TrBtn>}
					{children}
				</div>
			</CommonSection>
			{otherProps.bgColor && (
				<svg
					style={{ fill: '#f5f5f5', marginTop: -2 }}
					version='1.1'
					xmlns='http://www.w3.org/2000/svg'
					x='0px'
					y='0px'
					viewBox='0 0 1920 150'
				>
					<path
						xmlns='http://www.w3.org/2000/svg'
						d='M0.8,2.1h1920v65c-92.7,18.9-237.5,42.3-415.8,44.3c-249.7,2.8-279.5-39.6-526.6-43.5  c-316.5-4.9-333.1,63.7-627,39.2C232,97.2,0.8,66.3,0.8,66.3c0,0,0,0,0,0V2.1z'
					/>
				</svg>
			)}{' '}
		</>
	);
};

export default Section;

const CommonSection = styled.section`
	margin: ${(props) => props.margin || '0rem'};
	text-align: center;
	font-family: var(--font3);
	width: 100%;
	background-color: ${(props) => props.bgColor || '#fff'};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0rem 2rem;
	h1 {
		font-size: 4.5rem;
		font-weight: 800;
	}
	p {
		margin-top: 1.5rem;
		max-width: 80rem;
		margin: 0 auto;
	}
	@media only screen and (max-width: 775px) {
		h1 {
			font-size: 3rem;
		}
		p {
			max-width: 100%;
		}
	}
	.content-container {
		position: relative;
		top: ${(props) => props.moveTop};
		&--icon {
			margin-bottom: 1.5rem;
		}
	}
`;

const TrBtn = styled(Button)`
	padding: 1.5rem 3rem;
	background-color: var(--primary);
	text-transform: uppercase;
	margin-top: 3rem;
`;
