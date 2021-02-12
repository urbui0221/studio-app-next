import React from 'react'
import styled from "styled-components"

const AwardsIconBox = ({title, description}) => {
    return (
        <Container>
        <div className='col-sm-6'>
        <div className='icon-boxes icon-boxes-small'>
          <div className='icon-boxes-icon'>
            <i className='ion-trophy'></i>
          </div>
          <h5 className='icon-boxes-title white'>
            {" "}
            {title}
          </h5>
          <div className='icon-boxes-content gray'>
            {description}
          </div>
        </div>
      </div> 
        </Container>
    )
}

const Container = styled.div`
.icon-boxes .icon-boxes-icon i {
    font-size: 15px;
    padding: 8px;
    border-radius: 50%;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -ms-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
}

.icon-boxes-small .icon-boxes-icon {
    font-size: 14px;
    color: var(--primary);
	display: inline-block;
	padding-top: 0;
}
.icon-boxes-small .icon-boxes-title {
    margin-top: 10px;
    margin-bottom: 10px;
    letter-spacing: .05em;
    font-size: 14px;
    font-weight: 700;
	font-family: var(--display);
	display: inline-block;
	text-transform: uppercase;
}
`

export default AwardsIconBox
