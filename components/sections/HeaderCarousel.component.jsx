import React from 'react'
import styled from 'styled-components'
import { BsChevronLeft,BsChevronRight } from 'react-icons/bs'
import Button from '../ui/Button.component'
import { AnimatePresence, motion } from 'framer-motion'

const carouselImgs = [
    "https://images.unsplash.com/photo-1542296375-b4c0e4a878fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1602342629825-3caac6e02785?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1510582029005-689cfc56b48c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
]

const durTime = 0.3;
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

const HeaderCarousel = () => {

    const [carousel,setCarousel] = React.useState(0); 
    const [btnshow,setShow] = React.useState(true);
    const [showControllers,setControls] = React.useState(true);

    const carouselController = type => {
        return type === 'increment' ? 
        setCarousel(carousel === 2 ? 0 : carousel + 1) 
        :  setCarousel(carousel === 0 ? 2 : carousel - 1) 
    }

    React.useEffect(_ => {
        /*setInterval(() =>{
            setCarousel(carousel === 2 ? 0 : carousel + 1) 
        },10000)*/
    },[setCarousel])

    React.useEffect(_ => {
        if(btnshow){
            setTimeout(() => {
                setControls(false)
            },5000)
        }
        setShow(true)
    },[setShow])

    return (
        <Carousel 
        onMouseEnter={() => setControls(true)} 
        onMouseLeave ={() => setControls(false)}>
            <CarouselWrapper>
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
                <AnimatePresence>
                    {
                        carouselImgs.map((img,id) =>{
                            if(carousel === id){
                                return  <motion.img 
                                variants={Carouselvariants}
                                initial="from"
                                animate="to"
                                exit="exit"
                                key={id}
                                src={img} 
                                alt={`alt_${id}`} />
                            }
                        })
                    }
                    <ContentAnimation>
                        {
                            carousel === 0 ?
                          <>
                                <div className="head-wrapper">
                                    <h1>
                                        <span>&nbsp; &nbsp;Film</span><br />
                                        <span>+ Video</span>
                                    </h1>
                                </div>
                                <h2>Productions</h2>
                          </>: carousel === 1 ?
                          <>
                            <h4>We are a create film studio</h4>
                            <h3>We are nine studio</h3>
                          </>
                           :<>
                            <h4>
                                Let's make
                            </h4>
                            <h3>Great things togather</h3>
                            <p>
                            Let’s make GREAT THING TOGETHER! We are a creative film and photo production company based in Berlin. Working with a network of diverse professionals, we believe in the importance of strong visual communication. HIRE US NOW FOLLOW US.
                            </p>
                           </>
                        }
                       <center style={{ position : "relative" }}>
                           <AnimatePresence>
                           {
                            (carousel === 0 || carousel === 2) && btnshow && <HireButton 
                            variants={HirebtnVariants}
                            initial={"from"}
                            animate={"to"}
                            exit="exit"
                            bgcolor="var(--primary)">HIRE US NOW</HireButton>
                           }
                           </AnimatePresence>
                       </center>
                    </ContentAnimation>
                </AnimatePresence>
            </CarouselWrapper>
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
const CarouselLinks = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  left: 1rem;
  top: 59%;
  transform: translateY(-50%);
  z-index: 9997;
  p {
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.5px;
    color: #ffffff;
    transform: rotate(270deg);
    text-transform: uppercase;
  }
  .line {
    background-color: #ffffff;
    height: 1px;
    width: 44px;
    margin-top: 100px;
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
        color: #ffffff;
        transition: all 0.3s;
      }
      &:hover {
          i{
              color: #da0e2b;
          }
      }

      margin-bottom: 10px;
    }
  }
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
const HireButton = styled(Button)`
margin : 0 auto;
margin-top : 7rem;
position : absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
padding : 1.5rem 3rem;
`

const CarouselTogglers = styled(Button)`
z-index: 9999;
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

const ContentAnimation = styled.div`
position:absolute;
top:50%;
left : 50%;
transform : translate(-50%,-50%);
color : var(--baseBg);
h2{
    color : var(--baseBg);
    line-height: 1;
    width: max-content;
    text-align: center;
}
h3{
    color : var(--baseBg);
    text-transform : uppercase;
    margin-top : 5rem;
    text-align: center;
}
h4{
    color : var(--baseBg);
    font-family : var(--head);
    font-weight : 400;
    font-style: italic;
    text-align:center;
}
P{
    font-size : 1.3rem;
    margin-top : 5rem;
    text-align: center;
}
.head-wrapper{
    display: flex;
    position: relative;
    text-transform : uppercase;
    h1,h2{
        color : var(--baseBg);
        line-height: 1;
        margin-left : 4rem;
    }
}
`