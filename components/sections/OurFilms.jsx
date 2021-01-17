import React from 'react'
import styled from 'styled-components'
import Film from '../ui/Film'
import Subtitle from '../ui/Subtitle'
const OurFilms = () => {
    return (
        <Container>
        <div className="section section-bg-5 section-cover pt-11 pb-11">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="text-center mb-7">
                        <Subtitle text={'Our Best Film'} />
                        <h2 className="section-title mb-2">Featured Films</h2>
                        <p className="ourfilm-description">Have a look at our best films which are high in quality and receive positive responses <br />from audience. You are gonna have these great films as well.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                {OurFilmsData.map((film, index) => (
                    <Film key={index} {...film} />
                ) )}
            </div>
        </div>
    </div>   
        </Container>
    )
}
export default OurFilms

const OurFilmsData = [
    {
        alternate: false,
        img: 'images/projects/project_7.jpg',
        title: 'The Secret Scripture',
        url: 'film-detail.html',
        description: `In our new film The Secret Scripture, based on the novel by Sebastian Barry, the six-time Oscar nominated director returns to themes familiar to him: politics, religion, family and truth. Vanessa Redgrave stars as Rose McNulty, a woman`,
        category: [
            {
                name: 'Anthology Film',
                url : '/'
            },
            {
                name: 'Short Story',
                url : '/'
            }
           
        ],
        views: 215,
        likes: 4,
        comments: 0
    },
    {
        alternate: true,
        img: 'images/projects/project_8.jpg',
        title: 'Kicks',
        url: 'film-detail.html',
        description: ` The Tribeca Film Festival kicked off on April 14 with the opening night premiere of Justin Tipping’s Kicks, an ambitious coming-of-age film set in an inner city enclave in Northern California. Though it’s Tipping’s feature debut, he’s far`,
        category: [
            {
                name: 'Short Story',
                url : '/'
            }
        ],
        views: 155,
        likes: 0,
        comments: 0
    },
    {
        alternate: false,
        img: 'images/projects/project_9.jpg',
        title: 'Raising Bertie Up',
        url: 'film-detail.html',
        description: `Raising Bertie follows three young men over the course of five years as they grow into adulthood in Bertie County, a rural African-American-led community in North Carolina. Director Margaret Byrne had originally set out to make`,
        category: [
            {
                name: 'Short Story',
                url : '/'
            }
        ],
        views: 177,
        likes: 1,
        comments: 0
    },
]

const Container = styled.div`
background-image: url('images/background/film_bg.jpg');
.ourfilm-description {
    font-family: 'Lato';
}
.section-title {
    font-size: 34px;
    color: #333;
    line-height: 1.4em;
    font-family: Merriweather;
    font-weight: 400;
    font-style: normal;
    text-transform: none;
}
`
