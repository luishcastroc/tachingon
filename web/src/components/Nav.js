import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import paper from '../assets/images/paper.png'

const NavStyles = styled.nav`
  /* margin-bottom: 3rem; */
  flex-shrink: 0;
  --columns-nav: 35% repeat(4, 120px);

  ul {
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;
    display: grid;
    grid-template-columns: var(--columns-nav);
    grid-gap: 2rem;
    align-items: center;
    justify-content: center;
    color: white;
    min-height: 80px;
    background: var(--maroon);
    border-width: 35px;
    border-style: solid;
    border-image: url(${paper}) 100 25 15 repeat;
    border-bottom: 0;
    border-left: 0;
    border-right: 0;
    @media (max-width: 800px) {
      --columns-nav: 35% repeat(4, 1fr);
    }
  }

  li:not(.logo-item) {
    height: 60%;
    min-height: 40px;
    width: 100%;

    a {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2.3rem;
      text-decoration: none;
      color: white;
      &:visited {
        color: white;
      }
      &[aria-current='page'],
      :hover {
        background-color: var(--brown);
        box-shadow: inset 0 -5px 0 0 var(--golden);
      }
      @media (max-width: 800px) {
        font-size: 1.8rem;
      }
    }
  }

  .menu-item {
    max-width: 100px;
  }

  .logo-item {
    a {
      color: white;
      text-decoration: none;
      &:visited {
        color: white;
      }
    }
  }

  @media (max-width: 600px) {
    --columns: 4;
    ul {
      grid-template-rows: auto auto;
      grid-template-columns: repeat(var(--columns), 1fr);
      justify-items: center;
    }
    .logo-item {
      order: 0;
      grid-column: 1 / -1;
    }
  }
  @media (max-width: 500px) {
    --columns: 2;
  }
`

export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <li className="logo-item">
          <Link to="/">Im the LOGO</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/menu/">Menu</Link>
        </li>
        <li>
          <Link to="/order">Order</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </NavStyles>
  )
}
