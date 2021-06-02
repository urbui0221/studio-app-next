import { AnimatePresence,motion } from 'framer-motion'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const OurServicesList = [
    {
      children: "Video Editing",
      href: "video-editing",
    },
    {
      children: "3D Product Visualization",
      href: "3d-product-visualization",
    },
    {
      children: "Image Editing",
      href: "image-editing",
    },
  ]

const MobileNav = ({...otherProps},ref) => {

    const [isOpen,setOpen] = useState(false);
    const [height,setHeight] = useState(0);

    const contentRef = useRef(null);

    useEffect(() => {
        if(isOpen){
            setHeight(contentRef.current.scrollHeight);
        }
    },[isOpen])

    const dropDownToggler = _ => {
        setOpen(!isOpen);
    }

    return (
       <>
        <Navbar {...otherProps} ref={ref}>
            <Link href="/">Home</Link>
            <Link href="/about" >About</Link>
            <Link href="/pricing" >Pricing</Link>
            <Dropdown 
            active={isOpen}
            maxHeight={height}>
                <button onClick={dropDownToggler}>
                    <span className="accordion-title">
                        Services
                    </span>
                    <i className="sub-menu-toggle fa fa-angle-down"></i>
                </button>
                <div className="accordion-content" ref={contentRef}>
                    {
                        OurServicesList.map(link => {
                            return <Link key={link.children} {...link}  />
                        })
                    }
                </div>
            </Dropdown>
            <Link href="/contact" >Contact Us</Link>
            <Link href="/blog" >Blog</Link>
            <Link href="/trials" >Trials</Link>
        </Navbar>
       </>
    )
}

export default React.forwardRef(MobileNav)

const Navbar = styled(motion.nav)`
z-index : 100;
height : 100vh;
width : 25rem;
background-color : var(--baseBg);
position : fixed;
top : 0;
left : 0;
display : flex;
flex-direction :column;
font-family : var(--font3);
a{
    text-transform : capitalize;
    padding : 1rem 2rem;
    border-bottom : 1px solid rgba(0,0,0,0.1);
    cursor: pointer;
}
`
const Dropdown = styled.div`
border-bottom : 1px solid rgba(0,0,0,0.1);
button {
    display : flex;
    width : 100%;
    justify-content : space-between;
    align-items : center;
    padding : 1rem 2rem;
    border:none;
    outline : none;
    font-family : var(--font3);
}
i{  
    transition : 0.3s all;
    transform : ${props => props.active ? 'rotate(180deg)' : 'rotate(0deg)'};
}

.accordion
{
    &-content{
        display : flex;
        flex-direction : column;
        overflow : hidden;
        max-height: ${props => props.active ? `${props.maxHeight}px`: '0px'};
        transition : 0.3s all;
        a{
            border-bottom : none;
            padding: 1rem 3rem;
        }
    }
}
`
