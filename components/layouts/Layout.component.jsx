import Head from 'next/head'
import React from 'react'
import Footer from './Footer.component'
import Header from './Header.component'

const Layout = ({route,children}) => (
    <>
        <Head>
            <title>Nine Studio | {route}</title>
            <link rel="icon" href="/favicon.ico" />
            <link
            rel="preload"
            href="/fonts/EBGaramond/EBGaramond-Regular.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/EBGaramond/EBGaramond-Medium.ttf"
            as="font"
            crossOrigin=""
          />
        </Head>
        <main>
            {children}
        </main>
    </>
)

export default Layout
