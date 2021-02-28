import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import ReactMarkDown from 'react-markdown';
import gfm from 'remark-gfm';
import Newsletter from '../Blog/Newsletter';
import Toast from '../../ui/Toast.component';
import { AnimatePresence } from 'framer-motion';
import { ToastContext } from '../../utils/ToastState';

const SingalBlog = ({ BlogData, date }) => {
	const [blog, setBlog] = useState('');
	useEffect(() => {
		const _blog = require(`../../../blogs/${BlogData.description}`);
		setBlog(_blog.default);
	}, [blog, setBlog]);
	const { subscribe,submsg } = useContext(ToastContext)

	const ToastVariants = {
		from : {
		  opacity : 0
		},
		to : {
			opacity : 1,
			transition : {
				duration : 0.3
			} 
		},
		exit : {
			opacity : 0,
			transition : {
				duration : 0.3
			} 
		}
	  }
	return (
		<Container>
			<div className='section pt-12 pb-12'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12'>
							<div className='blog-detail'>
								<div className='single-post-thumbnail'>
									<img
										draggable={false}
										src={BlogData.image}
										alt={BlogData.altImageText}
									/>
								</div>
								<h4 className='entry-title'>
									{BlogData.title}
								</h4>

								<span className='posted-on'>{date}</span>

								<div className='entry-content mb-3 blog-description'>
									<MarkdownContainer>
										<ReactMarkDown
											allowDangerousHtml={true}
											plugins={[gfm]}
											children={blog}
										/>
									</MarkdownContainer>
								</div>
								<div className='entry-footer'>
									<div className='row'>
										<div className='col-md-6'></div>
										<div className='col-md-6'>
											<div className='entry-share'>
												<ul className='film-social'>
													<li>
														<a
															data-original-title='Facebook'
															target='_blank'
															href={`https://www.facebook.com/sharer.php?u=${window.location.href}`}
														>
															{' '}
															<i className='fa fa-facebook'></i>
														</a>
													</li>
													<li>
														<a
															data-original-title='Twitter'
															target='_blank'
															href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=BLOG&via=vishwajeet323`}
														>
															<i className='fa fa-twitter'></i>
														</a>
													</li>
													<li>
														<a
															data-original-title='LinkedIn'
															target='_blank'
															href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`}
														>
															<i className='fa fa-linkedin'></i>
														</a>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div className='entry-author'>
									<div className='row'>
										<div className='col-md-2'>
											{!BlogData.author.img ? (
												<img
													alt=''
													draggable={false}
													src='/images/avatar/default.png'
												/>
											) : (
												<img
													alt=''
													draggable={false}
													src={BlogData.author.img}
												/>
											)}
										</div>
										<div className='col-md-10'>
											<div className='mt-1'></div>
											<h3 className='name'>
												{BlogData.author.name}
											</h3>
											<div className='desc'>
												{BlogData.author.description}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Newsletter />
			<AnimatePresence>
				{
					subscribe && submsg && <Toast 
					variants={ToastVariants}
					initial={"from"}
					animate={"to"}
					exit="exit"
					text={submsg}/>				
				}
			</AnimatePresence>
		</Container>
	);
};

