import Link from 'next/link';
import styled from 'styled-components';

const Blog = ({ img, url, alt, date, description, link }) => {
	return (
		<Container>
			<Link href={link}>
				<div className='blog-item masonry-item style-2'>
					<div className='blog-item-inner'>
						<div className='blog-thumbnail'>
							<a href={url}>
								<img src={img} alt={alt} />
							</a>
						</div>
						<div className='blog-info'>
							<div className='blog-info-date'>
								<span className='posted-on'>{date}</span>
							</div>
							<a href={url} className='blog-info-title'>
								{description}
							</a>
						</div>
					</div>
				</div>
			</Link>
		</Container>
	);
};

const Container = styled.div`
	.blog-item .blog-item-inner {
		padding: 30px;
		min-height: 205px;
		background-color: var(--baseBg);
		position: relative;
		-webkit-transition: all 0.5s;
		-moz-transition: all 0.5s;
		-ms-transition: all 0.5s;
		-o-transition: all 0.5s;
		transition: all 0.5s;
	}

	.blog-item.style-2 {
		margin-top: 50px;
	}
	.blog-item.style-2 .blog-item-inner {
		box-shadow: 5px 5px 20px var(--lightGray);
		padding: 0;
	}
	.blog-item.style-2 .blog-thumbnail {
		position: relative;
		margin-bottom: 20px;
		overflow: hidden;
	}
	.blog-item.style-2 .blog-thumbnail:after,
	.blog-item.style-2 .blog-thumbnail:before {
		content: '';
		width: 100%;
		height: 100%;
		position: absolute;
		display: block;
		z-index: 97;
		top: 0;
		background-color: rgba(0, 0, 0, 0.2);
		-webkit-transition: all 0.5s;
		-moz-transition: all 0.5s;
		-ms-transition: all 0.5s;
		-o-transition: all 0.5s;
		transition: all 0.5s;
		opacity: 0;
	}
	.blog-item.style-2 .blog-thumbnail:before {
		left: -100%;
	}
	.blog-item.style-2 .blog-thumbnail:after {
		right: -100%;
	}
	.blog-item.style-2:hover .blog-thumbnail:before {
		left: 0;
		opacity: 1;
	}
	.blog-item.style-2:hover .blog-thumbnail:after {
		right: 0;
		opacity: 1;
	}
	.blog-item.style-2 .blog-thumbnail > a:before {
		z-index: 98;
		content: '\f489';
		font-family: var(--icon);
		font-size: 40px;
		width: 40px;
		height: 40px;
		text-align: center;
		line-height: 40px;
		color: var(--baseBg);
		position: absolute;
		top: 50%;
		left: 50%;
		margin-top: 0;
		margin-left: -20px;
		opacity: 0;
		-webkit-transition: all 0.5s;
		-moz-transition: all 0.5s;
		-ms-transition: all 0.5s;
		-o-transition: all 0.5s;
		transition: all 0.5s;
	}
	.blog-item.style-2:hover .blog-thumbnail > a:before {
		opacity: 1;
		margin-top: -20px;
	}
	.blog-item.style-2 .blog-thumbnail img {
		width: 100%;
	}
	.blog-item.style-2 .film-list-categories {
		position: absolute;
		right: 20px;
		bottom: 20px;
	}
	.blog-item.style-2 .quote .film-list-categories {
		position: static;
		text-align: right;
	}
	.blog-item.style-2 .film-list-categories a {
		font-size: 12px;
		color: var(--baseBg);
		letter-spacing: 0.1em;
		background-color: var(--primary);
		display: inline-block;
		width: auto;
		padding: 5px 10px;
		text-transform: uppercase;
		font-weight: bold;
		line-height: 1;
		font-family: var(--display);
	}
	.blog-item.style-2 .blog-info {
		padding: 0 30px 25px 30px;
	}
	.blog-item.style-2 .blog-info-date {
		margin-bottom: 10px;
		display: block;
		font-size: 12px;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		font-family: var(--display);
		position: relative;
	}
	.blog-item.style-2 .blog-info-date .posted-on {
		margin-right: 20px;
		color: #ccc;
	}
	.blog-item.style-2 .blog-info-title {
		font-family: var(--font3);
		font-size: 18px;
		line-height: 28px;
		margin-bottom: 0px;
		color: var(--tertiary2);
		position: relative;
		font-weight: 400;
	}
	.blog-list-item {
		margin-bottom: 50px;
		border-bottom: 1px solid var(--whiteSmoke);
		padding-bottom: 50px;
	}
`;

export default Blog;
