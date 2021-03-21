import Link from "next/link";
import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import Button from "../ui/Button.component";
import { useRouter } from 'next/router'
import useMediaQuery  from 'use-media-query-hook'
import MobileNav from "./MobileNav";
import { AnimatePresence, motion } from "framer-motion";

const Header = (props) => {
  const pageDropdownRef = useRef(null);

  const router = useRouter();

  const checkPath = path => path === router.pathname ? 'active' : '';

  const isTablet = useMediaQuery(`(max-width: 992px)`);

  console.log(router);

  const [hasScrolled, setHasScrolled] = useState(false)
  const [pagesDropdown, setPagesDropdown] = useState(false)

  const handleHamburgerClick = () => { setMobileNav(p => !p) }

  const handleScroll = () => {
    const scrollTop = window.scrollY
    if (scrollTop !== 0) {
      setHasScrolled(true)
    } else {
      setHasScrolled(false)
    }
  }


  const navRef = useRef(null);


  useEffect(() => {
    
    window.addEventListener('scroll', handleScroll);
    return () => {
    window.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll, pagesDropdown, pageDropdownRef])


  const NavbarVariants = {
    from : {
      x : '-25rem'
    },
    to : {
        x : '0rem',
        transition : {
            duration : 0.3
        } 
    },
    exit : {
        x : '-25rem',
        transition : {
            duration : 0.3
        } 
    }
}

const BackdropVariants = {
  from : {
    opacity : 0
  },
  to : {
      opacity : 1,
      transition : {
          duration : 0.3
      } 
  },
  exit : {
      opacity : 0,
      transition : {
          duration : 0.3
      } 
  }
}
const [mobileNav, setMobileNav] = useState(false)

const mobileNavRef = useRef(null);

useEffect(() => {
  const ToggleMount = clickable => {
    return  clickable.addEventListener('click',() => {
      setMobileNav(false);
    })
  }
  const ToggleUnmount = clickable => {
    return  clickable.removeEventListener('click',() => {
      setMobileNav(false);
    })
  }
  if(mobileNav){
    let links = mobileNavRef.current.childNodes;
    for(let i = 0; i<= (links.length - 1); i++){
      if(links[i].nodeName !== 'DIV'){
         ToggleMount(links[i]);
         ToggleUnmount(links[i])
      }
      else{
        let dropDown = links[i].lastElementChild.children
        for(let i = 0; i<= (dropDown.length - 1); i++){
          ToggleMount(dropDown[i]);
          ToggleUnmount(dropDown[i])
        }
      }
    }
  }
},[mobileNav])

  return (
    <HeaderContainer hasScrolled={hasScrolled}>
      {
        isTablet && 
        <AnimatePresence>
          {
            mobileNav && <>
            <MobileNav 
            ref={mobileNavRef}
            variants={NavbarVariants}
            initial={"from"}
            animate={"to"}
            exit="exit"
            />
            <Backdrop 
             variants={BackdropVariants}
             initial={"from"}
             animate={"to"}
             exit="exit" 
            onClick={_ => setMobileNav(false)}/>
            </>
          }
        </AnimatePresence>
      }
      <header id='header' className={`header ${hasScrolled ? "scrolling-menu" : ""} header-desktop header-1`}>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-3 p-0'>
              <div className='header-left'>
                <Link href='/' id='branding_logo' prefetch={false}>
                  <img
                    className='logo'
                    src={`${hasScrolled ? '/images/logo_alt.png' : '/images/logo.png' }`}
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
     {
       isTablet &&  <header className='header header-mobile'>
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
               <Link href='/' id='logo-2'>
                 <img
                   className='logo-image'
                   src='/images/logo_alt.png'
                   alt='Nine Studio Logo'
                 />
               </Link>
             </div>
           </div>
         </div>
       </div>
     </header>
     }
    </HeaderContainer>
  )
}

const Backdrop =styled(motion.div)`
position :fixed;
top: 0;
left : 0;
width : 100%;
height : 100%;
background-color : rgba(0,0,0,0.5);
z-index : 50; 
`

const HeaderContainer = styled.div`
z-index : 4000;
position : fixed;
top: 0;
width : 100%;

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
.header.header-1 {
    display: inline-block;
    width: 100%;
	min-height: 101px;
}
.header.header-1 .header-left {
    padding-left: 100px;
}
.header.header-1 .header-right {
    padding-right: 100px;
    text-align: right;
    position: static;
}
.header.header-1 .logo {
    margin-top: 20px;
}

.header.header-1 .header-right .open-search {
    display: inline-block;
    font-size: 18px;
    line-height: 1;
    margin-left: 20px;
    cursor: pointer;
    color: var(--tertiary2);
}
.header.header-overlay .header-right .open-search {
    color: var(--baseBg);
}
.header.header-overlay.scrolling-menu .menu-primary > ul > li > a,
.header.header-overlay.scrolling-menu .header-right .open-search {
    color: var(--tertiary2);
}


.header.scrolling-menu {
    position: fixed;
    background: var(--baseBg);
    top: 0;
    left: 0;
    -moz-box-shadow: 0 10px 20px rgba(0,0,0,.05);
    -webkit-box-shadow: 0 10px 20px rgba(0,0,0,.05);
    box-shadow: 0 10px 20px rgba(0,0,0,.05);
    z-index: 999;
}

header.header-mobile {
    display: none;
    padding: 30px 0;
    width: 100%;
    position : fixed;
    top: 0;
    left: 0;
    background-color: #fff;
    z-index: 40;
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
    font-family: var(--display);
    font-weight: 400;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: 0;
    font-size: 14px;
}
.header.header-1 .header-right nav.menu {
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
    color: var(--baseBg);
}
.header .header-right .menu-primary > ul > li > a {
    text-transform: uppercase;
    position: relative;
    color: ${props => props.hasScrolled ? 'var(--tertiary2)' : '#ffffff' };
	display: inline-block;
	padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 20px;
    padding-right: 20px;
}
.header .header-right .menu-primary > ul li.active > a {
	color: var(--primary);
}
.header .menu-primary > ul > li.dropdown > a:after {
    content: '\f3d0';
    margin-left: 10px;
    font-size: 12px;
    font-family: var(--icon);
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
    background-color: var(--baseBg);
    opacity: 0;
    transition: all .3s ease;
    padding: 20px 0;
    list-style: none;
    text-align: left;
    text-transform: none;
    -moz-box-shadow: 5px 10px 20px rgba(0,0,0,.1);
    -webkit-box-shadow: 5px 10px 20px rgba(0,0,0,.1);
    box-shadow: 5px 10px 20px rgba(0,0,0,.1);
	border-top: 2px solid var(--primary);
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
    color: var(--dimGray);
    text-transform: none;
    font-weight: 400;
    background: none;
    position: relative;
    border-bottom: 1px solid var(--whiteSmoke);
    white-space: normal;
}
.header .menu-primary .sub-menu li a:hover {
    border-bottom-color: var(--primary);
	color: var(--primary);
}
.header .menu-primary .sub-menu li.dropdown:after {
    content: '\f363';
    font-size: 16px;
    font-family: var(--icon);
    position: absolute;
    right: 20px;
    top: 14px;
    color: var(--dimGray);
}
.header .menu-primary .sub-menu li.dropdown:hover:after {
    color: var(--primary);
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
    border-top: 2px solid var(--primary);
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
    color: var(--baseBg);
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
    color: var(--dimGray);
    font-size: 56px;
    font-weight: 400;
    font-family: var(--head);
    line-height: 1;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -ms-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
}
.open-right-content ul li a:hover {
    opacity: 1;
    color: var(--primary);
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
    font-family: var(--display);
    color: var(--baseBg);
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
    font-family: var(--icon);
    font-size: 24px;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 7;
}
.slideout-menu {
	background: var(--baseBg);
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
    border-bottom: 1px solid var(--lightGray);
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
	background-color: var(--primary);
	color: var(--baseBg);
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
    background-color: var(--lightGray);
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
