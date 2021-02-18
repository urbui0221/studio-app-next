import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'

const ErrorPage = () => {
    const Router = useRouter();
    return (
     <PageError>
         <img 
            src={'/images/logo_alt.png'} 
            onClick={_ => Router.back('/')} 
            className="img"
        />
        <h2>oops! something went wrong!</h2> 
        <h1>404</h1>
        <p>please go back to <Link href="/">HomePage</Link></p>
        <Contact
        onClick={_ => Router.back('/contact')} 
        >
            Contact us
        </Contact>
        <CarouselLinks>
                <p>follow us</p>
                <div className='line'>&nbsp;</div>
                <div className='icons-container'>
                <a href='#'>
                    <i className='fa fa-facebook'></i>
                </a>
                <a href='#'>
                    <i className='fa fa-twitter'></i>
                </a>
                <a href='#'>
                    <i className='fa fa-instagram'></i>
                </a>
                <a href='#'>
                    <i className='fa fa-pinterest'></i>
                </a>
            </div>
          </CarouselLinks>
     </PageError>
    )
}

export default ErrorPage

const CarouselLinks = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 9997;
  p {
      font-size: 1.5rem;
      font-weight: 700;
      letter-spacing: 0.5px;
        color: black;
        transform: rotate(270deg);
        text-transform: uppercase;
  }
  .line {
    background-color: var(--secondary);
    height: 1px;
    width: 44px;
    margin-top: 100px;
    margin-bottom: 60px;
    transform: rotate(90deg);
    opacity: 0.7;
  }

  .icons-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
      i {
        font-size: 2rem;
        color: var(--secondary);
        transition: all 0.3s;
      }
      &:hover {
          i{
              color: var(--primary);
          }
      }

      margin-bottom: 10px;
    }
  }
`

const PageError = styled.div`
width : 100%;
height : 100vh;
display : flex;
justify-content: center;
align-items: center;
flex-direction:column;
position: relative;
.img{
    position : absolute;
    top : 2rem;
    left :9rem;
}
h1{
    background-image : linear-gradient(to bottom, rgba(255, 0, 0, 0.75), rgba(255, 0, 0, 0.75), rgba(255, 0, 0, 0.75)),url('/images/background/bg404.jpg');
    background-position: center;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-size: 35rem;
    font-weight: 700;
    margin : 0;
    line-height: 1.1;
    letter-spacing: -1px;
}
h2{
    font-size: 2.5rem;
    font-weight: 700;
    letter-spacing: 0.5rem;
    margin : 0;
    text-transform : uppercase;
}
p{
    text-transform : uppercase;
    a{
        font-weight: 700;
        width: max-content;
        padding-bottom: 2px;
        border-bottom: 1px solid var(--tertiary);
        &:hover {
            border-bottom: 1px solid var(--primary);
        }
    }
}
`

const Contact = styled.div`
    position: absolute;
    width: 360px;
    height: 189px;
    font-size: 24px;
    font-weight: 700;
    padding-top: 120px;
    padding-left: 40px;
    line-height: 1;
    color: var(--primary);
    font-weight : 900;
    background-image: url('/images/background/404_contact_bg.png');
    overflow: hidden;
    left: 0;
    bottom: 0;
    z-index: 98;
    font-weight : 600;
    cursor: pointer;
`
