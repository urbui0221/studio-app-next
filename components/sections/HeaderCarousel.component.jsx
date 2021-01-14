import React from 'react'
import styled from 'styled-components'
import { BsChevronLeft,BsChevronRight } from 'react-icons/bs'
import Button from '../ui/Button.component'
import { AnimatePresence, motion } from 'framer-motion'

const carouselImgs = [
    "https://images.unsplash.com/photo-1505377059067-e285a7bac49b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80",
    "https://images.unsplash.com/photo-1602342629825-3caac6e02785?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1510582029005-689cfc56b48c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
]


const swiperCarousel = [
    {
        img :"https://images.unsplash.com/photo-1505377059067-e285a7bac49b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80",
        
    }
]

const HeaderCarousel = () => {

    const [carousel,setCarousel] = React.useState(0); 

    const carouselController = type => {
        return type === 'increment' ? 
        setCarousel(carousel === 2 ? 0 : carousel + 1) 
        :  setCarousel(carousel === 0 ? 2 : carousel - 1) 
    }

    React.useEffect(_ => {
        setInterval(() =>{
            setCarousel(carousel === 2 ? 0 : carousel + 1) 
        },10000)
    },[setCarousel])

    const durTime = 0.3;
    const variants = {
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

    return (
        <Carousel>
            <CarouselWrapper>
                <AnimatePresence>
                    {
                        carouselImgs.map((img,id) =>{
                            if(carousel === id){
                                return  <motion.img 
                                variants={variants}
                                initial="from"
                                animate="to"
                                exit="exit"
                                key={id}
                                src={img} 
                                alt={`alt_${id}`} />
                            }
                        })
                    }
                </AnimatePresence>
            </CarouselWrapper>
            <ButtonFlex>
                <CarouselTogglers onClick={() => carouselController('decrement')}>
                    <BsChevronLeft size="3rem"/>
                </CarouselTogglers>
                <CarouselTogglers onClick={() => carouselController('increment')}>
                    <BsChevronRight size="3rem"/>
                </CarouselTogglers>
            </ButtonFlex>
        </Carousel>
    )
}

export default HeaderCarousel


const Carousel = styled.section`
width : 100%;
height : 100vh;
background-color :black;
position: relative;
`
const CarouselWrapper = styled.div`
position :relative;

width : 100%;
height : 100%;
img {
    position :absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit:cover;
}
`
const CarouselTogglers = styled(Button)`
display: flex;
justify-content: center;
align-items: center;
width: 6rem;
height: 6rem;
background-color: var(--baseBg);
margin : 0 2rem;
`
const ButtonFlex = styled.div`
display: flex;
justify-content : space-between;
align-content:center;
position:absolute;
width: 100%;
top: 50%;
`