import Image from "next/image";
import LogoIcon from "@/public/logo/logo.svg";

const Logo = () => {
  return <Image src={LogoIcon} width={164} height={49} alt="Logo" className="p-3 ml-4 mb-8"/>;
};

export default Logo;