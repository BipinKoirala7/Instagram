import React, { useState } from "react";
import fetchAPI from "../../utils/fectch-api";
import SearchEl from "../../utils/searchel"

function Search() {
    const [SearchResults, setSearchResults] = useState([])
    const[searchelements, setSearchElements] = useState([])
    const [query, setQuery] = useState({ query: '' })
    // useEffect(() => {
    //   async function fetchuserfeed() {
    //     const res = await fetch(
    //       "https://instagram47.p.rapidapi.com/hashtag_post?hashtag=love",
    //       {
    //         method: "GET",
    //         headers: {
    //           "X-RapidAPI-Key":
    //             "1e70e5d09amshdf1eb4eedbc71acp1cebf7jsn509094adad41",
    //           "X-RapidAPI-Host": "instagram47.p.rapidapi.com",
    //         },
    //       }
    //     );
    //     const data = await res.json();
    //     const dataObj = data.body.edge_hastag_to_top_posts.edges.concat(
    //       data.body.edge_to_media.edges
    //     );
    //     const readableObj = dataObj.map((item) => {
    //       return {
    //         comments_disabled: item.comments_disabled,
    //         Pic_dimensions: item.dimensions,
    //         photo_url: item.display_url,
    //         like_count: item.edge_liked_by.count,
    //         caption: item.edge_media_to_caption.edges[0].node.text,
    //         comment_count: item.edge_media_to_comment.count,
    //         user_id: item.id,
    //         is_video: item.is_video,
    //         posts_owner: item.owner,
    //         thumbnail_resources: item.thumbnail_resources,
    //       };
    //     });
    //     setSearchResults(readableObj);
    //   }
    //   fetchuserfeed();
    // }, []);

    function handleclick(e) {
        query.query ? setSearchResults(fetchAPI('hastag_search', 'hastag', query.query)) : ''
        const searchItems = SearchResults.map(item => {
            return <SearchEl obj={item} />
        }
        )
        setSearchElements(searchItems)
    }

    function handlequerychange(e) {
        setQuery({ [e.target.name]: e.target.value })
    }

    return (
      <div className="">
        <div className="bg-slate-800 rounded-xl flex items-center justify-between gap-2 px-4 mt-2 mx-2">
          <button
            onClick={handleclick}
            className="w-12 cursor-pointer aspect-square hover:rounded-[100%] hover:bg-slate-600"
          >
            <i className="fa-solid fa-magnifying-glass text-[1.2em"></i>
          </button>
          <input
            className="w-[100%]  text-lg outline-none border-0 bg-slate-800 py-2"
            type="text"
            name="query"
            onChange={handlequerychange}
          />
        </div>
        <div className="grid grid-cols-3">
            {searchelements}
        </div>
      </div>
    );
}

export default Search