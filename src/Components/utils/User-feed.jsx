import React,{memo} from "react";
import PostLayout from "./post-layout";
function UserFeed(props) {
    // console.log(props.postobj)
    // const postcollection = props.postobj.map(item => {
    //     return <PostLayout key={item.user_id} postsdata={item} />
    // })
    return (
        <div className="h-[100%]">
            {PostLayout()}
        </div>
    )
}

export default memo(UserFeed)