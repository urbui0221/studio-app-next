import React from 'react';
import styled from 'styled-components';

const IconBoxesLayout = ({
	title,
	description,
	iconClassName,
	backgroundImage,
}) => (
	<IconBoxesContainer>
		<div className='col-md-4'>
			<div className='icon-boxes icon-boxes-bg text-center'>
				<div
					className='icon-boxes-icon'
					data-bg-image='images/icon-boxes/icon_bg_1.png'
					style={{ backgroundImage: `url('${backgroundImage}')` }}
				>
					<i className={iconClassName}></i>
				</div>
				<div className='icon-boxes-inner'>
					<h5
						className='icon-boxes-title'
						dangerouslySetInnerHTML={{ __html: title }}
					></h5>
					<div className='icon-boxes-content'>{description}</div>
					<div className='icon-boxes-link'>
						<a href='#'>
							<span className='ion-android-arrow-forward'></span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</IconBoxesContainer>
);

export default IconBoxesLayout;

const IconBoxesContainer = styled.div`
	font-family: var(--font3);
	.icon-boxes .icon-boxes-icon {
		color: var(--primary);
		font-size: 105px;
		padding-top: 50px;
		background-position: center center;
		background-size: contain;
		background-repeat: no-repeat;
	}
	.icon-boxes .icon-boxes-icon i {
		padding: 8px;
		border-radius: 50%;
		-webkit-transition: all 0.5s;
		-moz-transition: all 0.5s;
		-ms-transition: all 0.5s;
		-o-transition: all 0.5s;
		transition: all 0.5s;
	}
	.icon-boxes .icon-boxes-title {
		font-family: var(--display);
		font-weight: 700;
		margin-top: 20px;
		margin-bottom: 20px;
		position: relative;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		font-size: 14px;
		color: var(--tertiary2);
	}
	.icon-boxes .icon-boxes-content {
		color: var(--dimGray);
	}
	.icon-boxes .icon-boxes-link {
		margin-top: 20px;
	}
	.icon-boxes .icon-boxes-link a {
		font-size: 18px;
		font-weight: 700;
		color: var(--primary);
		font-style: italic;
		padding-left: 4px;
		letter-spacing: 0.1em;
		line-height: 34px;
		border: 2px solid var(--whiteSmoke);
		-webkit-transition: all 0.5s;
		-moz-transition: all 0.5s;
		-ms-transition: all 0.5s;
		-o-transition: all 0.5s;
		transition: all 0.5s;
		display: inline-block;
		width: 40px;
		height: 40px;
		margin: 0 auto;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 100%;
	}
	.icon-boxes-inner {
		display: table-cell;
		vertical-align: top;
	}
	.icon-boxes:hover .icon-boxes-link a {
		border-color: var(--primary);
		background-color: var(--primary);
		color: var(--baseBg);
	}

	.icon-boxes-small .icon-boxes-icon {
		font-size: 14px;
		color: var(--primary);
		display: inline-block;
		padding-top: 0;
	}
	.icon-boxes-small .icon-boxes-title {
		margin-top: 10px;
		margin-bottom: 10px;
		letter-spacing: 0.05em;
		font-size: 14px;
		font-weight: 700;
		font-family: var(--display);
		display: inline-block;
		text-transform: uppercase;
	}
`;
