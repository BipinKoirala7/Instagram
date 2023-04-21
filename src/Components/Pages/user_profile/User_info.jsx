import React from "react";

export default function UserInfo(){
    return (
        <>
        <div className="user-main-info">
            <div className="user-profile">
                <img src="" alt="" className="user-profile-pic" />  
            </div>
            <div className="user-post-info">
                <button className="user-btn user-post-count">0</button>
                <p>Post</p>
            </div>
            <div className="user-followers-info">
                <button className="user-btn user-followers-count">152</button>
                <p>Followers</p>
            </div>
            <div className="user-following-info">
                <button className="user-btn user-following-count">162</button>
                <p>Following</p>
            </div>
        </div>
        <div className="user">
            <p className="user-name">Bipin koirala</p>
            <p className="user-description">Ntg</p>
        </div>
            <div className="user-info-edit">
                <button className="user-edit-profile">Edit Profile</button>
                <button className="user-share-profile">Share Profile</button>
                <button className="user-add">Add</button>
            </div>
        </>
    )
}