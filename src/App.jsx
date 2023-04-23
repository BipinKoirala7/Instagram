import { useState,useEffect,memo } from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'

import Footer from './Components/Elements Components/footer'
import Create from './Components/Pages/Create/create'
import Video from './Components/Pages/Video/video'
import UserProfile from './Components/Pages/user_profile/user_profile'
import Search from './Components/Pages/search/search'
import Home from './Components/Pages/home/home'


function App() {

  return (
    <div className="w-[380px] bg-black text-white fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] grid grid-cols-1 grid-rows-app-grid h-screen max-h-screen">
      <div className='h-[100%] overflow-y-auto hide-scrollbar'>
        <Routes>
            <Route exact path='/' element={
              <>
              <Home/>
              </>}
              />
              <Route exact path='/search' element={
              <>
                <Search/>
              </>
              }
              />
              <Route exact path='/create' element={
              <><Create/></>
              }
              />
              <Route exact path='/video' element={
              <><Video/></>
              }
              />
              <Route exact path='/user_profile/*' element={
              <><UserProfile/></>
              }
              />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default memo(App)
