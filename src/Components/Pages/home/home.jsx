import React,{useState} from "react";
import UserStoriesCollection from '../../UserStoreiesCollection'
import Posts from "../../posts";
import Headerofhome from "../../Elements Components/home_header";



// useEffect(()=>{
  // async function fetchuserfeed(){
  //  const res = await fetch('https://instagram47.p.rapidapi.com/user_following?userid=1718924098',
  //   {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': '1e70e5d09amshdf1eb4eedbc71acp1cebf7jsn509094adad41',
  //       'X-RapidAPI-Host': 'instagram47.p.rapidapi.com'
  //     }
  //   }
    // )
    // const feeddata = await res.json()
    // console.log(feeddata)
    // const feedposts = feeddata.body.edges.map((item,index)=>{
    //   return ({

    //   })
    // })
  // }
  // fetchuserfeed()
  // setUserFeedPosts(feeddata.body.edges)
// },[])


function Home (){
    return (
        <>
            <Headerofhome />
            <UserStoriesCollection/>
            <Posts/>
        </>
    )
}

export default Home