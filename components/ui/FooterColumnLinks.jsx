import React from 'react'
import styled from 'styled-components'
import FooterWidgetTitle from "./FooterWidgetTitle"

const FooterColumnLinks = ({arr, title}) => (
    <FooterColumnLinksContainer>
    <div className="col-md-3 mb-3">
    <div className="widget">
    <FooterWidgetTitle title={title} />
    <ul>
    {arr.map((link, index) => (
        <li key={index}><a href={link.url}>{link.linkName}</a></li>
        ))}
    </ul>
    </div>
    </div>
</FooterColumnLinksContainer>
)

export default FooterColumnLinks;

const FooterColumnLinksContainer = styled.div`
 .widget ul {
    list-style: none;
    padding: 0;
}
 .widget ul li {
    margin-bottom: 15px;
    line-height: 1.6;
}
 .widget ul li a {
    position: relative;
    color: #ababab;
}
 .widget ul li a:hover {
    padding-left: 15px;
    color: var(--primary);
}
 .widget ul li a:hover:before {
    position: absolute;
    content: '\f462';
    font-family: var(--icon);
    left: 0;
    top: 0;
    color: var(--primary);
    line-height: 18px;
}
`
