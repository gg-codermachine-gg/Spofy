import React from "react";
import Image from "next/image";

interface ButtonTypes {
  iconSrc: { src: string; width: number; height: number };
  classCode: string;
  onClickFunction?: () => void;
}

const MusicContorlsButton: React.FC<ButtonTypes> = ({
  iconSrc,
  onClickFunction,
  classCode,
}) => {
  const combinedClasses = ` ${classCode}`;
  return (
    <button className={combinedClasses} onClick={onClickFunction}>
      <Image src={iconSrc.src} width={34} height={34} alt="icon" className=""/>
    </button>
  );
};

export default MusicContorlsButton;
