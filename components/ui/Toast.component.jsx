import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const Toast = ({text,...animationProps}) => {
    return (
        <Toastify {...animationProps}>
           {text}
        </Toastify>
    )
}

export default Toast

const Toastify = styled(motion.div)`
position:fixed;
background-color : white;
width:max-content;
box-shadow:0px 2px 5px rgba(0,0,0,0.1);
bottom: 3rem;
left : 50%;
transform : translate(-50%);
padding: 1rem 2rem;
border-radius: 5px;
z-index:100;
text-align:center;
font-weight: 600;
@media only screen and (max-width : 900px){
    width:70%;
}
@media only screen and (max-width : 600px){
    width:90%;
}
`
