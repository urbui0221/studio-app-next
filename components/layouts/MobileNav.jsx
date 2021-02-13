import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const MobileNav = ({...otherProps },ref) => {
    return (
       <>
        <Navbar ref={ref} {...otherProps}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="#">
                <Dropdown>
                    <div className="service-dropdown">
                        <span>
                            Services
                        </span>
                        <i className="sub-menu-toggle fa fa-angle-down"></i>
                    </div>
                </Dropdown>
            </Link>
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
padding : 1rem 2rem;
border-bottom : 1px solid rgba(0,0,0,0.1);
.service-dropdown{
    display :flex;
    justify-content : space-between;
    align-items : center;
}
&:hover span i {
    color : var(--primary);
}
`

