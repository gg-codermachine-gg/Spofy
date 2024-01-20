// import React from "react";
// import SideBar from "@/components/SideBar";
// import MusicPlayerStatus from "@/components/MusicStatus";
// import PlaylistCardSmall from "@/components/cards/PlaylistCardSmall";
// import PlaylistCardLarge from "@/components/cards/PlaylistCardLarge";

// interface CardData {
//   title?: string;
//   imageUrl?: string;
//   author?: string;
// }

// interface PageProps {
//   smallPlaylistCardsData: CardData[];
//   largePlaylistCardsData: CardData[];
// }

// const Page: React.FC<PageProps> = ({ smallPlaylistCardsData, largePlaylistCardsData }) => {
//   return (
//     <div className="flex overflow-auto">
//       <SideBar />
//       <MainBody
//         smallPlaylistCardsData={smallPlaylistCardsData}
//         largePlaylistCardsData={largePlaylistCardsData}
//       />
//       <MusicPlayerStatus />
//     </div>
//   );
// };

// const MainBody: React.FC<PageProps> = ({ smallPlaylistCardsData, largePlaylistCardsData }) => {
//   const smallPlaylistCards = smallPlaylistCardsData.map((data, index) => (
//     <PlaylistCardSmall key={index} data={data} />
//   ));

//   const largePlaylistCards = largePlaylistCardsData.map((data, index) => (
//     <PlaylistCardLarge key={index} data={data} />
//   ));

//   let test = true;

//   return (
//     <div className="w-[90%] h-auto bg-gradient-to-b from-neutral-800 via-stone-900 to-neutral-900 p-11 overflow-hidden">
//       <PlaylistExplorer title="Good Morning" cards={smallPlaylistCards} grid />
//       <PlaylistExplorer title="Past Things" cards={largePlaylistCards} />
//       <PlaylistExplorer title="More Playlists" cards={largePlaylistCards} />
//     </div>
//   );
// };

// interface PlaylistExplorerProps {
//   title: string;
//   cards: React.ReactNode[];
//   grid?: boolean;
// }

// const PlaylistExplorer: React.FC<PlaylistExplorerProps> = ({ title, cards, grid }) => {
//   const containerClassName = `text-white font-bold p-6 ${grid ? "grid grid-cols-4 gap-4 gap-x-16" : "flex flex-row gap-3 text-2xl "}`;

//   return (
//     <div>
//       <p className="text-2xl font-bold">{title}</p>
//       <div className={containerClassName}>{cards}</div>
//     </div>
//   );
// };

// export default Page;
