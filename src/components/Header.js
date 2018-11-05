import React from 'react';
import logo from '../logo.svg';
import NavMain from './NavMain';
import NavMainIcon from './NavMainIcon';
import HamburgerIcon from './HamburgerIcon';

const Header = () => {
  return (
    <header className="App-header">
      <HamburgerIcon />
      <img src={logo} className="App-logo" alt="logo" />
      <NavMain />
      <NavMainIcon />

    </header>
  );
}
export default Header;