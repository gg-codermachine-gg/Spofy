import React from "react";
import SideBar from "@/components/SideBar";
import MusicPlayerStatus from "@/components/MusicStatus";

export default function Page() {
  return (
    <div className="flex">
      <SideBar/>
      <MainBody />
      <MusicPlayerStatus/>
    </div>
  );
}
const MainBody: React.FC = () => {
  return <div className="w-[90%] h-[100vh] bg-gradient-to-b from-neutral-800 via-stone-900 to-neutral-900"> 
  <div>23</div>
  </div>;
}; 


