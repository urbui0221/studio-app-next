import styled from 'styled-components'
import Link from 'next/link'

const Header = () => {
   
    return (
        <LayoutHeader>
           <Logo>
             <img src="/logo_alt.png" src="log_alt" />
           </Logo>
           <Navbar>
               <Link href="/">
                   Home
               </Link>
               <Link href="/pages">
                   Pages
               </Link>
               <Link href="/production">
                   Production
               </Link>
               <Link href="/blog">
                   Blog
               </Link>
               <Link href="/contact">
                   Contact
               </Link>
           </Navbar>
        </LayoutHeader> 
     )
}

export default Header

const LayoutHeader = styled.header`
display: flex;
justify-content : space-between;
align-items: center;
width : 100%;
padding : 4rem 12rem;
position : fixed;
background-color : ${props => props.backgroundColor};
`
const Logo = styled.div`

`
const Navbar = styled.nav`
a{
  margin-left : 5rem;
}
`