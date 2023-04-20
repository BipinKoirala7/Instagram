import React from "react";
import { Link,Routes,Route } from "react-router-dom";

import ProfileHeader from './Profile_header'
import UserInfo from './User_info'
import PostsCollection from './user_posts_collection'
import UserStoryHighlights from './user_story_highlights'
import UserVideoCollections from './user_video_collection'

function UserProfile(){
    return(
        <div className="user-profile">
            <ProfileHeader />
            <UserInfo />
            <UserStoryHighlights />
            <div className="user-upload-collections">
                <Link to="*/user_posts" ><button style={{background:'white'}} className="user-posts-select">Posts</button></Link>
                <Link to="*/user_video"><button style={{background:'white'}} className="user-video-select">Video</button></Link>
            </div>
            <Routes>
                <Route path="/user_posts/" element={<PostsCollection />}/>
            </Routes>
            <Routes>
                <Route path="/user_video/" element={<UserVideoCollections />}/>
            </Routes>
        </div>
    )
}

export default UserProfile