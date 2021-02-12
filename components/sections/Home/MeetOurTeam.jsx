import React,{ useState } from 'react'
import styled from 'styled-components'
import Subtitle from '../../ui/Subtitle'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image'

const MeetOurTeam = ({team}) => {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1200 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1200, min: 995 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 995, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

    return (
        <Container>
        <div className="section section-bg-5 section-cover pt-11 pb-11">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="text-center mb-7">
                        <Subtitle text={'Meet Our Team'} />
                        <h2 className="section-title mb-2">Who We Are</h2>
                        <p className="ourfilm-description">We are a team of different artistic and skilled film producers who have the same <br />aim of producing the best films to the beloved audience.</p>
                    </div>
                </div>
            </div>
            {/*<Carousel 
                    swipeable={false}
                    draggable={true}
                    showDots={true}
                    responsive={responsive}
                    arrows={false}
                    centerMode={true}
                    partialVisible={false}
                    keyBoardControl={true}
                    ssr={true}
                    responsive={responsive}>
                            {
                                team.map(mem => {
                                    return <Members
                                    key = {mem.name}
                                    {...mem}
                                    />
                                })
                            }
                        </Carousel> */}
            <Swipe>
                {
                    team.map(mem => {
                        return <Members
                        key = {mem.name}
                        {...mem}
                        />
                    })
                }
            </Swipe>
        </div>
        </div>   
        </Container>
    )
}

export default MeetOurTeam

const Members = ({image,name,occupation}) => {
    const [hoverShow ,setHover] = useState(false);
    return(
        <TeamMember className="row" 
        onMouseOver={() => setHover(true)} 
        onMouseOut={() => setHover(false)}>
            <div className="team-item">
                <div className="thumb">
                    <div className="img-wrapper">
                        <Image
                        className="img"
                        quality={100}
                        priority 
                        src={image} 
                        layout={"fill"} 
                        alt={name} />
                    </div>
                </div>
                <div className="info">
                    <div className="name">
                        <a href="team-detail.html">{name}</a>
                    </div>
                    {
                        hoverShow ? 
                        <div className="socials">
                            <a href="#">Facebook</a> &nbsp;
                            <a href="#">Twitter</a> &nbsp;
                            <a href="#">Youtube</a>
                        </div>
                        : <div className="tagline">{occupation}</div>
                    }
                </div>
            </div>
        </TeamMember>
    )
}



const Container = styled.div`
text-align : center;
background-color : #f6f7f7;
.react-multi-carousel-list  {
    margin : 0 auto;
    .react-multi-carousel-dot-list {
       // bottom: -3rem;
        z-index : 5000;
        .react-multi-carousel-dot {
            button{
                outline: none;
                border: none;
            }

            & button{
                background-color : var(--tertiary); 
                opacity : 0.5;
            }

            &--active button{
                background-color : var(--tertiary); 
                opacity : 1;
            }
        }
    }
}

.ourfilm-description {
    font-family: var(--font3);
}
.section-title {
    font-size: 34px;
    color: var(--tertiary2);
    line-height: 1.4em;
    font-family: var(--head);
    font-weight: 400;
    font-style: normal;
    text-transform: none;
}
`

const TeamMember = styled.div`
width : max-content;
background-color: white;
&:not(:first-child){
    margin-left : 4rem;
}
.team-item{
    .thumb{
        .img-wrapper{
            position: relative;
            overflow: hidden;;
            width : 270px;
            height: 300px;
            .img{
                object-fit : cover;
                transition : 0.5s all;
                &:hover{
                    transform : scale(1.1);
                }
            }
        }
    }
    .info{
    padding : 2.5rem 1rem;
    font-family : var(--display);
    .name{
        font-size : 2rem;
        color : var(--baseCol);
        font-weight : 800;
    }
    .socials,.tagline{
        font-size : 1.2rem;
        opacity : 0.5;
    }
}
}

`
const Swipe = styled.div`
display : flex;
`
