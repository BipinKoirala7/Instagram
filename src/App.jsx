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
    <div className="App">
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
      <Footer />
    </div>
  )
}

export default memo(App)
