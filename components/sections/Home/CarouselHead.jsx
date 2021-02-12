import { AnimatePresence,motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState,useRef,useEffect } from 'react'
import { BsChevronLeft,BsChevronRight } from 'react-icons/bs'
import fetcher from '../../../utils/fetcher'
import styled from 'styled-components';
import useSWR from 'swr';
import Button from '../../ui/Button.component'

const CarouselHead = () => {
    const [slide,setSlide] = useState(0);
    const [showControllers,setControls] = useState(true);

    let contentItemRef = useRef(null);

    const carouselController = type => {
        return type === 'increment' ? 
        setSlide(slide === 2 ? 0 : slide + 1) 
        :  setSlide(slide === 0 ? 2 : slide - 1) 
    }
      const durTime = 0.3;

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
        return <div>Loading...</div>
    }

    return (
      <HeaderSlider  
      onMouseEnter={() => setControls(true)} 
      onMouseLeave ={() => setControls(false)}>
          <div className="content">
            <div className="content-items" ref={el => contentItemRef = el}>
                {/*<h1>
                    { slide < 10 ? "0" + (slide + 1) : (slide + 1) }&nbsp;<sup><span>/0{carouselImgs.length}</span></sup>
                </h1> */}
                {
                    data.headerText.map((text,id) => {
                        if(slide === id){
                            return <p dangerouslySetInnerHTML={{ __html : text }}/>

                        }
                    })
                }
                <AnimatePresence>
                           {
                            <HireButton 
                            variants={HirebtnVariants}
                            initial={"from"}
                            animate={"to"}
                            exit="exit"
                            bgcolor="var(--primary)">HIRE US NOW</HireButton>
                           }
                </AnimatePresence>
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
                        return <Image 
                        className="img"
                        src={image} 
                        layout="fill" 
                        quality={100} 
                        priority 
                        alt="image" 
                    />
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
bottom: -15rem;
left: 0;
`

const HeaderSlider = styled.div`
width : 100%;
height : calc(100vh - 101px);
display : flex;
max-width: 95%;
margin : 0 auto;
position : relative;
.content{
    background-color : var(--tertiary2);
    flex : 0.4;
    &-items{
        display : flex;
        margin : 4rem 6vw;
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
    }
}
.image{
    background-color : black;
    flex : 0.6;
    position : relative;
    overflow : hidden;
    .img{
        object-fit : cover;
    }
}
`

const CarouselTogglers = styled(Button)`
z-index: 9999;
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