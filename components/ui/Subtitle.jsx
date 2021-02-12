import React from 'react'
import styled from "styled-components"

const Subtitle = ({text, className}) => {
    return (
        <Container className={className} dangerouslySetInnerHTML={{__html: text}} />
    )
}

const Container = styled.h3`
    color: var(--primary);
    font-size: 14px;
    letter-spacing: .1em;
    font-family: var(--display);
    font-weight: 400;
    line-height: 1.2;
    text-transform: uppercase;
    margin-bottom: 22px;
`

export default Subtitle
