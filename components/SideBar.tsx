import Image from "next/image";
import HomeIcon from "@/public/icons/fi-ss-home.svg";
import SearchIcon from "@/public/icons/searchIcon.svg";
import Library from "@/public/icons/library.svg";
import Logo from "./Logo";
import ButtonWrapper from "@/components/ButtonWrapper";
import heart from "@/public/icons/heart.svg";
import Plus from "@/public/icons/plus.svg";
import GroupIcon from "@/public/icons/Group.svg";

const SideBar: React.FC = () => {
  return (
    <div className="w-[20rem] bg-stone-950 flex flex-col gap-3 min-h-screen">
      <Logo />
      <MainButtons />
      <PlaylistsInteraction />
    </div>
  );
};

function MainButtons() {
  return (
    <div className="flex flex-col float-left  w-full h-[145px] items-center mt-3 gap-2 text-white text-[19px] font-bold">
      <ButtonWrapper label="Home" icon={HomeIcon} styleCode="" size={29} />
      <ButtonWrapper label="Search" icon={SearchIcon} styleCode="" size={29} />
      <ButtonWrapper
        label="Your Library"
        icon={Library}
        styleCode=""
        size={29}
      />
    </div>
  );
}

function PlaylistsInteraction({}) {
  return (
    <div className="flex w-full items-center flex-col mt-9 text-white text-[19px] font-medium">
      <ButtonWrapper
        label="Create Playlist"
        icon={Plus}
        styleCode="bg-white pl-0 w-[30px] h-[30px] flex items-center justify-center rounded-[1px] mr-4 pr-0 "
        size={29}
      />
      <ButtonWrapper
        label="Liked Songs"
        icon={heart}
        styleCode="bg-gradient-to-br from-violet-700 via-indigo-600 to-green-200 pl-0 w-[30px] h-[30px] flex items-center justify-center rounded-[1px] mr-4 pr-0 "
        size={15}
      />
      <ButtonWrapper
        label="Your Episodes"
        icon={GroupIcon}
        styleCode="bg-emerald-900 pl-0 w-[30px] h-[30px] flex items-center justify-center rounded-[1px] mr-4 pr-0 "
        size={17}
      />
      <div className="w-full">
        <PlaylistText />
      </div>
    </div>
  );
}

const PlaylistText = () => {
  let names: Array<string> = [
    "FAV",
    "Daily Mix 1",
    "Discover Weekly",
    "Dance / Electronix Mix",
    "EDM / Popular",
    "Malayalam",
  ];
  const limitedNames = names.slice(0, 7); // Take at most the first 4 elements

  return (
    <ul className="text-white text-[19px] font-bold w-full flex p-3 flex-col gap-3 ml-2">
      {limitedNames.map((name, index) => (
        <li key={index}>
          <button>{name}</button>
        </li>
      ))}
    </ul>
  );
};

export default SideBar;
