import React from 'react'
import styled, { css } from 'styled-components'
import Button from '../../ui/Button.component'

const Section = ({Icon,heading,description,btnTxt,children,...otherProps}) => {
    return (
       <>
{   otherProps.bgColor && <svg xmlns="http://www.w3.org/2000/svg" style={{ marginBottom : '-1.5rem' }}  viewBox="0 0 1440 320"><path fill="#f5f5f5" fillOpacity={1} d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,117.3C672,96,768,96,864,122.7C960,149,1056,203,1152,208C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" /></svg>
    
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
{ otherProps.bgColor && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f5f5f5" fillOpacity={1} d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,117.3C672,96,768,96,864,122.7C960,149,1056,203,1152,208C1248,213,1344,171,1392,149.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" /></svg>
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
padding : 3rem 2rem;
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