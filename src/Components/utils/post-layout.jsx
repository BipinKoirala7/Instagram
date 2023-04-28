import React from "react";

export default function post(props) {
  return (
    <div className="flex flex-col h-fit">
        <div className="px-4 flex py-2 items-center gap-2">
          <img
            className="w-8 aspect-square rounded-[50%]"
            src={props.obj.obj.thumbnail_resources[2].src}
            alt=""
          />
          <p>indian.tweets</p>
          <i className="flex justify-center items-center fa-solid fa-ellipsis-vertical ml-auto h-8 w-8 hover:rounded-[50%] hover:bg-slate-700"></i>
        </div>
        <img className="w-[100%] h-fit" src="../cristiano-ronaldo.jpg" alt="" />
        <div className="px-4 py-2 flex gap-3">
          <svg
            className="w-10 h-7 stroke-white stroke-2 cursor-pointer hover:fill-red-500 hover:stroke-0"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 56.69 56.69"
            enableBackground="new 0 0 56.69 56.69"
            xmlSpace="preserve"
          >
            <path
              d="M49.562,28.662L28.408,49.816c-0.016,0.014-0.031,0.029-0.047,0.043l-0.016,0.018c0-0.002-0.017-0.018-0.017-0.018
                        c-0.017-0.014-0.031-0.029-0.047-0.043L7.129,28.662c-4.998-4.998-4.998-13.102,0-18.1s13.103-4.998,18.102,0l3.115,3.115
                        l3.114-3.115c4.999-4.998,13.104-4.998,18.102,0S54.56,23.664,49.562,28.662z"
            />
          </svg>
          <svg
            fill="#000000"
            className="w-8 h-7 stroke-white stroke-1 cursor-pointer hover:fill-white hover:stroke-0"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 24 24"
            transform="rotate(0)matrix(-1, 0, 0, 1, 0, 0)"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              <path d="M12,2C6.5,2,2,6.5,2,12c0,2.3,0.8,4.5,2.3,6.3l-2,2c-0.4,0.4-0.4,1,0,1.4C2.5,21.9,2.7,22,3,22h9c5.5,0,10-4.5,10-10S17.5,2,12,2z M8,13c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S8.6,13,8,13z M12,13c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S12.6,13,12,13z M16,13c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S16.6,13,16,13z" />
            </g>
          </svg>
          <svg
            className="w-8 h-7 stroke-white stroke-1 cursor-pointer hover:fill-white hover:stroke-0"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path d="M20.3359 3.22136L3.87333 8.70889C3.56801 8.81066 3.55033 9.23586 3.84614 9.36263L9.89655 11.9557C9.96078 11.9832 10.0347 11.9752 10.0916 11.9346L16.0235 7.69749C16.2073 7.56618 16.4338 7.79266 16.3025 7.97648L12.0654 13.9084C12.0248 13.9653 12.0168 14.0392 12.0443 14.1034L14.6374 20.1539C14.7641 20.4497 15.1893 20.432 15.2911 20.1267L20.7786 3.66408C20.8698 3.39046 20.6095 3.13015 20.3359 3.22136Z" />{" "}
            </g>
          </svg>
          <svg
            className="w-8 h-7 stroke-white stroke-1 cursor-pointer hover:fill-white hover:stroke-0 ml-auto"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path d="M12.89 5.87891H5.11C3.4 5.87891 2 7.27891 2 8.98891V20.3489C2 21.7989 3.04 22.4189 4.31 21.7089L8.24 19.5189C8.66 19.2889 9.34 19.2889 9.75 19.5189L13.68 21.7089C14.96 22.4089 16 21.7989 16 20.3489V8.98891C16 7.27891 14.6 5.87891 12.89 5.87891Z" />{" "}
              <path d="M21.9998 5.11V16.47C21.9998 17.92 20.9598 18.53 19.6898 17.83L17.7598 16.75C17.5998 16.66 17.4998 16.49 17.4998 16.31V8.99C17.4998 6.45 15.4298 4.38 12.8898 4.38H8.81984C8.44984 4.38 8.18984 3.99 8.35984 3.67C8.87984 2.68 9.91984 2 11.1098 2H18.8898C20.5998 2 21.9998 3.4 21.9998 5.11Z" />{" "}
            </g>
          </svg>
        </div>
          <div className="font-light text-sm flex flex-col px-4 ">
          <p>Liked by <span className="font-bold">kalyug.memes</span>  and {props.obj.obj.like_count.count} others</p>
          <div>
              <p>
                <span className="font-bold">indian.tweets</span>  {props.obj.obj.caption.edges[0].node.text}
          </p>
            <button className="text-slate-300">View all comments</button>
          </div>
        </div>
      </div>
  );
}
