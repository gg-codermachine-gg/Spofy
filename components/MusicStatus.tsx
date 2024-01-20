"use client"

import Image from "next/image";
import HeartBorder from "@/public/icons/heart";
import MusicContorlsButton from "./buttons/musicControls";
import ShuffleIcon from "@/public/icons/shuffle.svg";
import backWard from "@/public/icons/back.svg";
import PlayBtn from "@/public/icons/play.svg";
import ForwardBtn from "@/public/icons/forward.svg";
import ReapeatIcon from "@/public/icons/repeat.svg";
import SoundIcon from "@/public/icons/sound.svg";
import ListIcon from "@/public/icons/list-arrow-down.svg";
import pauseIcon from "@/public/icons/stopTrack.svg"

const MusicPlayerStatus: React.FC = () => {
  return (
    <div className="fixed bottom-0 w-full h-[93px]  bg-neutral-950 flex justify-between">
      <LeftCorner />
      <ControlsMusic />
      <RightCorner />
    </div>
  );
};

const LeftCorner = () => {
  return (
    <div className="flex flex-row gap-3 items-center justify-center w-[14rem]">
      <HeartBorder width={60} height={30} alt="icon" className="" />
      <div className="flex flex-col  ">
        <p className="text-white text-[15px] font-norma hover:underline">
          Hold On
        </p>
        <p className="opacity-60 text-white text-xs font-normal hover:underline">
          idl
        </p>
      </div>
 
      <HeartBorder alt="icon" className="w-4 text-red-600" />
    </div>
  );
};

const ControlsMusic = () => {

  

  return (
    <div className="flex flex-col gap-5 items-center p-2">
      <div className="flex flex-row gap-5">
        <MusicContorlsButton iconSrc={ShuffleIcon} classCode="" />
        <MusicContorlsButton iconSrc={backWard} classCode="" />
        <MusicContorlsButton iconSrc={PlayBtn} pressedIconSrc={pauseIcon} classCode="" />
        <MusicContorlsButton iconSrc={ForwardBtn} classCode="" />
        <MusicContorlsButton iconSrc={ReapeatIcon} classCode="" />
      </div>
      <Bartime />
    </div>
  );
};

function Bartime({}) {
  return (
    <div className="flex flex-row items-center gap-3">
      <div className=" text-center text-zinc-400 text-xs font-normal f">
        0:00
      </div>
      <div className="w-[42rem] h-[4.55px] bg-zinc-400 rounded-sm"></div>
      <div className="text-center text-zinc-400 text-xs font-normal">2:50</div>
    </div>
  );
}

const RightCorner = () => {
  return (
    <div className="flex flex-row gap-5 p-2 ">
      <MusicContorlsButton iconSrc={ListIcon} classCode="" />
      <div className="flex flex-row items-center gap-3">
        <MusicContorlsButton iconSrc={SoundIcon} classCode="" />
        <div className="w-[130px] h-[5px] bg-zinc-400 rounded-md"></div>
      </div>
    </div>
  );
};
export default MusicPlayerStatus;
