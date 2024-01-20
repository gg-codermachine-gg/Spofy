import React, { useState } from "react";
import Image from "next/image";

interface ButtonTypes {
  iconSrc: { src: string; width: number; height: number };
  pressedIconSrc?: { src: string; width: number; height: number };
  classCode: string;
  onClickFunction?: () => void;
}

const MusicContorlsButton: React.FC<ButtonTypes> = ({
  iconSrc,
  pressedIconSrc,
  onClickFunction,
  classCode,
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const combinedClasses = ` ${classCode}`;

  const handleClick = () => {
    setIsPressed(!isPressed);
    if (onClickFunction) {
      onClickFunction();
    }
  };

  return (
    <button className={combinedClasses} onClick={handleClick}>
      <Image src={isPressed && pressedIconSrc ? pressedIconSrc.src : iconSrc.src} width={34} height={34} alt="icon" className="" />
    </button>
  );
};

export default MusicContorlsButton;
