import React from "react"
import styled from 'styled-components'
const ServiceList = ({ number, title, content }) => {
  return (
    <Container>
      <div className='item'>
        <span className='number'>{number}</span>
        <span className='title'>{title}</span>
        <span className='content'>{content}</span>
      </div>
    </Container>
  )
}

const Container = styled.div`
  .item {
    display: block;
    width: 100%;
    margin-top: 40px;
    padding-left: 50px;
    position: relative;
  }
  .item .number {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 24px;
    font-weight: 700;
    font-family: var(--display);
    color: var(--primary);
    opacity: 0.5;
    -ms-transform: rotate(-90deg);
    -webkit-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    transform: rotate(-90deg);
  }
  .item .title {
    display: block;
    font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;
    font-family: var(--display);
    color: var(--tertiary2);
  }
  .item .content {
    font-family: var(--font3);
    margin-top: 10px;
    display: block;
  }
`

export default ServiceList
