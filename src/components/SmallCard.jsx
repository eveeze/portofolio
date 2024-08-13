import Image from "next/image";

export default function SmallCard({
  imageUrl,
  title,
  width,
  height,
  className,
  imgclassName,
}) {
  return (
    <div
      className={`text-[#888888] rounded-full flex items-center pr-2 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:font-bold hover:text-[#aaaaaa] ${className} bg-[#1C1E22] shadow-neumorphism px-2 py-1`}
    >
      <div className="flex-shrink-0">
        <Image
          src={imageUrl}
          alt={title}
          width={width / 1.5} // Smaller image size
          height={height / 1.5} // Smaller image size
          className={`rounded-full ${imgclassName}`}
        />
      </div>
      <div className="ml-2">
        <h4 className="text-xs font-semibold">{title}</h4>
      </div>
    </div>
  );
}
