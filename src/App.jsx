import { useState,useEffect,memo } from 'react'
import './App.css'
import Header from './Components/header'
import Footer from './Components/footer'
import Posts from './Components/posts'
import UserStoriesCollection from "./Components/UserStoreiesCollection"


function App() {
  const [posts , setPosts] = useState([])

  // useEffect(()=>{
  //   fetch('https://www.instagram.com/graphql/query/?query_hash=472f257a40c653c64c666ce877d59d2b&variables={"id":"93024","first":12,"after":"XXXXXXXX"}')
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
