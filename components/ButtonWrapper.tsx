import Image from "next/image";

interface Types {
  label: string;
  icon: { src: string; width: number; height: number };
  styleCode: string;
  size: number;
}

export default function ButtonWrapper({
  label,
  icon,
  styleCode,
  size
}: Types): JSX.Element {
  const combinedClasses = `mr-5  ${styleCode}`;
  return (
    <button className="MainButtonSIdeBar ">
      <span className={combinedClasses}>
        {/* Use icon.src to get the image source */}
        <Image src={icon.src} width={size} height={size} alt={label} />
      </span>
      {label}
    </button>
  );
}
