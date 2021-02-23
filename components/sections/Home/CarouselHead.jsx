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
          <div className="content">
            <div className="content-items" ref={el => contentItemRef = el}>
                    {
                        data.headerText.map((text,id) => {
                            if(slide === id){
                                return <AnimatePresence key={id}>
                                     <motion.p 
                                        variants={Carouselvariants}
                                        initial="from"
                                        animate="to"
                                        exit="exit"
                                        dangerouslySetInnerHTML={{ __html : text }}/>
                                </AnimatePresence>
                            }
                        })
                    }
                <HireButton bgcolor="var(--primary)">HIRE US NOW</HireButton>
            </div>
          </div>
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
      </HeaderSlider>
    )
}

export default CarouselHead

const HireButton = styled(Button)`
padding : 1.5rem 3rem;
align-self: flex-start;
position : absolute;
bottom: -7rem;
left: 0;
`

const HeaderSlider = styled.div`
width : 100%;
height : calc(100vh - 101px);
display : flex;
max-width: 95%;
margin : 0 auto;
position : relative;
@media only screen and (max-width: 992px){
      height : 100vh;
      max-width: 90%;
}
.content{
    background-color : var(--tertiary2);
    flex : 0.35;
    position : relative;
    @media only screen and (max-width: 1400px){
        flex : 0.5;  
        padding : 0 2rem           
    }
    @media only screen and (max-width: 900px){
        position : absolute;
        z-index : 1;
        top: 50%;
        left: 50%;
        transform : translate(-50%, -50%);
        height : 100%;
        background-color : #33333350;
        width : 100%;
    }
    &-items{
        position:absolute;
        top: 45%;
        left: 50%;
        transform : translate(-50%, -50%);
        max-width : 50rem;
        display : flex;
        flex-direction: column;
        position : relative;
        h1{
            color : var(--primary);
            font-size : 4rem;
            margin-top : 5rem;
            span{
                font-size : 1.5rem;
                padding : 0;
                line-height : 0;
                color : var(--baseBg);
                font-weight : 400;
            }
        }
        p{
            font-family : var(--head);
            font-size : 4rem;
            text-justify :distribute;
            word-spacing : 3px;
            margin-top : 10rem;
            color : #ABABAB;
        }
        @media only screen and (max-width: 550px){
                max-width : 100%;
                top: 50%;
                p{
                    font-size : 3rem;
                }
            }
    }
}
.image{
    background-color : black;
    flex : 0.65;
    position : relative;
    overflow : hidden;
    .img{
        width : 100%;
        height : 100%;
        object-fit : cover;
    }
    @media only screen and (max-width: 1400px){
        flex : 0.5;            
    }
    @media only screen and (max-width: 900px){
       flex : 1;
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
margin : 0 -2rem;
`
const ButtonFlex = styled.div`
display: flex;
justify-content : space-between;
align-content:center;
position:absolute;
width: 100%;
top: 50%
`;
