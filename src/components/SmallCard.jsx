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
    <div className="bg-[#161616]   hover:bg-[#1f1f1f] hover:font-bold hover:text-[#aaaaaa] text-[#888888] rounded-lg shadow-lg flex items-center pr-4  ml-4">
      <div className="flex-shrink-0">
        <Image
          src={imageUrl}
          alt={title}
          width={width}
          height={height}
          className={`rounded-md ${imgclassName}`}
        />
      </div>
      <div>
        <h4 className={`text-[12px] md:text-sm font-semibold  ${className}`}>
          {title}
        </h4>
      </div>
    </div>
  );
}
