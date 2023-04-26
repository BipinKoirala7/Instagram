import React, { useState,useEffect,memo } from "react";
import fetchAPI from "../../utils/fectch-api";
import SearchEl from "../../utils/searchel"

function Search() {
    const [SearchResults, setSearchResults] = useState(JSON.parse(localStorage.getItem('readableObj')) || [])
    const [query, setQuery] = useState({ query: '' })

  async function showdata() {
    let data;
    data = query.query ? await fetchAPI("hashtag_post", "hashtag",query.query) : "";
    const dataObj = data.body.edge_hashtag_to_top_posts.edges.concat(
      data.body.edge_hashtag_to_media.edges
    );
    const readableObj = dataObj.map((item) => {
      return {
        comments_disabled: item.node.comments_disabled,
        Pic_dimensions: item.node.dimensions,
        photo_url: item.node.display_url,
        like_count: item.node.edge_liked_by,
        caption: item.node.edge_media_to_caption,
        comment_count: item.node.edge_media_to_comment,
        user_id: item.node.id,
        is_video: item.node.is_video,
        posts_owner: item.node.owner,
        post_shortcode: item.node.shortcode,
        thumbnail_resources: item.node.thumbnail_resources,
      };
    });
    localStorage.setItem('readableObj',JSON.stringify(readableObj))
    setSearchResults(readableObj);
  }

  function handlequerychange(e) {
    setQuery({ [e.target.name]: e.target.value })
  }

      const searchItems = SearchResults.map((item,index) => {
        return <SearchEl key={index} obj={item} />
    })

  return (
    <>
      <div className=" sticky top-0 bg-black rounded-xl flex items-center px-2 py-2">
        <button
          onClick={() => {
            showdata();
          }}
          className="w-14 transition-all ease-in-out duration-500 bg-slate-800 cursor-pointer aspect-square hover:rounded-l-[5em] hover:bg-slate-600"
        >
          <i className="fa-solid fa-magnifying-glass text-[1.2em"></i>
        </button>
        <input
          className="w-[100%] h-12 rounded-t-4 text-lg outline-none border-0 bg-slate-800 py-3 px-2"
          type="text"
          name="query"
          onChange={handlequerychange}
          placeholder="Search"
        />
      </div>
      <div className="z-[-1] grid grid-cols-3 grid-row-[auto] overflow-y-scroll hide-scrollbar">
        {searchItems}
      </div>
    </>
  );
}

export default memo(Search)