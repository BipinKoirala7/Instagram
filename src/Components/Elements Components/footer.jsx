import React, { memo } from "react";
import { Link, NavLink } from "react-router-dom";

export default memo(function Footer() {
  return (
    <div className="row-span-4 col-start-1 col-end-4 flex items-center justify-evenly border-t-1 border-gray-700">
      <NavLink
        style={(isActive) => {
          return isActive.isActive
            ? { fill: "white" }
            : {fill :'transparent'};
        }}
        to="/"
      >
        <button className="w-12 aspect-square flex items-center justify-center hover:bg-[rgb(43,41,41)] hover:rounded-[50%]">
          <svg
            className="w-7 h-7  stroke-white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              {" "}
              <rect />{" "}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.9931 3.43368C12.8564 2.42331 11.1436 2.42331 10.0069 3.43368L2.33565 10.2526C1.92286 10.6195 1.88568 11.2516 2.2526 11.6644C2.61952 12.0771 3.25159 12.1143 3.66437 11.7474L4.00001 11.4491L4.00001 17.0658C3.99996 17.9523 3.99992 18.7161 4.08215 19.3278C4.17028 19.9833 4.36903 20.6117 4.87869 21.1213C5.38835 21.631 6.0167 21.8297 6.67222 21.9179C7.28388 22.0001 8.04769 22 8.93418 22H15.0658C15.9523 22 16.7161 22.0001 17.3278 21.9179C17.9833 21.8297 18.6117 21.631 19.1213 21.1213C19.631 20.6117 19.8297 19.9833 19.9179 19.3278C20.0001 18.7161 20.0001 17.9523 20 17.0659L20 11.4491L20.3356 11.7474C20.7484 12.1143 21.3805 12.0771 21.7474 11.6644C22.1143 11.2516 22.0772 10.6195 21.6644 10.2526L13.9931 3.43368ZM12 16C11.4477 16 11 16.4477 11 17V19C11 19.5523 10.5523 20 10 20C9.44772 20 9 19.5523 9 19V17C9 15.3431 10.3431 14 12 14C13.6569 14 15 15.3431 15 17V19C15 19.5523 14.5523 20 14 20C13.4477 20 13 19.5523 13 19V17C13 16.4477 12.5523 16 12 16Z"
              />{" "}
            </g>
          </svg>
        </button>
      </NavLink>

      <NavLink
        style={(isActive) => {
          return isActive.isActive
            ? { fill: "white" }
            : { fill: "transparent" };
        }}
        to="/search"
      >
        <button className="w-12 aspect-square flex items-center justify-center hover:bg-[rgb(43,41,41)] hover:rounded-[50%]">
          <svg
            className="w-7 h-7   stroke-white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C13.125 20 15.078 19.2635 16.6177 18.0319L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L18.0319 16.6177C19.2635 15.078 20 13.125 20 11C20 6.02944 15.9706 2 11 2Z"
              />{" "}
            </g>
          </svg>
        </button>
      </NavLink>

      <NavLink
        style={(isActive) => {
          return isActive.isActive
            ? { fill: "white" }
            : { fill: "transparent" };
        }}
        to="/create"
      >
        <button className="w-12 aspect-square flex items-center justify-center hover:bg-[rgb(43,41,41)] hover:rounded-[50%]">
          <svg
            className="w-7 h-7  stroke-white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z" />{" "}
            </g>
          </svg>
        </button>
      </NavLink>

      <NavLink
        style={(isActive) => {
          return isActive.isActive
            ? { fill: "white" }
            : { fill: "transparent" };
        }}
        to="/video"
      >
        <button className="w-12 aspect-square flex items-center justify-center hover:bg-[rgb(43,41,41)] hover:rounded-[50%]">
          <svg
            className="w-7 h-7  stroke-white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              <path d="M14.7295 2H9.26953V6.36H14.7295V2Z" />{" "}
              <path d="M16.2305 2V6.36H21.8705C21.3605 3.61 19.3305 2.01 16.2305 2Z" />{" "}
              <path d="M2 7.85938V16.1894C2 19.8294 4.17 21.9994 7.81 21.9994H16.19C19.83 21.9994 22 19.8294 22 16.1894V7.85938H2ZM14.44 16.1794L12.36 17.3794C11.92 17.6294 11.49 17.7594 11.09 17.7594C10.79 17.7594 10.52 17.6894 10.27 17.5494C9.69 17.2194 9.37 16.5394 9.37 15.6594V13.2594C9.37 12.3794 9.69 11.6994 10.27 11.3694C10.85 11.0294 11.59 11.0894 12.36 11.5394L14.44 12.7394C15.21 13.1794 15.63 13.7994 15.63 14.4694C15.63 15.1394 15.2 15.7294 14.44 16.1794Z" />{" "}
              <path d="M7.76891 2C4.66891 2.01 2.63891 3.61 2.12891 6.36H7.76891V2Z" />{" "}
            </g>
          </svg>
        </button>
      </NavLink>

      <NavLink
        style={(isActive) => {
          return isActive.isActive
            ? { fill: "white" }
            : { fill: "transparent" };
        }}
        to="/user_profile"
      >
        <button className="w-12 aspect-square flex items-center justify-center hover:bg-[rgb(43,41,41)] hover:rounded-[50%]">
          <svg
            className="w-7 h-7   stroke-white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.25007 2.38782C8.54878 2.0992 10.1243 2 12 2C13.8757 2 15.4512 2.0992 16.7499 2.38782C18.06 2.67897 19.1488 3.176 19.9864 4.01358C20.824 4.85116 21.321 5.94002 21.6122 7.25007C21.9008 8.54878 22 10.1243 22 12C22 13.8757 21.9008 15.4512 21.6122 16.7499C21.321 18.06 20.824 19.1488 19.9864 19.9864C19.1488 20.824 18.06 21.321 16.7499 21.6122C15.4512 21.9008 13.8757 22 12 22C10.1243 22 8.54878 21.9008 7.25007 21.6122C5.94002 21.321 4.85116 20.824 4.01358 19.9864C3.176 19.1488 2.67897 18.06 2.38782 16.7499C2.0992 15.4512 2 13.8757 2 12C2 10.1243 2.0992 8.54878 2.38782 7.25007C2.67897 5.94002 3.176 4.85116 4.01358 4.01358C4.85116 3.176 5.94002 2.67897 7.25007 2.38782ZM12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6ZM18.3775 17.2942C18.7303 17.8695 18.6055 18.63 18.0369 18.9935C17.5199 19.3241 16.9158 19.5265 16.3159 19.6598C15.2322 19.9006 13.8299 20 11.9998 20C10.1698 20 8.76744 19.9006 7.68381 19.6598C7.09516 19.529 6.50205 19.3319 5.99131 19.012C5.41247 18.6495 5.28523 17.8786 5.64674 17.2991C6.06303 16.6318 6.63676 16.1075 7.40882 15.7344C8.58022 15.1684 10.1157 15 11.9996 15C13.8771 15 15.4109 15.1548 16.5807 15.7047C17.3727 16.077 17.9572 16.6089 18.3775 17.2942Z"
              />{" "}
            </g>
          </svg>
        </button>
      </NavLink>
    </div>
  );
});
