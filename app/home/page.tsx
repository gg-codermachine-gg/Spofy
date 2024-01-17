import React from "react";
import SideBar from "@/components/SideBar";
import MusicPlayerStatus from "@/components/MusicStatus";
import PlaylistCardSmall from "@/components/cards/PlaylistCardSmall";
import PlaylistCardLarge from "@/components/cards/PlaylistCardLarge";

const Page: React.FC = () => {
  return (
    <div className="flex overflow-auto">
      <SideBar />
      <MainBody />
      <MusicPlayerStatus />
    </div>
  );
};

const MainBody: React.FC = () => {
  const smallPlaylistCards = Array.from({ length: 8 }, (_, index) => (
    <PlaylistCardSmall key={index} />
  ));

  const largePlaylistCards = Array.from({ length: 6 }, (_, index) => (
    <PlaylistCardLarge key={index} />
  ));

  return (
    <div className="w-[90%] h-auto bg-gradient-to-b from-neutral-800 via-stone-900 to-neutral-900 p-11 overflow-hidden">
      <PlaylistExplorer title="Good Morning" cards={smallPlaylistCards} grid />
      <PlaylistExplorer title="Past Things" cards={largePlaylistCards} />
      <PlaylistExplorer title="More Playlists" cards={largePlaylistCards} />
    </div>
  );
};

interface PlaylistExplorerProps {
  title: string;
  cards: React.ReactNode[];
  grid?: boolean;
}

const PlaylistExplorer: React.FC<PlaylistExplorerProps> = ({ title, cards, grid }) => {
  const containerClassName = `text-white font-bold p-6 ${grid ? "grid grid-cols-4 gap-4 gap-x-16" : "flex flex-row gap-3 text-2xl "}`;

  return (
    <div>
      <p className="text-2xl font-bold">{title}</p>
      <div className={containerClassName}>{cards}</div>
    </div>
  );
};

export default Page;
