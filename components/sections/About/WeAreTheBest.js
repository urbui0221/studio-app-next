import React from "react"
import styled from "styled-components"
import Button from "../../ui/Button"
import SectionTitle from "../../ui/SectionTitle"
import BottomCarousel from "./BottomCarousel"
import MeetOurTeam from "./MeetOurTeam"
import ServiceList from "./ServiceList"
import TopCarousel from "./TopCarousel.component"

const WeAreTheBest = ({team}) => {
  return (
    <Container>
      <TopCarousel />
      <div className='section pb-18'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-6 col-sm-12'>
              <div className='text-center'>
                <img src='images/film_10.jpg' alt='' />
              </div>
            </div>
            <div className='col-md-4 col-sm-12'>
              <div className='text-center-xs'>
                <div className='mt-5'></div>
                <SectionTitle text={'We Are The Best'} className="fz40" />
                <p className="p">
                  We are a creative film and photo production company hungry for
                  quality in aesthetics. To create modern recognizable stuff we
                  are working with a strong network of experienced
                  professionals. We set up teams to shape your identity, push
                  your idea and manage the workflow from pre- to
                  post-production.
                </p>
                <div className='mt-4'></div>
                <Button title={"HIRE US NOW"} />
                <div className='mb-10'></div>
              </div>
            </div>
            <div className='col-sm-2'></div>
          </div>
          <div className='row'>
            <div className='col-sm-6'>
              <div className='mt-3'></div>
              <div className='film-our-services-list mw-560-r'>
                <div className='big-title'>
                  <a href='#'>Our Services</a>
                </div>
                <div className='items'>
                  {ServicesData.map((service, index) => (
                    <ServiceList key={index} {...service} />
                  ))}
                </div>
              </div>
            </div>
            <div className='col-sm-6'>
              <div className='image-shadow'>
                <img src='images/team/team_8.jpg' alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <MeetOurTeam team={team}/>
      <BottomCarousel />
    </Container>
  )
}

const ServicesData = [
  {
    number: "01",
    title: "Filming Services",
    content:
      "Vestibulum ante ipsum primis in faucs orci luctus et ultrices accusamus, eius quia molestias nihil temporibus nam praesentium",
  },
  {
    number: "02",
    title: "Studio Hire",
    content:
      "Dultrices posuereaccusamus, eius quia molestias nihil accusamus, eius quia molestias nihil temporibus nam praesentium",
  },
  {
    number: "03",
    title: "Workshops & Private Tuition",
    content:
      "Dultrices posuereaccusamus, eius quia molestias nihil accusamus, eius quia molestias nihil temporibus nam praesentium",
  },
]

const Container = styled.div`
  background-image: url("../images/background/bg_13.png");
  background-position: center;
  background-repeat: no-repeat;

  .p {
    font-family: var(--font3);
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

  .film-our-services-list .big-title {
    font-family: Merriweather;
    font-size: 40px;
    font-weight: 400;
    color: #333;
  }
  .film-our-services-list .big-title a {
    font-family: Merriweather;
    font-size: 40px;
    font-weight: 400;
    color: #333;
    position: relative;
  }
  .film-our-services-list .big-title a:hover {
    color: #da0e2b;
  }
  .film-our-services-list .big-title a:after {
    position: absolute;
    right: -130px;
    top: 50%;
    content: "\f30f";
    font-family: Ionicons;
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 36px;
    font-size: 18px;
    font-weight: 400;
    color: #da0e2b;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    display: inline-block;
    border: 2px solid #f0f0f0;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -ms-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
    transform: translateY(-50%);
  }
  .film-our-services-list .big-title a:hover:after {
    border-color: #da0e2b;
    background-color: #da0e2b;
    color: #fff;
  }

  .image-shadow {
    display: inline-block;
    background-color: #f0f0f0;
  }

  .image-shadow,
  .image-shadow img {
    max-width: 100%;
    vertical-align: top;
  }

  .image-shadow img {
    box-shadow: 0 10px 20px rgba(0,0,0,.1);
    transform: translate(40px,60px);
}
`

export default WeAreTheBest
