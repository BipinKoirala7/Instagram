import React,{useEffect,useState} from "react";
import Story from "./Story";
import fetchAPI from "./fectch-api";

export default function StoryCollection() {

const[UserStories , setUserStroies] = useState([])

useEffect(()=> {
  async function fetchuserstories(){
    const storeisarr = await fetchAPI('user_stories', 'userid', '1718924098')
    setUserStroies(storeisarr)
  }
  fetchuserstories()
},[])
  let storiescount = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const stories = storiescount.map((item) => {
    return <Story key={item} />;
  });
  return <div className="hide-scrollbar stroy-collection">{stories}</div>;
}
