import 'normalize.css'

import React from 'react'
import styled from 'styled-components'

import GlobalStyles from '../styles/GlobalStyles'
import Typography from '../styles/Typography'
import Footer from './Footer'
import Nav from './Nav'

const SiteBorderStyles = styled.div`
  max-width: 1200px;
  flex: 1;
  overflow-y: auto;
  width: 100%;
  margin: 4rem auto 4rem auto;
  margin-top: clamp(2rem, 10vw, 4rem);
  background: white;
  background-size: 1500px;
  padding: 5px;
  padding: clamp(5px, 1vw, 25px);
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.044);
  @media (max-width: 1100px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    width: auto;
  }
`

const LayoutStyles = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <LayoutStyles>
        <Nav />
        <SiteBorderStyles>{children}</SiteBorderStyles>
        <Footer />
      </LayoutStyles>
    </>
  )
}
