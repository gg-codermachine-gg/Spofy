import Image from "next/image";
import { Toolbar } from "@/components/navs/toolbar";
import WorkSpace from '@/components/ui/workSpace'
export default function Home() {
 
  return (
    <main className="dotted-grid ">
      <Toolbar />
      <WorkSpace/>
    </main>
  );
}
