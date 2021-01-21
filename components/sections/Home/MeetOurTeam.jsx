import React,{ useState } from 'react'
import styled from 'styled-components'
import Subtitle from '../../ui/Subtitle'

const MeetOurTeam = () => {
    const [hoverShow ,setHover] = useState(false);
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
            <TeamMember className="row" 
            onMouseOver={() => setHover(true)} 
            onMouseOut={() => setHover(false)}>
                <div className="team-item">
					<div className="thumb">
						<a href="team-detail.html">
						    <img src="images/team/team_270x290.jpg" alt="" />
						</a>
					</div>
					<div className="info">
                        <div className="name">
							<a href="team-detail.html">John Anderson</a>
						</div>
                        {
                            hoverShow ? 
                            <div className="socials">
								<a href="#">Facebook</a> &nbsp;
								<a href="#">Twitter</a> &nbsp;
								<a href="#">Youtube</a>
							</div>
                            : <div className="tagline">Designer</div>
                            
                        }
					</div>
				</div>
            </TeamMember>
        </div>
        </div>   
        </Container>
    )
}

export default MeetOurTeam


const Container = styled.div`
text-align : center;
background-color : #f6f7f7;
.ourfilm-description {
    font-family: var(--font3);
}
.section-title {
    font-size: 34px;
    color: #333;
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
.info{
    padding : 2.5rem 1rem;
    font-family : var(--head);
    .name{
        font-size : 2rem;
        color : var(--baseCol);
    }
    .socials,.tagline{
        font-size : 1.2rem;
        opacity : 0.5;
    }
}
`