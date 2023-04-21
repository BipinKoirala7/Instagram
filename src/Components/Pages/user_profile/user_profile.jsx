import React from "react";
import { Link,Routes,Route } from "react-router-dom";

import ProfileHeader from './Profile_header'
import UserInfo from './User_info'
import UserPostsCollection from './user_posts_collection'
import UserStoryHighlights from './user_story_highlights'
import UserVideoCollections from './user_video_collection'
import './user_profile.css'

function UserProfile(){
    return(
        <div className="user-profile">
            <ProfileHeader />
            <UserInfo />
            <UserStoryHighlights />
            <div className="user-upload-collections">
                <Link to="user_posts" ><button style={{background:'white'}} className="user-posts-select">Posts</button></Link>
                <Link to="user_video"><button style={{background:'white'}} className="user-video-select">Video</button></Link>
            </div>
            <Routes>
                <Route exact path="user_profile/user_posts" element={<UserPostsCollection />}/>
            </Routes>
            <Routes>
                <Route exact path="user_profile/user_video" element={<UserVideoCollections />}/>
            </Routes>
        </div>
    )
}

export default UserProfile