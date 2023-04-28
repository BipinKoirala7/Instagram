import React, { useState,useEffect } from "react";
import { useParams,useLocation} from "react-router-dom";

import fetchAPI from "../../utils/fectch-api";
import PostLayout from '../../utils/post-layout'
import post from "../../utils/post-layout";

function SearchedPosts() {
    const{state}= useLocation()
    const [PostInfo ,setPostInfo] = useState({})
    
    return (
        <>
            <PostLayout obj={state} />
        </>
    )
}

export default SearchedPosts