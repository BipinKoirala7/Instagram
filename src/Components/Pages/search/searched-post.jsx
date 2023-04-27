import React, { useState,useEffect } from "react";
import { useParams,useLocation} from "react-router-dom";

import fetchAPI from "../../utils/fectch-api";
import PostLayout from '../../utils/post-layout'

function SearchedPosts() {
    console.log(useLocation())
    const postId = useParams()
    const [PostInfo ,setPostInfo] = useState({})
    
    return (
        <>
            <PostLayout obj={PostInfo} />
        </>
    )
}

export default SearchedPosts