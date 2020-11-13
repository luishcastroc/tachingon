import { createGlobalStyle } from 'styled-components'
import bg from '../assets/images/bg.png'

const GlobalStyles = createGlobalStyle`
  :root {
    --red: #FF4949;
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #efefef;
    --maroon: #800000;
    --brown: #8e1111;
    --golden: #DAA520;
  }
  

  html {
    background-image: url(${bg});
    background-repeat: repeat;
    background-attachment: fixed;
    font-size: 10px;
    height: 100%
  }

  body {
    font-size: 2rem;
    overflow: hidden;
    box-sizing: border-box;
    height: 100%;
    margin: 0px;
  }

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  img {
    max-width: 100%;
  }

  #___gatsby, #gatsby-focus-wrapper {
    height: 100%;
  }
`

export default GlobalStyles
