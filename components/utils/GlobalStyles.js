import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html{
  font-size : 62.5%;
}
html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Lato';
}

body {
  font-family: Lato,Helvetica,Arial,sans-serif;
  font-weight: 400;
  font-style: normal;
  line-height: 1.8;
  letter-spacing: 0;
  color: #696969;
  font-size: 15px;
}

ul, ol {
  list-style: none;
}
position :relative;
width: 100vw;
height: 100vh;
a {
	color: #696969;
    text-decoration: none;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -ms-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
}
a:hover {
	text-decoration: none;
	color: #da0e2b;
}
a:focus {
	text-decoration: none;
}

nav,div,p,figure,section,main{
  font-size : 1.6rem;
}

* {
  box-sizing: border-box;
}

`