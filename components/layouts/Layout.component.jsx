import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'

const Layout = ({route,children}) => (
    <>
        <Head>
            <title>Nine Studio | {route}</title>
            <link rel="icon" href="/favicon.ico" />
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