import "../styles/globals.css"
import { GlobalStyles } from '../components/utils/GlobalStyles'

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}