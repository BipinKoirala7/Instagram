import React,{useEffect,useState} from "react";
import Story from "./Story";
import fetchAPI from "./fectch-api";

export default function StoryCollection() {

const[UserStories , setUserStroies] = useState([])

useEffect(()=> {
  async function fetchuserstories() {
    const url =
      "https://instagram-stories1.p.rapidapi.com/user_stories?userid=1718924098";
    const options = {
      method: "GET",
      headers: {
        "content-type": "application/octet-stream",
        "X-RapidAPI-Key": "1e70e5d09amshdf1eb4eedbc71acp1cebf7jsn509094adad41",
        "X-RapidAPI-Host": "instagram-stories1.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setUserStroies(result);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
  // fetchuserstories()
},[])
  let storiescount = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const stories = storiescount.map((item) => {
    return <Story key={item} />;
  });
  return <div className="hide-scrollbar stroy-collection">{stories}</div>;
}
