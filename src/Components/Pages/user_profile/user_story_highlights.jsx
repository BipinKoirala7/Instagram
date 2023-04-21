import React,{useEffect,useState} from "react";

export default function UserStroyHighlights (){
    const[StoryShow, setStoryShow] = useState(true)
    return (
        <div className="user-story-highlight">
            <div className="story-optns">
                <div className="stroy-descrpt">
                    <p style={{fontWeight:'bold'}}>Story Highlights</p>
                    <p>Keep your favourite stories on your Profile</p>
                </div>
                <button onClick={()=>setStoryShow(prev=>!prev)} style={{color:'white'}} className="alter-story-state">Show/Hide</button>
            </div>
                {StoryShow && <div className="fav-stories-highlights">
                    <button className="add-stroy-highlight">
                        <svg strokeWidth={0} className="svg svg-story-add" viewBox="0 0 24 24"xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13 9C13 8.44772 12.5523 8 12 8C11.4477 8 11 8.44772 11 9V11H9C8.44772 11 8 11.4477 8 12C8 12.5523 8.44772 13 9 13H11V15C11 15.5523 11.4477 16 12 16C12.5523 16 13 15.5523 13 15V13H15C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11H13V9ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z"/>
                        </svg>
                    </button>
                </div>}
        </div>
    )
}