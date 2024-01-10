import Image from "next/image";
import LogoIcon from "@/public/logo/logo.svg";

const Logo = () => {
  return <Image src={LogoIcon} width={164} height={49} alt="Logo" priority className="p-3 mb-8"/>;
};

export default Logo;