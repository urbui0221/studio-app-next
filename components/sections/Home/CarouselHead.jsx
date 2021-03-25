import { AnimatePresence,motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState,useRef,useEffect } from 'react'
import { BsChevronLeft,BsChevronRight } from 'react-icons/bs'
import fetcher from '../../../utils/fetcher'
import styled from 'styled-components';
import useSWR from 'swr';
import Button from '../../ui/Button.component'
import Loader from '../../ui/Loader.component';

const CarouselHead = () => {
    const [slide,setSlide] = useState(0);
    const [showControllers,setControls] = useState(true);

    const carouselController = type => {
        return type === 'increment' ? 
        setSlide(slide === 2 ? 0 : slide + 1) 
        :  setSlide(slide === 0 ? 2 : slide - 1) 
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setSlide(slide === 2 ? 0 : slide + 1)
        }, 10000); 
        return () => clearTimeout(timer);
    },[slide])

    const contentData = [
        {
            title : 'film <br>+ video<br>productions',
            para : `We are a creative film and photo production company based in Berlin.<br>                    
            Working with a network of diverse professionals,<br> we believe in the importance of strong visual communication.`
        },
        {
            title : 'film <br>+ video<br>productions',
            para : `We are a creative film and photo production company based in Berlin.<br>                    
            Working with a network of diverse professionals,<br> we believe in the importance of strong visual communication.`
        },
        {
            title : 'film <br>+ video<br>productions',
            para : `We are a creative film and photo production company based in Berlin.<br>                    
            Working with a network of diverse professionals,<br> we believe in the importance of strong visual communication.`
        }
    ]


      const durTime = 0.5;

      const HirebtnVariants = {
        from : {
            opacity : 0
        },
        to : {
            opacity : 1,
            transition : {
                duration : durTime
            } 
        },
        exit : {
            opacity : 0,
            transition : {
                duration : durTime
            } 
        }
    }
    const Carouselvariants = {
        from : {
            opacity : 0
        },
        to : {
            opacity : 1,
            transition : {
                duration : durTime
            } 
        },
        exit : {
            opacity : 0,
            transition : {
                duration : durTime
            } 
        }
    }

    const h1Variants = {
        from : {
            y: -218
        },
        to : {
            y : 0,
            transition : {
                duration : 0.8,
                ease : 'easeOut'
            } 
        },
        exit : {
            y: -218,
            transition : {
                duration : 0.8,
                ease : 'easeOut'
            } 
        }
    }

    const pVariants = {
        from : {
            y: 150,
            opacity : 0
        },
        to : {
            y : 0,
            opacity : 1,
            transition : {
                duration : 0.8,
                ease : 'easeOut'
            } 
        },
        exit : {
            y: 150,
            opacity : 0,
            transition : {
                duration : 0.8,
                ease : 'easeOut'
            } 
        }
    }

    

    const { data,error } = useSWR('/api/home',fetcher)
    
    if(!data){
        return <Loader />
    }

    return (
      <HeaderSlider  
      onMouseEnter={() => setControls(true)} 
      onMouseLeave ={() => setControls(false)}>
          <ButtonFlex>
                <AnimatePresence>
                   {
                       showControllers && <>
                       <CarouselTogglers
                        variants={HirebtnVariants}
                        initial={"from"}
                        animate={"to"}
                        exit="exit" 
                        onClick={() => carouselController('decrement')}>
                        <BsChevronLeft size="3rem" color="var(--secondary)" strokeWidth="0.7"/>
                        </CarouselTogglers>
                        <CarouselTogglers
                        variants={HirebtnVariants}
                        initial={"from"}
                        animate={"to"}
                        exit="exit" 
                        onClick={() => carouselController('increment')}>
                        <BsChevronRight size="3rem" color="var(--secondary)" strokeWidth="0.7"/>
                    </CarouselTogglers>
                       </>
                   }
                </AnimatePresence>
            </ButtonFlex>
            <div className="image">
                {
                    data.images.map((image,id) => {
                        if(slide === id){
                            return <AnimatePresence 
                            key={id}
                            exitBeforeEnter>
                                    <motion.img 
                                    className="img"
                                    src={image} 
                                    alt="image" 
                                    variants={Carouselvariants}
                                    initial={"from"}
                                    animate={"to"}
                                    exit="exit" 
                                    />
                            </AnimatePresence>
                        }
                    })
                }
            </div>
            <div className="content">
                    <div className="content-wrapper">
                    {
                              contentData.map(({ title,para },id) => {
                                 if(slide === id){
                                    return <AnimatePresence>
                                          <motion.h1
                                            dangerouslySetInnerHTML={{ __html : title }}
                                            variants={h1Variants}
                                            initial={"from"}
                                            animate={"to"}
                                            exit="exit" 
                                        />
                                        <motion.p
                                            dangerouslySetInnerHTML={{ __html : para }}
                                            variants={pVariants}
                                            initial={"from"}
                                            animate={"to"}
                                            exit="exit" 
                                            />
                                    </AnimatePresence>
                                 }
                              }) 
                           }
                    </div>
                    <HireButton bgcolor="var(--primary)">HIRE US NOW</HireButton>
            </div>
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
          <PrivacyPolicy>
           {
               ['privacy policy','terms and conditions', `let's chat`].map((policy,id) => (
                   <span key={id}>
                       {policy}
                   </span>
               ))
           }
          </PrivacyPolicy>
      </HeaderSlider>
    )
}

