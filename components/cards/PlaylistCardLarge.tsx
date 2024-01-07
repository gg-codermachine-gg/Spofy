import React from "react";

interface CardType {
  title?: string; 
  imageUrl?: string;
  author?: string;
}

const PlaylistCardLarge : React.FC<CardType> = ({author, title, imageUrl}) => {
  return (
    <div className="w-[231px] h-[281px] bg-neutral-900 flex flex-col justify-center items-center">
      <div className="w-[191px] h-[191px]  bg-gradient-to-br from-violet-700 via-indigo-600 to-green-200 rounded-[14px]"></div>
      <div className="p-2 w-[90%] " >
        <p className="text-white text-[21px] font-medium">
         {title? title : "Playlist"}
        </p>
        <p className="text-zinc-400 text-[15px] font-medium tracking-tight">
          {author ? author : "Metro Booming"}
        </p>
      </div>
    </div>
  );
}

export default PlaylistCardLarge;
