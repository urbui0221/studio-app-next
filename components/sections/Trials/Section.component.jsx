import React from 'react'
import styled, { css } from 'styled-components'
import Button from '../../ui/Button.component'

const Section = ({Icon,heading,description,btnTxt,children,...otherProps}) => {
    return (
       <>
{   otherProps.bgColor && <svg style={{marginBottom: -10}} version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 viewBox="0 0 1920 150">
<path class="st0" fill={'#f5f5f5'} d="M1920,150V0c-285.7,8.1-475.1,27.3-598.6,44.3c-58.7,8.1-147.1,21.9-268,17.7c-54.5-1.9-117.3-8.4-243-21.5
	c-122.8-12.8-125.1-15-176-18.9c-37.1-2.9-141.3-9.8-272.3-2C267,25.3,143,39.6,0,75v75H1920z"/>
</svg>
    
}        <CommonSection 
       {...otherProps}>
          <div className="content-container">
                { Icon && <div className="content-container--icon">
                            <Icon /> 
                        </div>}
                <h1>{heading}</h1>
                { description && <p>{description}</p> }
                    {btnTxt && <TrBtn>{btnTxt}</TrBtn>}
                { children }
          </div>
       </CommonSection>
{ otherProps.bgColor && <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 viewBox="0 0 1920 150">
<path class="st0" fill={'#f5f5f5'} d="M1920,0v150c-173.5-11.6-314.8-28-413.4-41.2c-190.3-25.4-208.1-36.9-301.3-36.7
	c-177.1,0.4-194.2,42-391.5,42.3c-104.4,0.1-203.9-11.4-274.3-19.5C408.1,79.7,388.6,69,319.2,65.8C243.6,62.3,134.9,68.9,0,117.7V0
	H1920z"/>
</svg>
}       </>
    )
}

export default Section

const CommonSection = styled.section`
margin: ${props => props.margin || '0rem'};
text-align: center;
font-family : var(--font3);
width: 100%;
background-color : ${props => props.bgColor || "#fff"};
display :flex;
flex-direction: column;
justify-content:center;
align-items: center;
padding : 0rem 2rem;
h1{
    font-size : 4.5rem;
    font-weight : 800;
}
p{
    margin-top : 1.5rem;
    max-width: 80rem;
    margin: 0 auto;
}
@media only screen and (max-width : 775px){
   h1{
    font-size : 3rem;
   }
   p{
       max-width : 100%;
   }
}
.content-container{
    position: relative;
    top : ${props => props.moveTop};
    &--icon{
        margin-bottom : 1.5rem;
    }
}

`

const TrBtn = styled(Button)`
padding : 1.5rem 3rem;
background-color : var(--primary);
text-transform : uppercase;
margin-top : 3rem;
`
