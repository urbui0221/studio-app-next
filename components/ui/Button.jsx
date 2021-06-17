import React from "react"
import styled from 'styled-components'
const Button = ({title,color, backgroundColor, padding}) => {
  return (
      <Container color={color} backgroundColor={backgroundColor} padding={padding} href="#" target="_self">
      {title}
  </Container>
  )
}

const Container = styled.a`
  display: inline-block;
  background-color: ${props => props.backgroundColor ? props.backgroundColor : 'transparent'};
  color: ${props => props.color ? props.color : 'var(--primary)'};
  font-size: 14px;
  font-family: Montserrat;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  line-height: 46px;
  height: 48px;
  border: 1px solid var(--primary);
  padding: ${props => props.padding || '0 40px'};
  :hover {
    background-color: ${props => props.color ? props.color : 'var(--primary)'};
    color: ${props => props.backgroundColor ? props.backgroundColor : '#ffffff'};
  }
`

export default Button
