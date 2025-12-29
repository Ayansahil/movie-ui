import React from "react";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import SidebarLogo from "./components/Sidebar/SidebarLogo.jsx";
import SidebarMenu from "./components/Sidebar/SidebarMenu.jsx";
import SidebarFooter from "./components/Sidebar/SidebarFooter.jsx";
import Topbar from "./components/Topbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import ContinueRow from "./components/ContinueRow.jsx";

const App = () => {
  return (
    <div className="flex min-h-screen bg-[#1A1625]">
      <Sidebar>
        <SidebarLogo />
        <SidebarMenu />
        <SidebarFooter />
      </Sidebar>
     <div className="flex-1 min-h-screen">
      <Topbar />
      <HeroSection />
      <ContinueRow />
    </div>
    </div>
  );
};

export default App;
