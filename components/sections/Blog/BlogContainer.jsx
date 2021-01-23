import React from "react"
import styled from "styled-components"
const BlogContainer = ({ children, ...otherProps }) => {
  return (
    <Container>
      <div className='container pt-12 pb-12'>
        <div className='blog-grid'>
          <div className='blog blog-1'>Apple</div>
          <div className='blog blog-2'>Apple</div>
          <div className='blog blog-3'>Apple</div>
          <div className='blog blog-4'>Apple</div>
          <div className='blog blog-5'>Apple</div>
          <div className='blog blog-6'>Apple</div>
          <div className='blog blog-7'>Apple</div>
          <div className='blog blog-8'>Apple</div>
          <div className='blog blog-9'>Apple</div>
        </div>
      </div>
    </Container>
  )
}
const Container = styled.div`
  .blog {
    /* grid-column: span 4; */
    background-color: #27ae60;

    :nth-child(2n+3) {
        background-color: #f1c40f;
      }

    &-grid {
      display: grid;
      grid-template-columns: repeat( auto-fit, minmax(350px, 1fr) );
      /* grid-template-columns: repeat(350px, 1fr); */
      /* grid-template-rows: repeat(8, 100px); */
      grid-gap: 20px;
    }
 
    &-1 {
        /* grid-row: span 3; */
    } 
    &-2 {
        /* height: 800px; */
    }
  }
`
export default BlogContainer
