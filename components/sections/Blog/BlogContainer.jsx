import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Blog from './Blog';
import useMediaQuery from 'use-media-query-hook';

const BlogContainer = ({ state }) => {
	const isMedium = useMediaQuery('(max-width: 991px)');

	let [xcol1, xsetCol1] = useState([]);
	const [xcol2, xsetCol2] = useState([]);
	const [xcol3, xsetCol3] = useState([]);

	const [xmdcol1, xsetmdCol1] = useState([]);
	const [xmdcol2, xsetmdCol2] = useState([]);

	const [xdata, xsetData] = useState(state);

	console.log(state);

	// console.log(xdata)
	// console.log(xcol1)
	// console.log(xcol2)
	// console.log(xcol3)
	// console.log(xmdcol1)
	// console.log(xmdcol2)

	useEffect(() => {
		let col1 = [];
		let col2 = [];
		let col3 = [];
		let mdcol1 = [];
		let mdcol2 = [];
		if (xdata.length % 3 === 0) {
			// 3N
			for (let i = 0; i < xdata?.length; i += 3) {
				col1.push(xdata[i]);
				col2.push(xdata[i + 1]);
				col3.push(xdata[i + 2]);
			}
		} else if (xdata.length % 3 === 1) {
			// 3N+1
			for (let i = 0; i < xdata.length; i += 3) {
				col1.push(xdata[i]);
				if (!(xdata[i + 1] === undefined)) {
					col2.push(xdata[i + 1]);
				}
				if (!(xdata[i + 2] === undefined)) {
					col3.push(xdata[i + 2]);
				}
			}
		} else if (xdata.length % 3 === 2) {
			// 3N+2
			for (let i = 0; i < xdata.length; i += 3) {
				col1.push(xdata[i]);
				col2.push(xdata[i + 1]);
				if (!(xdata[i + 2] === undefined)) {
					col3.push(xdata[i + 2]);
				}
			}
		}
		xsetCol1(col1);
		xsetCol2(col2);
		xsetCol3(col3);

		if (xdata.length % 2 === 0) {
			for (let i = 0; i < xdata.length; i += 2) {
				mdcol1.push(xdata[i]);
				mdcol2.push(xdata[i + 1]);
			}
		} else {
			for (let i = 0; i < xdata.length; i += 2) {
				if (!(xdata[i + 1] === undefined)) {
					mdcol1.push(xdata[i]);
					if (!(xdata[i + 1] === undefined)) {
						mdcol2.push(xdata[i + 1]);
					}
				}
			}
		}
		xsetmdCol2(mdcol2);
		xsetmdCol1(mdcol1);

		console.log('col1', xcol1);
		console.log('col2', xcol2);
		console.log('col3', xcol3);
		console.log('mdcol1', xmdcol1);
		console.log('mdcol2', xmdcol2);
	}, [isMedium]);

	// const data = Data
	// const col1 = []
	// const col2 = []
	// const col3 = []

	// const mdcol1 = []
	// const mdcol2 = []

	// if (data.length % 3 === 0) {
	//   // 3N
	//   for (let i = 0; i < data.length; i += 3) {
	//     col1.push(data[i])
	//     col2.push(data[i + 1])
	//     col3.push(data[i + 2])
	//   }
	// } else if (data.length % 3 === 1) {
	//   // 3N+1
	//   for (let i = 0; i < data.length; i += 3) {
	//     col1.push(data[i])
	//     if (!(data[i + 1] === undefined)) {
	//       col2.push(data[i + 1])
	//     }
	//     if (!(data[i + 2] === undefined)) {
	//       col3.push(data[i + 2])
	//     }
	//   }
	// } else if (data.length % 3 === 2) {
	//   // 3N+2
	//   for (let i = 0; i < data.length; i += 3) {
	//     col1.push(data[i])
	//     col2.push(data[i + 1])
	//     if (!(data[i + 2] === undefined)) {
	//       col3.push(data[i + 2])
	//     }
	//   }
	// }

	// if (data.length % 2 === 0) {
	//   for (let i = 0; i < data.length; i += 2) {
	//     mdcol1.push(data[i])
	//     mdcol2.push(data[i + 1])
	//   }
	// } else {
	//   for (let i = 0; i < data.length; i += 2) {
	//     mdcol1.push(data[i])
	//     if (!(data[i + 1] === undefined)) {
	//       mdcol2.push(data[i + 1])
	//     }
	//   }
	// }

	return (
		<Container>
			<div className='container pt-12 pb-12'>
				<div className='col-md-12'>
					{!isMedium && (
						<>
							<div className='col-md-4'>
								{xcol1.map((blog, index) => (
									<Blog
										{...blog.cardData}
										key={index}
										link={{
											pathname: '/blog/[blogid]',
											query: { blogid: blog.id },
										}}
									/>
								))}
							</div>

							<div className='col-md-4'>
								{xcol2.map((blog, index) => (
									<Blog
										{...blog.cardData}
										key={index}
										link={{
											pathname: '/blog/[blogid]',
											query: { blogid: blog.id },
										}}
									/>
								))}
							</div>

							<div className='col-md-4'>
								{xcol3.map((blog, index) => (
									<Blog
										{...blog.cardData}
										key={index}
										link={{
											pathname: '/blog/[blogid]',
											query: { blogid: blog.id },
										}}
									/>
								))}
							</div>
						</>
					)}

					{isMedium && (
						<>
							<div className='col-sm-6'>
								{xmdcol1.map((blog, index) => (
									<Blog
										{...blog.cardData}
										key={index}
										link={{
											pathname: '/blog/[blogid]',
											query: { blogid: blog.id },
										}}
									/>
								))}
							</div>

							<div className='col-sm-6'>
								{xmdcol2.map((blog, index) => (
									<Blog
										{...blog.cardData}
										key={index}
										link={{
											pathname: '/blog/[blogid]',
											query: { blogid: blog.id },
										}}
									/>
								))}
							</div>
						</>
					)}
				</div>
			</div>
		</Container>
	);
};

