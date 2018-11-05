import React from 'react';
import styled from "styled-components"


import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';



// const RenderedComponentDemo = () => <ComponentDemo>Hello Demos!</ComponentDemo>;


const MainNav = () => {
  return (
      <nav className="nav-primary" aria-label="Primary Navigation">
        <MainNavUl>
          <MainNavLink><Link to="/">Home</Link></MainNavLink>
          <MainNavLink><Link to="/about">About</Link></MainNavLink>
          <MainNavLink><Link to="/hello">Hello</Link></MainNavLink>
          <MainNavLink><Link to="/hello/goodmorning">Hello good morning</Link></MainNavLink>
          <MainNavLink><Link to="/contact">Contact</Link></MainNavLink>
          <MainNavLink><Link to="/admin">Admin</Link></MainNavLink>
          <MainNavLink><Link to="/demos">Demos</Link></MainNavLink>
        </MainNavUl>
      </nav>
  );
}



export default MainNav;

// 'css in js' styliung 
const MainNavUl = styled.ul`
  list-style-type: none;
`;
const MainNavLink = styled.li`
  a { 
    color: #fff; 
    text-decoration: none;
  }
`;