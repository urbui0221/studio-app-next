import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html{
  font-size : 62.5%;
}
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}
position :relative;
width: 100vw;
height: 100vh;
a {
  color: inherit;
  text-decoration: none;
}

nav,div,p,figure,section,main{
  font-size : 1.6rem;
}

* {
  box-sizing: border-box;
}

`