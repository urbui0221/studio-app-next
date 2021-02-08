import React from 'react'
import styled from 'styled-components'
import useSWR from 'swr'
import Cover from '../../components/sections/Cover'
import SingalBlog from '../../components/sections/SingalBlog/Blog'
import fetcher from '../../utils/fetcher'

export const getServerSideProps = async({query}) => {
   return {
       props : { query}
   }
}

const Blog = ({ query }) => {
    console.log(query.blogid)
    const { data,error } = useSWR('/api/blogData',fetcher);

    if(!data){
        return <div>Loading...</div>
    }

    const routeData = data?.find(blog => blog.id.toString() === query.blogid);
    console.log(routeData.pageData);

    return (
        <>
            <Cover background="/images/background/bg_11.jpg" big_style={false} title={'Blog'} route={'Blog'} />
            <SingalBlog BlogData={routeData.pageData}/>
        </>
    )
}

const Container = styled.div`

`

export default Blog

