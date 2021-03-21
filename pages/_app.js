import '../styles/globals.css';
import Footer from '../components/layouts/Footer.component';
import Header from '../components/layouts/Header';
import { GlobalStyles } from '../components/utils/GlobalStyles';
import { useRouter } from 'next/router';
import ScrollToTopbtn from '../components/ui/ScrollToTopbtn.component';
import styled from 'styled-components';
import ToastStateProvider from '../components/utils/ToastState';
import Cookies from '../components/ui/Cookies';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps }) {
  const Router = useRouter();
  const [isActive, setIsActive] = useState(true);
  const CookieVariants = {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };
  const CookieAccepter = _ => {
    setIsActive(false);
    if (typeof window !== 'undefined') {
      localStorage.setItem('doneOnce', true);
    }
  };
 
  return (
    <>
      <GlobalStyles />
      {Router.pathname !== '/404' && <Header />}
      <Container route={Router.pathname}>
        <ToastStateProvider>
          <Component {...pageProps} />
          <CookieContainer>
            <AnimatePresence>
              {isActive &&
                typeof window !== 'undefined' &&
                !localStorage.getItem('doneOnce') && (
                  <Cookies
                    variants={CookieVariants}
                    initial={'from'}
                    animate={'to'}
                    exit='exit'
                    handleClose={CookieAccepter}
                  />
                )}
            </AnimatePresence>
          </CookieContainer>
        </ToastStateProvider>
      </Container>
      {Router.pathname !== '/404' && <Footer />}
      <ScrollToTopbtn />
    </>
  );
}

const Container = styled.main`
	margin-top: ${props => props.route === "/" ? "0px" : '101px'};
`;

const CookieContainer = styled.div`
	max-width: 95%;
	width: 100%;
	margin: 0 auto;
`;

