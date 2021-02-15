import React from 'react'
import styled from 'styled-components'
import useSWR from 'swr'
import Layout from '../../components/layouts/Layout.component';
import Cover from '../../components/sections/Cover'
import SingalBlog from '../../components/sections/SingalBlog/Blog'
import Loader from '../../components/ui/Loader.component'
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
        return <Loader />
    }

    const routeData = data?.find(blog => blog.id == query.blogid);
    console.log(routeData.pageData);

    return (
        <Layout route={routeData.pageData.title}>
            <Cover background="/images/background/bg_11.jpg" big_style={false} title={'Blog'} route={'Blog'} />
            <SingalBlog BlogData={routeData.pageData}/>
        </Layout>
    )
}

const Container = styled.div`

`

export default Blog

