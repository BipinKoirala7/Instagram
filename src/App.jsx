import { useState,useEffect,memo } from 'react'
import './App.css'
import Header from './Components/header'
import Footer from './Components/footer'
import Posts from './Components/posts'
import UserStoriesCollection from "./Components/UserStoreiesCollection"


function App() {
  const [posts , setPosts] = useState([])

  // useEffect(()=>{
  //   fetch('https://instagram47.p.rapidapi.com/user_following?userid=1718924098',
  //   {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': '1e70e5d09amshdf1eb4eedbc71acp1cebf7jsn509094adad41',
  //       'X-RapidAPI-Host': 'instagram47.p.rapidapi.com'
  //     }
  //   }
  //   )
  //     .then(res => res.json())
  //     .then(data=> console.log(data))
  // },[])

  return (
    <div className="App">
      <Header />
      <UserStoriesCollection/>
      <div className="all-posts">
        <Posts/>
      </div>
      <Footer />
    </div>
  )
}

export default memo(App)
