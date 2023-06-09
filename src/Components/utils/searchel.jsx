import React, { memo,useState } from "react";
import { NavLink } from "react-router-dom";

function element(props) {
    const[hovered,setHovered] = useState(false)
    return (
      <NavLink to={`/search/${props.obj.post_shortcode}`} state={props}>
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={` flex  ${props.obj.is_video ? "aspect-square" : "aspect-square"} min-h-${
            props.obj.is_video ? "[13em]" : "[6.5em]"
          } bg-cover relative items-end px-2 `}
        >
          <img
            src={`../Icons/${props.obj.is_video ? "video" : "clone"}.png`}
            alt=""
            className="w-[1em] absolute right-2 top-2"
          />
          {hovered && (
            <div className="flex items-center justify-evenly gap-1 text-sm">
              <img src="../Icons/heart.png" alt="" className="w-[0.9em]" />
              <p>
                {props.obj.like_count.count ? props.obj.like_count.count : 0}
              </p>
            </div>
          )}
          {hovered && (
            <div className="flex items-center justify-evenly gap-1 text-sm">
              <img src="../Icons/chat.png" alt="" />
              <p>
                {props.obj.comment_count.count
                  ? props.obj.comment_count.count
                  : 0}
              </p>
            </div>
          )}
        </div>
      </NavLink>
    );
}

export default memo(element)