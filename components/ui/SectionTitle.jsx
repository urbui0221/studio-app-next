import React from 'react'
import styled from "styled-components"

const SectionTitle = ({text, className}) => {
    return (
        <Container className={className} dangerouslySetInnerHTML={{__html: text}} />
    )
}

const Container = styled.h2`
    font-size: 34px;
    color: var(--tertiary2);
    line-height: 1.4em;
    font-family: var(--head);
    font-weight: 400;
    font-style: normal;
    text-transform: none;
`

export default SectionTitle
