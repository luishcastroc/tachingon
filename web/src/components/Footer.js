import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'

import paper from '../assets/images/paper.png'

const FooterStyles = styled.div`
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: 80px;
  display: grid;
  grid-template-columns: 30px 30px;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background: var(--maroon);
  color: white;
  padding: 0px 10px 0px 10px;
  border-width: 35px;
  border-style: solid;
  border-image: url(${paper}) 100 25 50 repeat;
  border-bottom: 0;
  border-left: 0;
  border-right: 0;

  a {
    &:hover {
      border-bottom: 2px solid white;
    }
  }
`
export default function Footer() {
  const data = useStaticQuery(graphql`
    query {
      facebook: file(relativePath: { eq: "facebook.png" }) {
        childImageSharp {
          fixed(width: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      twitter: file(relativePath: { eq: "twitter.png" }) {
        childImageSharp {
          fixed(width: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  console.log('data: ', data)
  return (
    <FooterStyles>
      <a
        href="https://www.facebook.com/Taquer%C3%ADa-Tachingon-108391144359900/?view_public_for=108391144359900"
        title="facebook"
        target="_blank"
        rel="noreferrer"
      >
        <Img fixed={data.facebook.childImageSharp.fixed} alt="Facebook" />
      </a>
      <Img fixed={data.twitter.childImageSharp.fixed} alt="Twitter" />
    </FooterStyles>
  )
}
