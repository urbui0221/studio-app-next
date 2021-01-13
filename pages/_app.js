import { createGlobalStyle } from 'styled-components'
import { GlobalStyles } from '../components/utils/GlobalStyles'

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}