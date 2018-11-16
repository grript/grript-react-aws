import React from 'react';
import logo from '../logo.svg';
import NavHeader from './NavHeader';
import NavMainIcon from './NavMainIcon';
import ButtonHamburger from './ButtonHamburger';

const HeaderInner = () => {
  return (
    <div className="header-inner">
      <ButtonHamburger />
      <img src={logo} className="App-logo" alt="logo" />
      <NavHeader />
      <NavMainIcon />

    </div>
  );
}
export default HeaderInner;