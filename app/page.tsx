import Image from "next/image";
import { Buttons } from "@/components/buttons/button";
import PlaylistCardSmall from "@/components/cards/PlaylistCardSmall";
import PlaylistCardLarge from "@/components/cards/PlaylistCardLarge";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <PlaylistCardLarge />
    </main>
  );
}
