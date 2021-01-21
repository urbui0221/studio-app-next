import React from "react"
import styled from "styled-components"
import AwardsIconBox from "../../ui/AwardsIconBox"
import Subtitle from "../../ui/Subtitle"
import Image from 'next/image';

const Awards = () => {
  return (
    <Container>
      <div className='section section-bg-7 section-cover pt-10 pb-10'>
        <div className='container'>
          <Image 
          className="image"
          quality={100}
          src="/images/background/bg_7.png" 
          layout="fill" 
          alt="img" />
          <div className='row'>
            <div className='col-md-4 col-sm-12'>
              <Subtitle text={'Awards'} />
              <h2 className='section-title small fz-40 white mb-2'>
                A selection of some recent awards
              </h2>
              <p className='gray'>
                Since 2008, I have shot more than 50 short formats (commercials,
                music videos, documentaries and short movies). In 2014 I
                finished the masterclass in cinematography at Hamburg Media
                School. Now freelancing as cinematographer.
              </p>
            </div>
            <div className='col-md-8 col-sm-12'>
              <div className='mt-3 hidden-xs'></div>
              <div
                className='logo-carousel no-opacity'
                data-auto-play='true'
                data-desktop='4'
                data-laptop='3'
                data-tablet='3'
                data-mobile='2'
              >
                <div className='logo-item'>
                  <img src='images/logo/logo_1alt.png' alt='' />
                </div>
                <div className='logo-item'>
                  <img src='images/logo/logo_2alt.png' alt='' />
                </div>
                <div className='logo-item'>
                  <img src='images/logo/logo_3alt.png' alt='' />
                </div>
                <div className='logo-item'>
                  <img src='images/logo/logo_4alt.png' alt='' />
                </div>
              </div>
              <div className='row'>
              {AwardsData.map((award, index) => (
                <AwardsIconBox key={index} {...award} />
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  ) 
}

const AwardsData = [
  {
    title: "06 Awards in 2014/2015.",
    description: "These awards are both national and international in 2014/2015"
  },
  {
    title: "04 Awards in 2016",
    description: "These awards are both national and international in 2016"
  },
]

const Container = styled.div`
position: relative;
.gray {
  font-family: var(--font3);
}
.section-title.small {
	font-size: 24px;
  line-height: 40px;
}
.section-title {  
	font-size: 34px;
  color: #333333;
  line-height: 1.4em;
  font-family: Merriweather;
  font-weight: 400;
  font-style: normal;
  text-transform: none;
}
.sub-title {
  font-size: 14px;
  letter-spacing: .1em;
  font-family: Montserrat;
  font-weight: 400;
  line-height: 1.2;
  text-transform: uppercase;
  margin-bottom: 22px;
}
.section {
  position: relative;
  width: 100%;
  z-index: 1;
}
.section-cover {
	background-repeat: no-repeat;
	background-size: cover;
}

.logo-carousel {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 30px;
  & > * {
    margin-right: 20px;
  }
}
.logo-carousel .logo-item img {
	display: block;
    margin: 0 auto;
    opacity: .2;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -ms-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
}
.logo-carousel .logo-item:hover img {
    opacity: 1;
}
.logo-carousel.no-opacity .logo-item img {
	opacity: 1;
}
.logo-carousel.no-opacity .logo-item:hover img {
    transform: scale(1.1);
}

`

export default Awards
