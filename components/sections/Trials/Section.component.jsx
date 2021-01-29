import React from 'react'
import styled, { css } from 'styled-components'
import Button from '../../ui/Button.component'

const Section = ({Icon,heading,description,btnTxt,children,...otherProps}) => {
    return (
       <CommonSection 
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
    )
}

export default Section

const CommonSection = styled.section`
padding-top: 10rem;
padding-bottom: 10rem;
text-align: center;
font-family : var(--font3);
width: 100%;
background-color : ${props => props.bgColor || "#fff"};
position: relative;
h1{
    font-size : 5rem;
    font-weight : 800;
}
p{
    margin-top : 1.5rem;
}
${ props => props.bgColor === '#D0D0D0' && css`
    &::before{
        top: 0;
        background-image: url(/images/try/wave-top.svg);
        left: 0;
        right: 0;
        height: 8rem;
        content: '';
        position: absolute;
        background-size: 100% 100%;
    }
    &::after{
        bottom: 0;
        background-image: url(/images/try/wave-bottom.svg);
        left: 0;
        right: 0;
        height: 8rem;
        content: '';
        position: absolute;
        background-size: 100% 100%;
    }
}
`}

.content-container{
    margin: -1.5rem;
    &--icon{
        margin-bottom : 1.5rem;
    }
}

`

const TrBtn = styled(Button)`
padding : 1.5rem 3rem;
background-color : var(--primary);
text-transform : uppercase;
margin-top : 1.5rem;
`