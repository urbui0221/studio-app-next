import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'

const Layout = ({route,children}) => (
    <>
        <Head>
            <title>Nine Studio | {route}</title>
            <link rel="icon" href="/favicon.ico" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Nine studio" />
            <meta property="og:description" content="Description" />
            <meta property="og:url" content="http://www.yourdomain.com" />
            <meta property="og:image" content="https://images.unsplash.com/photo-1571624436279-b272aff752b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80" />
        </Head>
        <Main>
            {children}
        </Main>
    </>
)

export default Layout


const Main = styled.main`
position: relative;
`