export default CarouselHead

const HireButton = styled(Button)`
padding : 1.5rem 3rem;
margin-top : 3rem;
@media only screen and (max-width : 600px){
    margin-top : 1rem;

}
`
const PrivacyPolicy = styled.div`
    position: absolute;
    right: 3rem;
    bottom: 3rem;
    display: flex;
    text-transform : uppercase;
    font-size : 1.2rem;
    span{
        &:not(:first-child){
            margin-left : 1rem;
        }
    }
`

const CarouselLinks = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 99;
  @media only screen and (max-width: 600px){
        right : -15px;
    }
    @media only screen and (max-width: 450px){
        right : -30px;
    }
  p {
      font-size: 1.5rem;
      font-weight: 700;
      letter-spacing: 0.5px;
        color: var(--baseBg);
        transform: rotate(270deg);
        text-transform: uppercase;
  }
  .line {
    background-color: var(--baseBg);
    height: 1px;
    width: 70px;
    margin-top: 90px;
    margin-bottom: 60px;
    transform: rotate(90deg);
  }

  .icons-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
      i {
        font-size: 2rem;
        color: var(--baseBg);
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

const HeaderSlider = styled.div`
width : 100%;
height : 100vh;
display : flex;
margin : 0 auto;
position : relative;
.image{
    background-color : black;
    flex : 1;
    position : relative;
    overflow : hidden;
    .img{
        width : 100%;
        height : 100%;
        object-fit : cover;
    }
}
.content{
    position : absolute;
    margin-left : 10rem;
    left : 0;
    top: 50%;
    transform : translate(0%,-50%);
    height :  max-content;
      &-wrapper{
        overflow : hidden;
        h1{
            text-transform : uppercase;
            color : var(--baseBg);
            line-height : 1;
            font-size : 9rem;
            font-weight: bold;
        }
        p{
            margin-top : 3rem;
            color : var(--baseBg);
        }
    }
    @media only screen and (max-width : 1200px){
        &-wrapper{
            h1{
                font-size : 7rem;
            }
        }
    }
    @media only screen and (max-width : 992px){
        margin-left : 5rem;
        top: none;
        bottom : 10%;
        transform : translate(0%,-20%);
        &-wrapper{
            h1{
                font-size : 5rem;
            }
            p{
                font-size : 1.2rem;
                max-width : 30rem;
            }
        }
    }
    @media only screen and (max-width : 600px){
        margin-left : 3rem;
        top: none;
        bottom : 10%;
        transform : translate(0%,10%);
        &-wrapper{
            h1{
                font-size : 3.5rem;
                font-weight : 800;
            }
            p{
                margin-top : 2rem;
            }
        }
    }
    
}
`

const CarouselTogglers = styled(Button)`
z-index: 5000;
display: flex;
justify-content: center;
align-items: center;
width: 6rem;
height: 6rem;
background-color: var(--baseBg);
margin : 0 1rem;
`
const ButtonFlex = styled.div`
display: flex;
justify-content : space-between;
align-content:center;
position:absolute;
width: 100%;
top: 50%
`;
