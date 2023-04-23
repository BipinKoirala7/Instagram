import React,{memo} from "react";
import PostLayout from "./post-layout";
function UserFeed() {
    const Userfeeds = PostLayout()
    return (
        <div className="h-[100%]">
            {Userfeeds}
            {Userfeeds}
        </div>
    )
}

export default memo(UserFeed)