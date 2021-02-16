import React from 'react'
import styled, { css } from 'styled-components'
import Button from '../../ui/Button.component'

const Section = ({Icon,heading,description,btnTxt,children,...otherProps}) => {
    return (
       <>
{   otherProps.bgColor &&  <svg style={{ marginBottom : '-1.5rem' }}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E7E7E7" fillOpacity={1} d="M0,224L48,208C96,192,192,160,288,165.3C384,171,480,213,576,202.7C672,192,768,128,864,117.3C960,107,1056,149,1152,176C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" /></svg>       
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
{ otherProps.bgColor &&  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E7E7E7" fillOpacity={1} d="M0,224L48,208C96,192,192,160,288,165.3C384,171,480,213,576,202.7C672,192,768,128,864,117.3C960,107,1056,149,1152,176C1248,203,1344,213,1392,218.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" /></svg>}       </>
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
h1{
    font-size : 5rem;
    font-weight : 800;
}
p{
    margin-top : 1.5rem;
    max-width: 80rem;
    margin: 0 auto;
}
.content-container{
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