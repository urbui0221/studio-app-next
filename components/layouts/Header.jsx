import Link from "next/link";
import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import Button from "../ui/Button.component";
import { useRouter } from 'next/router'
const Header = (props) => {
  const pageDropdownRef = useRef(null);

  const router = useRouter();

  const checkPath = path => path === router.pathname ? 'active' : '';

  console.log(router.pathname);

  const [hasScrolled, setHasScrolled] = useState(false)
  const [topSearch, setTopSearch] = useState(false)
  const [mobileNav, setMobileNav] = useState(false)
  const [homeDropdown, setHomeDropdown] = useState(false)
  const [productionDropdown, setProductionDropdown] = useState(false)
  const [blogDropdown, setBlogDropdown] = useState(false)
  const [pagesDropdown, setPagesDropdown] = useState(false)

  const [aboutDropdown, setAboutDropdown] = useState(false)
  const [ourTeamDropdown, setOurTeamDropdown] = useState(false)
  const [ourServicesDropdown, setOurServicesDropdown] = useState(false)
  const [galleryDropdown, setGalleryDropdown] = useState(false)

  const handleMobileHomeClick = () => { setHomeDropdown(p => !p) }
  const handleMobileProductionClick = () => { setProductionDropdown(p => !p) }
  const handleMobileBlogClick = () => { setBlogDropdown(p => !p) }
  const handleMobileAboutClick = () => { setAboutDropdown(p => !p) }
  const handleMobileOurTeamClick = () => { setOurTeamDropdown(p => !p) }
  const handleMobileOurServicesClick = () => { setOurServicesDropdown(p => !p) }
  const handleMobileGalleryClick = () => { setGalleryDropdown(p => !p) }
  const handleMobilePagesClick = () => {
    if (aboutDropdown || ourTeamDropdown || ourServicesDropdown || galleryDropdown) {
      setAboutDropdown(false)
      setOurTeamDropdown(false)
      setOurServicesDropdown(false)
      setGalleryDropdown(false)
    }
    setPagesDropdown(p => !p)
  }

  const handleSearchClick = () => { setTopSearch(p => !p) }
  const handleHamburgerClick = () => { setMobileNav(p => !p) }

  const handleScroll = () => {
    const scrollTop = window.scrollY
    if (scrollTop !== 0) {
      setHasScrolled(true)
    } else {
      setHasScrolled(false)
    }
  }



  useEffect(() => {

    // pageDropdownRef.current.style.maxHeight = pagesDropdown ? `${pageDropdownRef.current.scrollHeight}px` : '0px'
    pageDropdownRef.current.style.maxHeight = pagesDropdown ? `577px` : '0px'
    
    window.addEventListener('scroll', handleScroll);
    return () => {
    window.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll, pagesDropdown, pageDropdownRef])

  return (
    <HeaderContainer>
      <div id="menu-slideout" className={`${mobileNav ? 'slideout-menu.open' : 'slideout-menu'} hidden-md-up`}>
        <div className="mobile-menu">
          <ul id="mobile-menu" className="menu">

            <DropDowns arr={Home} title={'Home'} url={"#"} active={homeDropdown} onClick={handleMobileHomeClick} />

            <li className={`${pagesDropdown ? 'dropdown expand' : 'dropdown'}`}>
              <a href="#" onClick={handleMobilePagesClick}>Pages</a>
              <i className="sub-menu-toggle fa fa-angle-down" onClick={handleMobilePagesClick}></i>
              <ul ref={pageDropdownRef} className="sub-menu submenu-animate">

                <DropDowns arr={About} title={'About'} url={"#"} active={aboutDropdown} onClick={handleMobileAboutClick} />
                <DropDowns arr={OurTeam} title={'Our Team'} url={"#"} active={ourTeamDropdown} onClick={handleMobileOurTeamClick} />
                <DropDowns arr={OurServicesList} title={'Our Services'} url={"#"} active={ourServicesDropdown} onClick={handleMobileOurServicesClick} />
                <DropDowns arr={GalleryList} title={'Gallery'} url={"#"} active={galleryDropdown} onClick={handleMobileGalleryClick} />
                <li><a href="404.html">404</a></li>
              </ul>
            </li>
            {/* <DropDowns arr={Pages} title={'Pages'} active={pagesDropdown} onClick={handleMobilePagesClick} /> */}

            <DropDowns arr={ProductionList} title={'Production'} url={"#"} active={productionDropdown} onClick={handleMobileProductionClick} />
            <DropDowns arr={BlogsList} title={'Blogs'} url={"#"} active={blogDropdown} onClick={handleMobileBlogClick} />
            <li>
              <a href="contact-us.html">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
      

      <header id='header' className={`header ${hasScrolled ? "scrolling-menu" : ""} header-desktop header-1`}>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-3 p-0'>
              <div className='header-left'>
                <Link href='/' id='branding_logo' prefetch={false}>
                  <img
                    className='logo'
                    src='/images/logo_alt.png'
                    alt='Logo'
                    title='Nine Studio'
                  />
                </Link>
              </div>
            </div>
            <div className='col-md-9 p-0'>
              <div className='header-right'>
                <nav id='menu' className='menu menu-primary'>
                  <ul>
                    <li className={checkPath('/')}>
                      <Link href='/'>Home</Link>
                    </li>
                    <li className={checkPath('/about')}>
                      <Link href='/about'>About</Link>
                    </li>
                    <li className={checkPath('/pricing')}>
                      <Link href='/pricing'>Pricing</Link>
                    </li>
                    <li className={`dropdown ${checkPath('/[service]')}`}>
                      <Link href='#'>Services</Link>
                      <ul className='sub-menu'>
                        {OurServicesList.map((blog, index) => (
                          <li key={index}>
                            <Link 
                            as={`/${blog.id}`}
                            href={{
                              pathname : '/[service]',
                              query: { service : blog.id }
                            }}>{blog.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li className={checkPath('/contact')} >
                      <Link href='/contact'>Contact Us</Link>
                    </li>
                    <li className={checkPath('/blog')}>
                      <Link href='/blog'>Blog</Link>
                    </li>
                    <li className="last-link">
                      <Link href="/trials">
                       <Button bgcolor={'var(--primary)'} p={'1rem 1.5rem'}>
                          Trials
                       </Button>
                      </Link>
                    </li>
                  </ul>
                </nav>

              </div>
            </div>
          </div>
        </div>
      </header>
      <header className='header header-mobile'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-2'>
              <div className='header-left'>
                <div id='open-left'>
                  <i onClick={handleHamburgerClick} className='ion-navicon'></i>
                </div>
              </div>
            </div>
            <div className='col-xs-8'>
              <div className='header-center'>
                <a href='./' id='logo-2'>
                  <img
                    className='logo-image'
                    src='/images/logo_alt.png'
                    alt='Nine Studio Logo'
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

    </HeaderContainer>
  )
}

const DropDowns = ({ arr, title, url, active, onClick }) => {
  const contentRef = useRef(null)
  useEffect(() => {
    contentRef.current.style.maxHeight = active ? `${contentRef.current.scrollHeight}px` : '0px'
  }, [contentRef, active])

  return (
    <li className={`${active ? 'dropdown expand' : 'dropdown'}`} onClick={onClick}>
      <a href={url}>{title}</a>
      <i className="sub-menu-toggle fa fa-angle-down"></i>
      <ul ref={contentRef} className="sub-menu submenu-animate">
        {arr.map((item, index) => (
          <li key={index}>
            <a href={item.url}>{item.name}</a>
          </li>
        ))}
      </ul>
    </li>
  )
}

const HeaderContainer = styled.div`
position: relative;
z-index : 4000;
.header {
    width: 100%; 
	  margin-top: 0;
    margin-bottom: 0;
    position: relative;
    z-index: 99;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -ms-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
}
.header.header-overlay {
    background-color: transparent;
    position: absolute;
}
.header.header-1,
.header.header-3 {
    display: inline-block;
    width: 100%;
	min-height: 101px;
}
.header.header-1 .header-left,
.header.header-3 .header-left {
    padding-left: 100px;
}
.header.header-1 .header-right,
.header.header-3 .header-right {
    padding-right: 100px;
    text-align: right;
    position: static;
}
.header.header-1 .logo,
.header.header-3 .logo {
    margin-top: 20px;
}

.header.header-1 .header-right .open-search,
.header.header-3 .header-right .open-search {
    display: inline-block;
    font-size: 18px;
    line-height: 1;
    margin-left: 20px;
    cursor: pointer;
    color: #333;
}
.header.header-overlay .header-right .open-search {
    color: #fff;
}
.header.header-overlay.scrolling-menu .menu-primary > ul > li > a,
.header.header-overlay.scrolling-menu .header-right .open-search {
    color: #333;
}

.header.header-2 {
	position: absolute;
    z-index: 999;
	padding: 20px 0;
	display: inline-block;
    width: 100%;
	background-color: transparent;
}
.header.header-2 .hamburger-menu {
    display: inline-block;
    font-size: 32px;
    color: #fff;
    cursor: pointer;
}
.header.scrolling-menu {
    position: fixed;
    background: #fff;
    top: 0;
    left: 0;
    -moz-box-shadow: 0 10px 20px rgba(0,0,0,.05);
    -webkit-box-shadow: 0 10px 20px rgba(0,0,0,.05);
    box-shadow: 0 10px 20px rgba(0,0,0,.05);
    z-index: 999;
}
.header.header-2.scrolling-menu {
    padding: 0;
}
.header.header-2.scrolling-menu .hamburger-menu {
    color: #696969;
}
.header.header-3 {
    background-color: #fff;
}
.header.header-3 .hamburger-menu {
    color: #333;
	display: inline-block;
    font-size: 32px;
	cursor: pointer;
	margin-top: 20px;
}
header.header-mobile {
    display: none;
    padding: 30px 0;
    width: 100%;
}
header.header-mobile .header-left {
    font-size: 35px;
    text-align: left;
}
header.header-mobile .header-left i {
    color: #5e5a54;
}
header.header-mobile .header-center {
	text-align: center;
}
header.header-mobile .header-center .logo-image {
	margin-top: 10px;
}
header.header-mobile .header-right {
	text-align: right;
	font-size: 28px;
}
header.header-mobile .header-right .open-search {
    margin-top: 10px;
}

/* === 2.2. MENUS === */
#menu {
    position: static;
}
.header .menu {
    font-family: Montserrat,Helvetica,Arial,sans-serif;
    font-weight: 400;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: 0;
    font-size: 14px;
}
.header.header-1 .header-right nav.menu,
.header.header-3 .header-right nav.menu {
    display: inline-block;
    text-align: right;
}
.header .menu-primary > ul {
    margin: 0;
    padding: 0;
    white-space: nowrap;
    position: static;
    z-index: 2;
}
.header .menu-primary > ul > li {
    position: relative;
    display: inline-block;
}
.header.header-overlay .menu-primary > ul > li > a {
    color: #fff;
}
.header .header-right .menu-primary > ul > li > a {
    text-transform: uppercase;
    position: relative;
	display: inline-block;
	padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 20px;
    padding-right: 20px;
}
.header .header-right .menu-primary > ul li.active > a {
	color: #da0e2b;
}
.header .menu-primary > ul > li.dropdown > a:after {
    content: '\f3d0';
    margin-left: 10px;
    font-size: 12px;
    font-family: Ionicons;
}

.submenu-animate{
  overflow: hidden;
  transition: max-height 0.6s ease;
}
.header .menu-primary .sub-menu {
    font-size: 15px;
	  position: absolute;
    top: 110%;
    left: 0;
    visibility: hidden;
    margin: 0;
    min-width: 230px;
    width: 100%;
    background-color: #fff;
    opacity: 0;
    transition: all .3s ease;
    padding: 20px 0;
    list-style: none;
    text-align: left;
    text-transform: none;
    -moz-box-shadow: 5px 10px 20px rgba(0,0,0,.1);
    -webkit-box-shadow: 5px 10px 20px rgba(0,0,0,.1);
    box-shadow: 5px 10px 20px rgba(0,0,0,.1);
	border-top: 2px solid #da0e2b;
}
.header .menu-primary > ul > li:hover > .sub-menu {
    top: 100%;
    visibility: visible;
    z-index: 2;
    opacity: 1;
}
.header .menu-primary .sub-menu li {
    position: relative;
    padding: 0 20px;
}
.header .menu-primary .sub-menu li a {
    display: block;
    padding: 15px 0;
    color: #696969;
    text-transform: none;
    font-weight: 400;
    background: none;
    position: relative;
    border-bottom: 1px solid #f4f4f4;
    white-space: normal;
}
.header .menu-primary .sub-menu li a:hover {
    border-bottom-color: #da0e2b;
	color: #da0e2b;
}
.header .menu-primary .sub-menu li.dropdown:after {
    content: '\f363';
    font-size: 16px;
    font-family: Ionicons;
    position: absolute;
    right: 20px;
    top: 14px;
    color: #696969;
}
.header .menu-primary .sub-menu li.dropdown:hover:after {
    color: #da0e2b;
}
.header .menu-primary > ul > li > .sub-menu li > .sub-menu {
    top: 0;
    left: 100%;
    visibility: hidden;
    opacity: 0;
}
.header .menu-primary > ul > li:hover > .sub-menu li:hover > .sub-menu {
    top: -22px;
    left: 100%;
    visibility: visible;
    opacity: 1;
    border-top: 2px solid #da0e2b;
}
.header.header-overlay.header-3 .header-right .open-search,
.header.header-overlay.header-3 .menu-primary > ul > li > a {
    color: #333;
}
.header.header-overlay.header-3 .header-right .open-search:hover,
.header.header-overlay.header-3 .menu-primary > ul > li > a:hover {
    color: #da0e2b;
}
.open-right-content {
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -ms-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
    position: fixed;
    width: 90%;
    max-width: 640px;
    right: -100%;
    top: 0;
    bottom: 0;
    padding: 40px 100px;
    z-index: 1001;
    background: #262626;
    color: #fff;
    text-align: left;
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
}
.open-right-content.open {
	right: 0;
}
.open-right-content .open-right-close {
    display: block;
    text-align: right;
    line-height: 1;
    font-size: 32px;
    cursor: pointer;
}
.open-right-content ul {
    margin: 100px 0 0 0;
    padding: 0;
    list-style: none;
}
.open-right-content ul li {
    display: block;
    padding: 20px 0;
}
.open-right-content ul li a {
    color: #696969;
    font-size: 56px;
    font-weight: 400;
    font-family: Merriweather;
    line-height: 1;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -ms-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
}
.open-right-content ul li a:hover {
    opacity: 1;
    color: #da0e2b;
}
.open-right-content .search-form {
    display: block;
    margin-top: 100px;
    height: 32px;
    line-height: 32px;
    border-bottom: 1px solid rgba(255,255,255,.3);
    position: relative;
}
.open-right-content .search-form form {
    position: relative;
    height: 32px;
    line-height: 32px;
}
.open-right-content .search-form form input[type="text"], 
.open-right-content .search-form form input[type="search"] {
    height: 32px;
    line-height: 32px;
    vertical-align: top;
    padding: 0;
    border: 0;
    background-color: transparent;
    font-size: 14px;
    font-family: Montserrat;
    color: #fff;
}
.open-right-content .search-form form input[type="submit"] {
    width: 32px;
    height: 32px;
    line-height: 32px;
    font-size: 0;
    vertical-align: top;
    position: absolute;
    top: 0;
    right: 0;
    padding: 0;
    border: 0;
    background-color: transparent;
    z-index: 8;
}
.open-right-content .search-form form:after {
    content: '\f4a4';
    font-family: Ionicons;
    font-size: 24px;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 7;
}
.slideout-menu {
	background: #fff;
    display: none;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 0;
    width: 256px;
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
}

.last-link{
  a{
    color : var(--white);
    button{
      background-color : red;
      outline: none;
      border : none;
    }
  }
}

.slideout-menu.open {
    display: block;
}
.mobile-menu > ul.menu {
    padding: 0;
    margin: 0;
}
.mobile-menu > ul.menu li {
    position: relative;
    display: block;
    border-bottom: 1px solid #eee;
}
.mobile-menu > ul.menu li.expand {
    background-color: #ddd;
}
.mobile-menu > ul.menu li a {
    display: block;
    color: #5e5a54;
    padding: 9px 20px;
    background: inherit;
}
.mobile-menu>ul.menu li .sub-menu-toggle {
    display: none;
}
.mobile-menu > ul.menu li.dropdown > .sub-menu-toggle {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    width: 42px;
    height: 45px;
    line-height: 42px;
    text-align: center;
    outline: 0;
    background-color: rgba(238,238,238,.5);
    cursor: pointer;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -ms-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
}
.mobile-menu > ul.menu li.expand > .sub-menu-toggle {
	background-color: #da0e2b;
	color: #fff;
}
.mobile-menu > ul.menu li.expand > .sub-menu-toggle:before {
	content: "\f106";
}
.mobile-menu > ul.menu ul, 
.mobile-menu > ul.menu ol {
    padding: 0;
    margin: 0;
}
.mobile-menu > ul.menu li .sub-menu {
    background-color: #eee;
    padding-left: 0;
    font-weight: 400;
    box-shadow: none;
    -moz-box-shadow: none;
}
.mobile-menu > ul.menu li .sub-menu li {
    border: 0;
}
.mobile-menu > ul.menu li .active a {
    box-shadow: 1px 0 0 #111 inset;
}
.mobile-menu > ul.menu li .sub-menu li a {
    padding-left: 35px;
}
.mobile-menu > ul.menu li .sub-menu li .sub-menu li a {
    padding-left: 55px;
}

@media (max-width: 991px) {
	header.header-desktop {
		display: none !important;
	}
	header.header-mobile {
		display: block;
	}
}

@media (max-width: 768px) {
	.header.header-mobile .container {
		padding-left: 45px;
		padding-right: 45px;
		max-width: 576px;
    }
}


`



export default Header

const BlogsList = [
  {
    name: "Blog List 01",
    url: "blog-list-1.html",
  },
  {
    name: "Blog List 02",
    url: "blog-list-2.html",
  },
  {
    name: "Blog List 03",
    url: "blog-list-3.html",
  },
  {
    name: "Blog Masonry",
    url: "blog-masonry.html",
  },
]
const ProductionList = [
  {
    name: "Production List",
    url: "our-projects-list.html",
  },
  {
    name: "Production Grid",
    url: "our-projects-grid.html",
  },
]

const Home = [
  {
    name: 'Home Production',
    url: 'index-film-making.html'
  },
  {
    name: 'Home Film Making',
    url: 'index-film-making.html'
  },
  {
    name: 'Home Studio',
    url: 'index-studio.html'
  },
  {
    name: 'Home Director',
    url: 'index-director.html'
  },
  {
    name: 'Home Agency',
    url: 'index-agency.html'
  },
  {
    name: 'Home Blogger',
    url: 'index-blogger.html'
  },
  {
    name: 'Home Showcase',
    url: 'index-showcase.html'
  },
]

const OurServicesList = [
  {
    name: "Video Editing",
    id: "video-editing",
  },
  {
    name: "3D Product Visualization",
    id: "3d-product-visualization",
  },
  {
    name: "Image Editing",
    id: "image-editing",
  },
]


const OurTeam = [
  {
    name: "Our Team 01",
    url: "our-team-1.html",
  },
  {
    name: "Our Team 02",
    url: "our-team-2.html",
  },
]
const About = [
  {
    name: "About 01",
    url: "about-01.html",
  },
  {
    name: "About 02",
    url: "about-02.html",
  },
]

const GalleryList = [
  {
    name: "Gallery 01",
    url: "gallery-1.html",
  },
  {
    name: "Gallery 02",
    url: "gallery-2.html",
  },
]
