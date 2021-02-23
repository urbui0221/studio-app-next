import "../styles/globals.css"
import Footer from '../components/layouts/Footer.component'
import Header from '../components/layouts/Header'
import { GlobalStyles } from '../components/utils/GlobalStyles'
import { useRouter } from 'next/router'
import ScrollToTopbtn from "../components/ui/ScrollToTopbtn.component"
import styled from "styled-components"
import ToastStateProvider from "../components/utils/ToastState"

export default function App({ Component, pageProps}) {
  const Router = useRouter();
  return (
    <>
      <GlobalStyles />
      {Router.pathname !== '/404' && <Header />}
       <Container>
         <ToastStateProvider>
          <Component {...pageProps} />
         </ToastStateProvider>
       </Container>
      {Router.pathname !== '/404' && <Footer />}
      <ScrollToTopbtn />
    </>
  )
}

const Container = styled.main`
@media only screen and (max-width : 900px){
  margin-top : 101px;
}
`
