import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const Button = ({children,...otherBtnProps}) => {
    return (
       <Btn {...otherBtnProps}>
           {children}
       </Btn>
    )
}

export default Button


const Btn = styled(motion.button)`
-webkit-appearance : none;
outline: none;
border: none;
background-color: ${props => props.bgcolor || 'transparent'};
z-index: 1000;
cursor: pointer;
font-family: var(--display);
color : ${props => props.color || 'var(--baseBg)'};
font-size : 1.4rem;
padding : ${props => props.p || '0'};
`