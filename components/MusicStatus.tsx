import Image from "next/image";
import heartBorder from "@/public/icons/hearBordert.svg";
import MusicContorlsButton from "./buttons/musicControls";
import ShuffleIcon from "@/public/icons/shuffle.svg";
import backWard from "@/public/icons/back.svg";
import PlayBtn from "@/public/icons/play.svg";
import ForwardBtn from "@/public/icons/forward.svg";
import ReapeatIcon from "@/public/icons/repeat.svg";
import SoundIcon from "@/public/icons/sound.svg";
import ListIcon from "@/public/icons/list-arrow-down.svg";

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
    <div className="flex flex-row gap-3 items-center">
      <Image src={heartBorder} width={60} height={60} alt="icon" />
      <div className="flex flex-col ">
        <p className="text-white text-[15px] font-norma">Hold On</p>
        <p className="opacity-60 text-white text-xs font-normal">idl</p>
      </div>
      <Image src={heartBorder} width={24} height={25} alt="icon" />
    </div>
  );
};

const ControlsMusic = () => {
  return (
    <div className="flex flex-col gap-5 items-center p-2">
      <div className="flex flex-row gap-5">
        <MusicContorlsButton iconSrc={ShuffleIcon} classCode="" />
        <MusicContorlsButton iconSrc={backWard} classCode="" />
        <MusicContorlsButton iconSrc={PlayBtn} classCode="" />
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
