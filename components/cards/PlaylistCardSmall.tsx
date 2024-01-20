import React from "react";
import Image from "next/image";
import Heart from "@/public/icons/heart.svg";

interface PlaylistCardSmallProps {
  data: {
    title?: string;
    imageUrl?: string;
  };
}

const PlaylistCardSmall: React.FC<PlaylistCardSmallProps> = ({ data }) => {
  const { title, imageUrl } = data;

  return (
    <div className="w-[21.625rem] h-[6.25rem] bg-zinc-800 rounded flex items-center hover:bg-stone-600 transition-color duration-400 ease-out">
      {imageUrl ? (
        <div className="w-[6.25rem] h-[6.25rem] flex items-center justify-center">
          <Image src={imageUrl} width={100} height={100} alt="image" />
        </div>
      ) : (
        <div className="w-[6.25rem] h-[6.25rem] flex items-center justify-center bg-gradient-to-br from-violet-700 via-indigo-600 to-green-200">
          <Image src={Heart} width={29} height={29} alt="heart" />
        </div>
      )}
      <p className="text-white text-xl font-bold ml-5">
        {title ? title : "Liked Songs"}
      </p>
    </div>
  );
};

export default PlaylistCardSmall;
