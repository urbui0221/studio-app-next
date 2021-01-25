import "../styles/globals.css"
import Footer from '../components/layouts/Footer.component'
import Header from '../components/layouts/Header'
import { GlobalStyles } from '../components/utils/GlobalStyles'
import { useRouter } from 'next/router'
import ScrollToTopbtn from "../components/ui/ScrollToTopbtn.component"
import useWindowScroll from "../custom/hooks/useWindowScroll"

export default function App({ Component, pageProps}) {
  const Router = useRouter();
  const scroll = useWindowScroll(); 

  return (
    <>
      <GlobalStyles />
      {Router.pathname !== '/404' && <Header />}
      <Component {...pageProps} />
      {Router.pathname !== '/404' && <Footer />}
      { scroll &&  <ScrollToTopbtn />}
    </>
  )
}

