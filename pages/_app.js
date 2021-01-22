import "../styles/globals.css"
import Footer from '../components/layouts/Footer.component'
import Header from '../components/layouts/Header'
import { GlobalStyles } from '../components/utils/GlobalStyles'
import 'swiper/swiper.scss';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}