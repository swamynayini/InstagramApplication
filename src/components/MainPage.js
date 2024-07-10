import React from 'react'
import SideBar from './SideBar'
import CreatorPage from './CreatorPage'
import Stories from './Stories'

const MainPage = () => {
  return (
    <div className=' bg-black text-white overflow-y-scroll'>
        <Stories/>
        <SideBar/>
        <CreatorPage/>
    </div>
  )
}

export default MainPage