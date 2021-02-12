import React from "react"
import styled from "styled-components"

const FooterWidgetTitle = ({title}) => {
    return (
        <FooterWidgetTitleContainer>{title}</FooterWidgetTitleContainer>
    )
}

export default FooterWidgetTitle

const FooterWidgetTitleContainer = styled.h3`
    margin-bottom: 30px;
    padding-bottom: 10px;
    color: var(--baseBg);
    font-family: var(--head);
    font-weight: 400;
    font-size: 18px;
    letter-spacing: 0;
    position: relative;
:after {
    content: '';
    width: 30px;
    height: 1px;
    background-color: var(--primary);
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -ms-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
}
`
