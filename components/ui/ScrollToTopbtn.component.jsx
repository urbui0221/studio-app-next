import { AnimatePresence, motion } from 'framer-motion';
import React from 'react'
import styled from 'styled-components'
import useWindowScroll from '../../custom/hooks/useWindowScroll';

const durTime = 0.3;
const scrollBtnVariants = {
    from : {
        y: 100,
        opacity : 0
    },
    to : {
        y: 0,
        opacity : 1,
        transition : {
            duration : durTime
        } 
    },
    exit : {
        y: 100,
        opacity : 0,
        transition : {
            duration : durTime
        } 
    }
}

const ScrollToTopbtn = () => {
    const scrollToTop = _ => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    const hasScrolled = useWindowScroll();
    return (
  <AnimatePresence>
      {hasScrolled && <Scroller 
        variants={scrollBtnVariants}
        initial="from"
        animate="to"
        exit="exit"
        onClick={scrollToTop}>
            <i className="ion-android-arrow-up"></i>
        </Scroller> }
    </AnimatePresence>
    )
}

export default ScrollToTopbtn

const Scroller = styled(motion.button)`
z-index : 9000;
outline : none;
border : none;
position :fixed;
bottom : 5rem; 
right : 5rem;
color : black;
width : 5.6rem;
height : 5.6rem;
border-radius : 50%;
background-color : var(--primary);
transition : 0.3s all;
&::before{
    content : '';
    width : 5.6rem;
    height : 5.6rem;
    position : absolute;
    background-color : var(--primary);
    top: 0;
    left: 0;
    border-radius : 50%;
    transform : scale(1);
    z-index : -1;
}
i{
    font-size : 2.5rem;
    color : var(--baseBg);
}
`