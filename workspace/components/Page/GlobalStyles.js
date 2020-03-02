import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.6rem;
    font-family: "Roboto", sans-serif;
    line-height: 1.5;
  }
  
  #__next {
    width: 100%;
    height: 100vh;
  }
  
  ::-webkit-scrollbar {
    width: 5px;
  }
  
  @media (min-width: 768px) {
    ::-webkit-scrollbar {
      width: 10px;
    }
  }
  
  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.08);
  }
  
  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.25);
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.5);
  }
  
  :root {
    --header-height: 80px;
    --navigation-width: 220px;
    --content-width: 1024px;
  
    --z-index-header: 150;
    --z-index-navigation: 100;
    --z-index-navigation-header: 150;
    --z-index-router-progress: 1000;
  }
`;

export default GlobalStyle;
