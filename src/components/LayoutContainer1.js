
// file LayouContainer1.js

import React from 'react';
import Header from './Header';
import Main from './Main';
import MainWithLeftSideBar from './MainWithLeftSideBar';
// import SideBar froim './SideBar'
import SideBarAsLeftColumnOnDesktop from './SideBarAsLeftColumnOnDesktop';

const Home = () => {
  return (
    <div>
      <Header />
      <div className="header-height"></div>
      {/* <SideBar /> */}
      <SideBarAsLeftColumnOnDesktop />
      <MainWithLeftSideBar />
    </div>  
  );
}
export default Home;