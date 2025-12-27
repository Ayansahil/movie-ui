import React from 'react'
import Sidebar from './components/Sidebar.jsx'
import Topbar from './components/Topbar.jsx'
import HeroSection from './components/HeroSection.jsx'
import ContinueRow from './components/ContinueRow.jsx'


const App = () => {
  return (
  <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Topbar />
      <HeroSection/>
      <ContinueRow />
      </div>
      
      </div>
  )
}

export default App