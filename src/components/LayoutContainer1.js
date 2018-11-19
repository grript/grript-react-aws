
// file LayouContainer1.js

import React from 'react';
import Header from './Header';
import Main from './Main';
import MainWithLeftSidebar from './MainWithLeftSidebar';
// import Sidebar froim './Sidebar'
import SidebarAsLeftColumnOnDesktop from './SidebarAsLeftColumnOnDesktop';

const Home = () => {
  return (
    <div>
      <Header />
      <div className="header-height"></div>
      {/* <Sidebar /> */}
      <SidebarAsLeftColumnOnDesktop />
      <MainWithLeftSidebar />
    </div>  
  );
}
export default Home;