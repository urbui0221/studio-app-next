import React from 'react'
import useSWR from 'swr'
import Layout from '../components/layouts/Layout.component';
import BlogContainer from '../components/sections/Blog/BlogContainer'
import Cover from '../components/sections/Cover'
import Loader from '../components/ui/Loader.component'
import fetcher from '../utils/fetcher'


const Blog = () => {

    const { data,error } = useSWR('/api/blogData',fetcher);

    if(!data){
        return <Loader />
    }
    return (
        <Layout route="Blog">
        <Cover background="/images/background/bg_11.jpg" big_style={false} title={'Blog'} route={'Blog Masonry'} />
         <BlogContainer state={data}/>             
        </Layout>
    )
}

export default Blog

