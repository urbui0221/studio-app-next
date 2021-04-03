import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html{
  scroll-behavior : smooth;
}
:root{
  --head: 'Merriweather', serif; 
  --display: 'Montserrat', sans-serif;
  --font3 : 'Lato', sans-serif;
  --icon: 'Ionicons';
  
  //colors
  --baseBg : #FFFFFF;
  --secondary : #a5a5a5;
  --primary : #da0e2b;
  --baseCol : #000000;
  --tertiary : #869791;
  --tertiary2 : #333333;
  --dimGray : #696969;
  --whiteSmoke : #f4f4f4;
  --gray94 : #f0f0f0;
  --gray80 : #cccccc;
  --gray67 : #ababab;
  --lightGray : #eeeeee;
  --lynxWhite : #f7f7f7;
  --lynxWhite1 : #f6f7f7;
}
html{
  font-size : 62.5%;
}
html,
body {
  padding: 0;
  margin: 0;
  position : relative;
}

body {
  font-family: var(--display);
  font-weight: 400;
  font-style: normal;
  line-height: 1.8;
  letter-spacing: 0;
  color: var(--dimGray);
  font-size: 15px;
  overflow-x : hidden;
  #__next{
    overflow-x : hidden;
  }
}

ul, ol {
  list-style: none;
  padding: 0;
}

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
	color: var(--primary);
}
a:focus {
	text-decoration: none;
}

blockquote {
  font-size: 20px;
  font-style: italic;
  color: #ababab;
  font-weight: 400;
  padding: 20px 60px;
  margin: 0;
border: none;
}
blockquote:before, blockquote:after, q:before, q:after {
  content: "";
}
img {
  max-width: 100%;
  height: auto;
  vertical-align: top;
}
iframe {
border: none;
width: 100%;
}
button, input, select, textarea {
  font-size: 15px;
  color: #404040;
  background-color: #f4f4f4;
  font-family: Lato;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
input[type="text"], input[type="email"], input[type="url"], input[type="password"], input[type="search"], input[type="number"], input[type="tel"], input[type="range"], input[type="date"], input[type="month"], input[type="week"], input[type="time"], input[type="datetime"], input[type="datetime-local"], input[type="color"], textarea {
  border: 1px solid #f1eeea;
  border-radius: 3px;
  color: #666;
  padding: 7px 15px;
  outline: 0;
  width: 100%;
  -webkit-transition: all .5s;
  -moz-transition: all .5s;
  -ms-transition: all .5s;
  -o-transition: all .5s;
  transition: all .5s;
}
input[type="text"], input[type="email"], input[type="url"], input[type="password"], input[type="search"], input[type="number"], input[type="tel"], input[type="range"], input[type="date"], input[type="month"], input[type="week"], input[type="time"], input[type="datetime"], input[type="datetime-local"], input[type="color"] {
  height: 40px;
}
h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
  font-family: Montserrat,Helvetica,Arial,sans-serif;
  font-weight: 700;
  font-style: normal;
  line-height: 1.3;
  letter-spacing: 0;
  color: #333;
margin-top: 0;
}
h1, .h1 {
font-size:12rem;
}
h2, .h2 {
  font-size: 10rem;
}
h3, .h3 {
  font-size: 6rem;
}
h4, .h4 {
  font-size: 3rem;
}
h5, .h5 {
  font-size: 18px;
}
h6, .h6 {
  font-size: 14px;
}

::-webkit-scrollbar {
  width: 0.8rem;
  &-track {
    background: var(--dimGray);
  }
  &-thumb{
    background: #888;
    border-radius: 1rem;
    &:hover{
      background: red;
    }
  }
}


::-webkit-scrollbar-thumb:hover {
  
}

`
