import React from 'react'
import BlogContainer from '../components/sections/Blog/BlogContainer'
import Cover from '../components/sections/Cover'

const Blog = () => {
    return (
        <>
        <Cover background="/images/background/bg_11.jpg" big_style={false} title={'Blog'} route={'Blog Masonry'} />
        {/*  <BlogContainer />             */}
        </>
    )
}

export default Blog
