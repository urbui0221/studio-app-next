import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import styled from 'styled-components';


const BottomCarousel = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 3
        }
      };
    return (
       <CarouselContainer>
           <Carousel 
            autoPlay={true}
            autoPlaySpeed={3000}
            swipeable={true}
            draggable={true}
            showDots={false}
            arrows={false}
            partialVisible={false}
            keyBoardControl={true}
            ssr={true} 
            responsive={responsive}>
                <div className="logo-item">
                    <img src="images/logo/logo_5.jpg" alt="" />
                </div>
                <div className="logo-item">
                    <img src="images/logo/logo_6.jpg" alt="" />
                </div>
                <div className="logo-item">
                    <img src="images/logo/logo_7.jpg" alt="" />
                </div>
                <div className="logo-item">
                    <img src="images/logo/logo_8.jpg" alt="" />
                </div>
                <div className="logo-item">
                    <img src="images/logo/logo_9.jpg" alt="" />
                </div>
                <div className="logo-item">
                    <img src="images/logo/logo_10.jpg" alt="" />
                </div>
           </Carousel>
       </CarouselContainer>
    )
}

export default BottomCarousel


const CarouselContainer = styled.div`
    max-width : 100rem;
    margin : 8rem auto;
    position: relative;
    padding: 0 2rem;
    .logo-item{
        img{
            opacity : 0.2;
            transition : 0.3s all; 
            &:hover{
                opacity : 1;
            }
        }
    }
`