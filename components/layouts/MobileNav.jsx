import { AnimatePresence,motion } from 'framer-motion'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const MobileNav = ({...otherProps },ref) => {

    const [isOpen,setOpen] = useState(false);
    const [height,setHeight] = useState(0);

    let DropdownRef = useRef(null);

    useEffect(() => {
      if(isOpen){
        setHeight(DropdownRef.children[1].offsetHeight);
        console.log(DropdownRef.children[1].offsetHeight)
      }
    },[isOpen])

    const DropDownVariants = {
        from : {
            display : 'none',  
            height : 0
        },
        to : {
            display : 'flex',
            height : height,
            transition : {
                duration : 0.3
            } 
        },
        exit : {
            display : 'none', 
            height : 0,
            transition : {
                duration : 0.3
            } 
        }
    }

    return (
       <>
        <Navbar ref={ref} {...otherProps}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/pricing">Pricing</Link>
            <Dropdown 
            ref={ele => DropdownRef = ele}>
                    <div className="service-dropdown" onClick={_ => setOpen(!isOpen)}>
                        <span>
                            Services
                        </span>
                        <i className="sub-menu-toggle fa fa-angle-down"></i>
                    </div>
                       {isOpen && <AnimatingDropdown 
                           variants={DropDownVariants}
                           initial={"from"}
                           animate={"to"}
                           exit="exit">
                               <AnimatePresence>
                               {
                                    
                                    [
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
                                    ].map(link => (
                                        <Link key={link.children} {...link}/>
                                    ))
                                }    
                               </AnimatePresence>
                        </AnimatingDropdown>}
            </Dropdown>
            <Link href="/contact">Contact Us</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/trials">Trials</Link>
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
.service-dropdown{
    display :flex;
    justify-content : space-between;
    align-items : center;
    padding : 1rem 2rem;

}
&:hover .service-dropdown{
    color : var(--primary);
    cursor: pointer;
}
.service-links{
    display : flex;
    flex-direction:column;
    a{
        border-bottom : none;
        background-color : var(--lightGray);
        padding : 1rem 4rem;
    }
}
`
const AnimatingDropdown = styled.div`
display : flex;
flex-direction:column;
transition: 0.3s all;
a{
    border-bottom : none;
    background-color : var(--lightGray);
    padding : 1rem 4rem;
}
`
