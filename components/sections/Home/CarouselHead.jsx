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

    let contentItemRef = useRef(null);

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
                        <h1>
                        film <br />+ video<br />productions
                        </h1>
                        <p>
                            We are a creative film and photo production company based in Berlin.<br />                    
                            Working with a network of diverse professionals,<br /> we believe in the importance of strong visual communication.
                        </p>
                    </div>
                    <HireButton bgcolor="var(--primary)">HIRE US NOW</HireButton>
            </div>
      </HeaderSlider>
    )
}

export default CarouselHead

const HireButton = styled(Button)`
padding : 1.5rem 3rem;
margin-top : 3rem;
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
    transform : translate(0,50%);
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
        bottom : 0;
        &-wrapper{
            h1{
                font-size : 5rem;
            }
            p{
                font-size : 1.2rem;
            }
        }
    }
    
}
`

const CarouselTogglers = styled(Button)`
z-index: 20;
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
