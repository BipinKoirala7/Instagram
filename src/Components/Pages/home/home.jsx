import React, { useState } from "react";
import UserStoriesCollection from "../../utils/UserStoreiesCollection";
import UserFeed from "../../utils/User-feed";
import Headerofhome from "../../Elements Components/home_header";

function Home() {
  const [userFeedObj,setUserFeedObj] = useState([])
  return (
    <>
      <Headerofhome />
      <UserStoriesCollection />
      <UserFeed postsobj={userFeedObj} />
    </>
  );
}

export default Home;