export default BlogContainer;

const Data = [
	{
		img: '/images/blog/blog1sm.jpg',
		url: '/',
		alt: 'Image-1',
		tag: 'Featured',
		tagUrl: '/',
		date: 'January 25, 2017',
		description:
			'The Story of Ferguson through the Eyes of the People Who Lived it',
		views: '151',
		likes: '2',
		id: 1,
	},
	{
		img: '/images/blog/blog2.jpg',
		url: '/',
		alt: 'Image-1',
		tag: 'News',
		tagUrl: '/',
		date: 'January 25, 2017',
		description:
			'“Communication Is Where a Film Lives and Dies”: Director Zoe Lister-Jones',
		views: '141',
		likes: '0',
		id: 2,
	},
	{
		img: '/images/blog/blog3sm.jpg',
		url: '/',
		alt: 'Image-1',
		tag: 'Video',
		tagUrl: '/',
		date: 'January 25, 2017',
		description:
			'Profound Communication Only Happens When There Is Persistence',
		views: '112',
		likes: '1',
		id: 3,
	},
	{
		img: '/images/blog/blog4.jpg',
		url: '/',
		alt: 'Image-1',
		tag: 'Quote',
		tagUrl: '/',
		date: 'January 25, 2017',
		description:
			'Tell Them We Are Rising: The Story of Black Colleges and Universities',
		views: '84',
		likes: '0',
		id: 4,
	},
	{
		img: '/images/blog/blog5.jpg',
		url: '/',
		alt: 'Image-1',
		tag: 'Gallery',
		tagUrl: '/',
		date: 'January 25, 2017',
		description:
			'“The Challenge Is Balancing Tone”: Director Mark Pellington',
		views: '96',
		likes: '1',
		id: 5,
	},
	{
		img: '/images/blog/blog6.jpg',
		url: '/',
		alt: 'Image-1',
		tag: 'News',
		tagUrl: '/',
		date: 'January 25, 2017',
		description:
			'“We Are Living through a Divisive Time”: Director Barbara Kopple',
		views: '146',
		likes: '2',
		id: 6,
	},
	{
		img: '/images/blog/blog7.jpg',
		url: '/',
		alt: 'Image-1',
		tag: 'Video',
		tagUrl: '/',
		date: 'January 25, 2017',
		description: 'I Stopped Talking and Started Making the True Great Film',
		views: '253',
		likes: '6',
		id: 7,
	},
	{
		img: '/images/blog/blog8.jpg',
		url: '/',
		alt: 'Image-1',
		tag: 'Tutorials',
		tagUrl: '/',
		date: 'January 25, 2017',
		description:
			'“We Don’t Use Words to Tell a Story”: Directors Lily Baldwin',
		views: '81',
		likes: '1',
		id: 8,
	},
	{
		img: '/images/blog/blog9smm.jpg',
		url: '/',
		alt: 'Image-1',
		tag: 'Review',
		tagUrl: '/',
		date: 'January 25, 2017',
		description:
			'“Communicating with Respect and Openness”: Director José María Cabral',
		views: '65',
		likes: '2',
		id: 9,
	},
	{
		img: '/images/blog/blog10.jpg',
		url: '/',
		alt: 'Image-1',
		tag: 'Uncategorized',
		tagUrl: '/',
		date: 'January 25, 2017',
		description: 'I Want the Viewer to Feel Totally Immersed in My World',
		views: '76',
		likes: '0',
		id: 10,
	},
	{
		img: '/images/blog/blog11sm.jpg',
		url: '/',
		alt: 'Image-1',
		tag: 'Uncategorized',
		tagUrl: '/',
		date: 'January 25, 2017',
		description: 'I Want the Viewer to Feel Totally Immersed in My World',
		views: '76',
		likes: '0',
		id: 11,
	},
	{
		img: '/images/blog/blog9.jpg',
		url: '/',
		alt: 'Image-1',
		tag: 'Uncategorized',
		tagUrl: '/',
		date: 'January 25, 2017',
		description: 'I Want the Viewer to Feel Totally Immersed in My World',
		views: '76',
		likes: '0',
		id: 12,
	},
];

const Container = styled.div`
	.blog-item .blog-item-inner {
		padding: 30px;
		min-height: 205px;
		background-color: #fff;
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
		box-shadow: 5px 5px 20px #eee;
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
		font-family: Ionicons;
		font-size: 40px;
		width: 40px;
		height: 40px;
		text-align: center;
		line-height: 40px;
		color: #fff;
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
		color: #fff;
		letter-spacing: 0.1em;
		background-color: #da0e2b;
		display: inline-block;
		width: auto;
		padding: 5px 10px;
		text-transform: uppercase;
		font-weight: bold;
		line-height: 1;
		font-family: Montserrat, Helvetica, Arial, sans-serif;
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
		font-family: Montserrat;
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
		color: #333;
		position: relative;
		font-weight: 400;
	}
	.blog-list-item {
		margin-bottom: 50px;
		border-bottom: 1px solid #f4f4f4;
		padding-bottom: 50px;
	}
`;
