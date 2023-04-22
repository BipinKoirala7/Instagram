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
        <div className="p-4">
            <ProfileHeader />
            <UserInfo />
            <UserStoryHighlights />
            <div className="flex items-center justify-evenly">
                <Link to="user_profile/user_posts" ><button className="bg-slate-800 border-0 text-white px-8 py-2 rounded-[.5em] text-lg">Posts</button></Link>
                <Link to="user_profile/user_video"><button className="bg-slate-800 border-0 text-white px-8 py-2 rounded-[.5em] text-lg">Video</button></Link>
            </div>
            <Routes>
                <Route path="user_profile/user_posts" element={<UserPostsCollection />}/>
            </Routes>
            <Routes>
                <Route path="user_profile/user_video" element={<UserVideoCollections />}/>
            </Routes>
        </div>
    )
}

export default UserProfile