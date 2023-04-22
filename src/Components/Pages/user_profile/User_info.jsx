import React from "react";

export default function UserInfo(){
    return (
        <>
        <div className="grid grid-cols-4 ">
            <div className="mt-4">
                <img src="" alt="" className="bg-yellow-900 w-20 aspect-square rounded-[100%]" />  
            </div>
            <div className="flex flex-col gap-1 items-center justify-center font-medium ">
                <button className="">0</button>
                <p>Post</p>
            </div>
            <div className="flex flex-col gap-1 items-center justify-center font-medium ">
                <button className="">152</button>
                <p>Followers</p>
            </div>
            <div className="flex flex-col gap-1 items-center justify-center font-medium ">
                <button className="">162</button>
                <p>Following</p>
            </div>
        </div>
        <div className="mb-2">
            <p className="text-lg">Bipin koirala</p>
            <p className="text-sm">Ntg</p>
        </div>
            <div className="grid grid-cols-user-edit gap-2">
                <button className="bg-gray-600 px-0 py-2 rounded-[.5rem]">Edit Profile</button>
                <button className="bg-gray-600 px-0 py-2 rounded-[.5rem]">Share Profile</button>
                <button className="bg-gray-600 px-0 py-2 rounded-[.5rem]">Add</button>
            </div>
        </>
    )
}