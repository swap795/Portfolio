import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const NavStyle = styled.div`
   min-height: 10vh;
   display: flex;
   margin: auto;
   justify-content: space-between;
   align-items: center;
   padding: 1rem 10rem;
   background: #282828;
   a{
      color: white;
      text-decoration: none;
   }
   ul{
      display: flex;
      list-style: none;
   }
   #Logo{
      font-size: 1.5rem;
      font-family: "Lobster", cursive;
      font-weight: lighter;
   }
   li{
      padding-left: 10rem;
      position: relative;
   }
`;


const Nav = () => {
   return (
      <NavStyle>
         <h1><Link id="Logo" to="/">Home</Link></h1>
         <ul>
            <li>
               <Link to="/about">About Me</Link>
            </li>
            <li>
               <Link to="/projects">Projects</Link>
            </li>
            <li>
               <Link to="/contact">Contact Me</Link>
            </li>
         </ul>
      </NavStyle>
   );
}

export default Nav;