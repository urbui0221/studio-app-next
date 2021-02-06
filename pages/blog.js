import React from 'react'
import useSWR from 'swr'
import BlogContainer from '../components/sections/Blog/BlogContainer'
import Cover from '../components/sections/Cover'
import fetcher from '../utils/fetcher'


const Blog = () => {

    const { data,error } = useSWR('/api/blogData',fetcher);

    if(!data){
        return <div>Loading....</div>
    }
    return (
        <>
        <Cover background="/images/background/bg_11.jpg" big_style={false} title={'Blog'} route={'Blog Masonry'} />
         <BlogContainer state={data}/>             
        </>
    )
}

export default Blog