export default SingalBlog;
const MarkdownContainer = styled.div`
	html,
	address,
	blockquote,
	body,
	dd,
	div,
	dl,
	dt,
	fieldset,
	form,
	frame,
	frameset,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	noframes,
	ol,
	p,
	ul,
	center,
	dir,
	hr,
	menu,
	pre {
		display: block;
		unicode-bidi: embed;
	}
	li {
		display: list-item;
	}
	head {
		display: none;
	}
	table {
		display: table;
	}
	tr {
		display: table-row;
	}
	thead {
		display: table-header-group;
	}
	tbody {
		display: table-row-group;
	}
	tfoot {
		display: table-footer-group;
	}
	col {
		display: table-column;
	}
	colgroup {
		display: table-column-group;
	}
	td,
	th {
		display: table-cell;
	}
	caption {
		display: table-caption;
	}
	th {
		font-weight: bolder;
		text-align: center;
	}
	caption {
		text-align: center;
	}
	body {
		margin: 8px;
	}
	h1 {
		font-size: 2em;
		margin: 0.67em 0;
	}
	h2 {
		font-size: 1.5em;
		margin: 0.75em 0;
	}
	h3 {
		font-size: 1.17em;
		margin: 0.83em 0;
	}
	h4,
	p,
	blockquote,
	ul,
	fieldset,
	form,
	ol,
	dl,
	dir,
	menu {
		margin: 1.12em 0;
	}
	h5 {
		font-size: 0.83em;
		margin: 1.5em 0;
	}
	h6 {
		font-size: 0.75em;
		margin: 1.67em 0;
	}
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	b,
	strong {
		font-weight: bolder;
	}
	blockquote {
		margin-left: 40px;
		margin-right: 40px;
	}
	i,
	cite,
	em,
	var,
	address {
		font-style: italic;
	}
	pre,
	tt,
	code,
	kbd,
	samp {
		font-family: monospace;
	}
	pre {
		white-space: pre;
	}
	button,
	textarea,
	input,
	select {
		display: inline-block;
	}
	big {
		font-size: 1.17em;
	}
	small,
	sub,
	sup {
		font-size: 0.83em;
	}
	sub {
		vertical-align: sub;
	}
	sup {
		vertical-align: super;
	}
	table {
		border-spacing: 2px;
	}
	thead,
	tbody,
	tfoot {
		vertical-align: middle;
	}
	td,
	th,
	tr {
		vertical-align: inherit;
	}
	s,
	strike,
	del {
		text-decoration: line-through;
	}
	hr {
		border: 1px inset;
	}
	ol,
	ul,
	dir,
	menu,
	dd {
		margin-left: 40px;
	}
	ol {
		list-style-type: decimal;
	}
	ol ul,
	ul ol,
	ul ul,
	ol ol {
		margin-top: 0;
		margin-bottom: 0;
	}
	u,
	ins {
		text-decoration: underline;
	}
	br:before {
		content: '\A';
		white-space: pre-line;
	}
	center {
		text-align: center;
	}
	:link,
	:visited {
		text-decoration: underline;
	}
	:focus {
		outline: thin dotted invert;
	}
	ul,
	ol {
		list-style-type: initial;
	}
	/* Begin bidirectionality settings (do not change) */
	BDO[DIR='ltr'] {
		direction: ltr;
		unicode-bidi: bidi-override;
	}
	BDO[DIR='rtl'] {
		direction: rtl;
		unicode-bidi: bidi-override;
	}

	*[DIR='ltr'] {
		direction: ltr;
		unicode-bidi: embed;
	}
	*[DIR='rtl'] {
		direction: rtl;
		unicode-bidi: embed;
	}

	@media print {
		h1 {
			page-break-before: always;
		}
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			page-break-after: avoid;
		}
		ul,
		ol,
		dl {
			page-break-before: avoid;
		}
	}
`;
const Container = styled.div`
	.blog-description {
		font-family: var(--font3);
	}
	.blog-detail .single-post-thumbnail {
		margin-bottom: 35px;
		position: relative;
	}
	.blog-detail .single-post-thumbnail .list-categories {
		position: absolute;
		right: 20px;
		bottom: 20px;
		font-family: var(--display);
	}
	.blog-detail .single-post-thumbnail .list-categories a {
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
	}
	.blog-detail .entry-title {
		margin-bottom: 15px;
		color: var(--tertiary2);
		letter-spacing: 0;
		font-weight: 400;
		font-size: 24px;
		font-family: var(--head);
	}
	.blog-detail .meta {
		margin-bottom: 15px;
		margin-top: 20px;
	}
	.blog-detail .meta > span {
		display: inline-block;
		margin-right: 20px;
	}
	.blog-detail .meta > span.view:before {
		content: '\f133';
		font-family: var(--icon);
		font-size: 16px;
		color: var(--primary);
		margin-right: 10px;
	}
	.blog-detail .meta > span.like a:before {
		content: '\f387';
		font-family: var(--icon);
		font-size: 16px;
		color: var(--primary);
		margin-right: 10px;
		display: inline-block;
	}
	.blog-detail .meta > span.comment:before {
		content: '\f11a';
		font-family: var(--icon);
		font-size: 16px;
		color: var(--primary);
		margin-right: 10px;
	}
	.blog-detail .entry-footer {
		margin-bottom: 20px;
	}
	.blog-detail .tags {
		font-family: var(--display);
	}
	.blog-detail .tags .tag-icon {
		color: var(--gray67);
		font-size: 16px;
		margin-right: 15px;
	}
	.blog-detail .entry-footer .tags a {
		-webkit-border-radius: 2px;
		-moz-border-radius: 2px;
		border-radius: 2px;
		font-size: 14px;
		color: var(--gray67);
		margin-right: 5px;
		margin-bottom: 8px;
		display: inline-block;
	}
	.blog-detail .entry-footer .tags a:hover {
		color: var(--primary);
	}
	.blog-detail .entry-footer .entry-share {
		text-align: right;
	}
	.blog-detail .entry-author {
		padding: 40px 0;
		border-top: 1px solid var(--whiteSmoke);
	}
	.blog-detail .entry-author img {
		border-radius: 50%;
		border: 5px solid #f2f2f2;
	}
	.blog-detail .entry-author .name {
		font-size: 14px;
		color: var(--tertiary2);
		letter-spacing: 0.05em;
		margin-bottom: 10px;
	}
	.blog-detail .entry-author .desc {
		font-family: var(--font3);
		font-size: 15px;
		line-height: 1.6em;
		color: var(--dimGray);
	}
	.blog-detail .entry-nav {
		padding: 40px 30px;
		background: #f8f7f7;
		border: 1px solid var(--whiteSmoke);
		font-size: 18px;
		font-weight: 700;
		font-family: var(--display);
	}
	.blog-detail .entry-nav .left i,
	.blog-detail .entry-nav .right i {
		-webkit-transition: all 0.5s;
		-moz-transition: all 0.5s;
		-ms-transition: all 0.5s;
		-o-transition: all 0.5s;
		transition: all 0.5s;
		color: var(--gray67);
	}
	.blog-detail .entry-nav .left:hover i,
	.blog-detail .entry-nav .right:hover i {
		color: var(--primary);
	}
	.blog-detail .entry-nav a {
		text-transform: none;
		color: var(--gray67);
		outline: 0;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		width: 90%;
		display: inline-block;
		vertical-align: middle;
	}
	.blog-detail .entry-nav .left:hover a,
	.blog-detail .entry-nav .right:hover a {
		color: #332b28;
	}
	.blog-detail .entry-nav .left a {
		padding-left: 10px;
	}
	.blog-detail .entry-nav .right a {
		padding-right: 10px;
	}
	.film-social li {
		margin-right: 10px;
		position: relative;
		display: inline-block;
	}
	.film-social a {
		display: inline-block;
		width: 40px;
		height: 40px;
		line-height: 38px;
		text-align: center;
		border: 1px solid var(--whiteSmoke);
		border-radius: 20px;
		font-size: 14px;
		color: var(--dimGray);
	}
	.film-social li:hover > a {
		background-color: var(--primary);
		color: var(--baseBg);
	}
	.film-social .tooltip.top .tooltip-arrow {
		border-top-color: var(--primary);
	}
	.film-social .tooltip-inner {
		background-color: var(--primary);
	}
	.blog-item.style-2 .blog-info-date .posted-on {
		margin-right: 20px;
		color: #ccc;
	}
`;
