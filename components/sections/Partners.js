import React from 'react'
import styled, {keyframes} from 'styled-components'
import Subtitle from '../ui/Subtitle'

const Partners = () => {
    return (
        <Container>
        <div className="section pt-10 pb-12">
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <div className="hidden-xs mt-7"></div>
                    <div className="mt-5"></div>
                    <div className="floating">
                        <img src="images/nine_studio.png" alt="" />
                    </div>
                </div>
                <div className="col-sm-6">
                    <Subtitle className="mb-4" text={'Friends &amp; Partners'} />
                    <div className="film-links-cloud">
                        <ul>
                            <li><a href="#" target="_blank">O Young Kwon</a></li>
                            <li><a href="#" target="_blank">Alexander Vexler</a></li>
                            <li><a href="#" target="_blank">Burak Ekin</a></li>
                            <li><a href="#" target="_blank">Christian Koerber</a></li>
                            <li><a href="#" target="_blank">Cristopher Civitillo</a></li>
                            <li><a href="#" target="_blank">David Rasche</a></li>
                            <li><a href="#" target="_blank">Fabian Hellgardt</a></li>
                            <li><a href="#" target="_blank">Fabian Hübner</a></li>
                            <li><a href="#" target="_blank">Joni Zaza</a></li>
                        </ul>
                    </div>
                    <h3 className="sub-title primary-color mb-4"> Clients &amp; publications</h3>
                    <div className="mw-560">
                        <div className="logo-carousel" data-auto-play="true" data-desktop="4" data-laptop="3" data-tablet="2" data-mobile="1">
                            <div className="logo-item">
                                <img src="images/logo/logo_120x80.jpg" alt="" />
                            </div>
                            <div className="logo-item">
                                <img src="images/logo/logo_120x80.jpg" alt="" />
                            </div>
                            <div className="logo-item">
                                <img src="images/logo/logo_120x80.jpg" alt="" />
                            </div>
                            <div className="logo-item">
                                <img src="images/logo/logo_120x80.jpg" alt="" />
                            </div>
                            <div className="logo-item">
                                <img src="images/logo/logo_120x80.jpg" alt="" />
                            </div>
                            <div className="logo-item">
                                <img src="images/logo/logo_120x80.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>  
        </Container>
    )
}

const floating = keyframes`
from {-webkit-transform:translate(0, 0px);}
65% {-webkit-transform:translate(0, 15px);}
to {-webkit-transform: translate(0, -0px); 
`

const Container = styled.div`
.sub-title {
    font-size: 14px;
    letter-spacing: .1em;
    font-family: Montserrat;
    font-weight: 400;
    line-height: 1.2;
    text-transform: uppercase;
    margin-bottom: 22px;
}
.floating { 
    animation-name: ${floating};
    -webkit-animation-name: ${floating};
    -webkit-animation-duration: 3s;
    animation-duration: 3s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    -moz-animation-name: ${floating};
    -moz-animation-duration: 3s;
    -moz-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -moz-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
}

.logo-carousel {
	margin-bottom: 30px;
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

.film-links-cloud {
	margin-top: 40px;
    margin-bottom: 70px;
	max-width: 530px;
}
.film-links-cloud ul {
    padding: 0;
}
.film-links-cloud ul li {
    display: inline;
}
.film-links-cloud ul li a {
    font-size: 24px;
    line-height: 48px;
    font-weight: 400;
    font-family: Merriweather;
    color: #ababab;
}
.film-links-cloud.dark ul li a {
    color: #696969;
}
.film-links-cloud ul li a:hover {
    color: #333;
}
.film-links-cloud.dark ul li a:hover {
    color: #fff;
}
.film-links-cloud ul li a:before {
    content: "\f111";
    font-family: FontAwesome;
    font-size: 6px;
    display: inline-block;
    line-height: 1;
    margin-left: 20px;
    margin-right: 20px;
    padding-top: 10px;
    transform: translateY(-50%);
    color: #e2e2e2;
}
.film-links-cloud ul li:first-child a:before {
    content: "";
    margin-left: 0px;
    margin-right: 0px;
}
.film-links-cloud.dark ul li a:before {
    color: #696969;
}
`

export default Partners
