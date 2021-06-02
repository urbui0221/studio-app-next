import { route } from 'next/dist/next-server/server/router';
import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import useSWR from 'swr';
import Layout from '../../components/layouts/Layout.component';
import Cover from '../../components/sections/Cover';
import SingalBlog from '../../components/sections/SingalBlog/Blog';
import Loader from '../../components/ui/Loader.component';
import fetcher from '../../utils/fetcher';
import ErrorPage from '../404';

export const getServerSideProps = async ({ query }) => {
	return {
		props: { query },
	};
};

const Blog = ({ query }) => {
	const { data, error } = useSWR('/api/blogData', fetcher);

	if (!data) {
		return <Loader />;
	}
	const routeData = data?.find((blog) => blog.id == query.blogid);

	if(!routeData){
		return <ErrorPage />
	}
	return (
		<>
			<Head>
				<meta property='og:url' content={`${window.location.href}`} />
				<meta property='og:type' content='website' />
				<meta name='og:title' content={routeData.pageData.title} />
				<meta
				name='description'
				content={`${routeData.cardData.description}`}
				/>
				<meta
				property='og:image'
					content={`${window.location.origin}${routeData.pageData.image}`}
				/>
			</Head>
			<Layout route={routeData.pageData.title}>
				<Cover
					background='/images/background/bg_11.jpg'
					big_style={false}
					title={'Blog'}
					route={'Blog'}
				/>
				<SingalBlog BlogData={routeData.pageData} date={routeData.cardData.date} />
			</Layout>
		</>
	);
};

const Container = styled.div``;

export default Blog;
