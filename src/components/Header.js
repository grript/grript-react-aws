import React from 'react';
import logo from '../logo.svg';
import NavHeader from './NavHeader';
import NavMainIcon from './NavMainIcon';
import ButtonHamburger from './ButtonHamburger';

const Header = () => {
  return (
    <header className="App-header">
      <ButtonHamburger />
      <img src={logo} className="App-logo" alt="logo" />
      <NavHeader />
      <NavMainIcon />

    </header>
  );
}
export default Header;