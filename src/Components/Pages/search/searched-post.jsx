import React, { useState } from "react";
import { useParams,useLocation ,useSearchParams} from "react-router-dom";

function SearchedPosts() {
    console.log(useParams(),useLocation(),useSearchParams())
    return (
        <div>this is a post </div>
    )
}

export default SearchedPosts