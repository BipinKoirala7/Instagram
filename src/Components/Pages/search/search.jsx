import React, { useState,useEffect } from "react";
import fetchAPI from "../../utils/fectch-api";
import SearchEl from "../../utils/searchel"

function Search() {
    const [SearchResults, setSearchResults] = useState([])
    const[searchelements, setSearchElements] = useState([])
    const [query, setQuery] = useState({ query: '' })

  async function handleclick(e) {
    let data
    query.query ? data = await fetchAPI('hastag_post', 'hastag', query.query) : data=''
    console.log(data)
    const dataObj = data.body.edge_hashtag_to_top_posts.edges.concat(
      data.body.edge_hashtag_to_media.edges);
    console.log(dataObj)
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
        post_shortcode:item.node.shortcode,
        thumbnail_resources: item.node.thumbnail_resources,
      };
    });
    setSearchResults(readableObj)
    console.log(SearchResults)
    const searchItems = SearchResults.map(item => {
        return <SearchEl obj={item} />
    }
    )
    console.log(searchItems)
    setSearchElements(searchItems)
  }

  function handlequerychange(e) {
      setQuery({ [e.target.name]: e.target.value })
  }

  return (
          <>
            <div className="sticky top-0 bg-slate-800 rounded-xl flex items-center justify-between gap-2 px-1 mx-4 my-2">
              <button
                onClick={handleclick}
                className="w-12 cursor-pointer aspect-square hover:rounded-[100%] hover:bg-slate-600"
              >
                <i className="fa-solid fa-magnifying-glass text-[1.2em"></i>
              </button>
              <input
                className="w-[100%]  text-lg outline-none border-0 bg-slate-800 py-1"
                type="text"
                name="query"
                onChange={handlequerychange}
                placeholder="Search"
              />
            </div>
            <div className="grid grid-cols-3 grid-row-[auto] overflow-y-scroll hide-scrollbar">
              {searchelements}
            </div>
          </>
  );
}

export default Search