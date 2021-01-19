import React from "react"
import styled from 'styled-components'
const Button = ({title}) => {
  return (
      <Container href="#" target="_self">
      {title}
  </Container>
  )
}

const Container = styled.a`
  display: inline-block;
  background-color: transparent;
  color: #da0e2b;
  font-size: 14px;
  font-family: Montserrat;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  line-height: 46px;
  height: 48px;
  border: 1px solid #da0e2b;
  padding: 0 40px;
  :hover {
    background-color: #da0e2b;
    color: #fff;
  }
`

export default Button
