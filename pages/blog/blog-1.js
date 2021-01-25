import React from 'react'
import styled from 'styled-components'
import Cover from '../../components/sections/Cover'
import SingalBlog from '../../components/sections/SingalBlog/Blog'

const Blog = () => {

    return (
        <>
        <Cover background="/images/background/bg_11.jpg" big_style={false} title={'Blog'} route={'Blog'} />
        <SingalBlog />
        </>
    )
}

const Container = styled.div`

`

export default Blog
