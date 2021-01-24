import "../styles/globals.css"
import Footer from '../components/layouts/Footer.component'
import Header from '../components/layouts/Header'
import { GlobalStyles } from '../components/utils/GlobalStyles'
import { useRouter } from 'next/router'


export default function App({ Component, pageProps}) {
  const Router = useRouter();
  console.log(Router.pathname);
  return (
    <>
      <GlobalStyles />
      {Router.pathname !== '/404' && <Header />}
      <Component {...pageProps} />
      {Router.pathname !== '/404' && <Footer />}
    </>
  )
}

