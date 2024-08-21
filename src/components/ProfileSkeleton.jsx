// components/ProfileSkeleton.jsx

export default function ProfileSkeleton() {
  return (
    <div className="bg-darkBackground text-gray-200 min-h-screen p-8 mt-32 max-w-screen-md mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bento-item bg-darkBackground p-6 rounded-3xl shadow-cardNeumorphism md:col-span-2 row-span-2 text-center">
          <div className="neumorphism-img">
            <div className="w-24 h-24 bg-[#2A2C30] rounded-full animate-pulse mx-auto"></div>
          </div>
          <div className="mt-4 w-3/4 h-6 bg-[#2A2C30] animate-pulse mx-auto"></div>
          <div className="mt-2 w-1/2 h-4 bg-[#2A2C30] animate-pulse mx-auto"></div>
        </div>

        <div className="bento-item bg-darkBackground p-6 rounded-3xl shadow-cardNeumorphism text-center">
          <div className="mt-5 w-1/2 h-6 bg-[#2A2C30] animate-pulse mx-auto"></div>
          <div className="mt-2 w-1/4 h-8 bg-[#2A2C30] animate-pulse mx-auto"></div>
        </div>

        <div className="bento-item bg-darkBackground p-6 rounded-3xl shadow-cardNeumorphism text-center">
          <div className="mt-5 w-1/2 h-6 bg-[#2A2C30] animate-pulse mx-auto"></div>
          <div className="mt-2 w-1/4 h-8 bg-[#2A2C30] animate-pulse mx-auto"></div>
        </div>

        <div className="bento-item bg-darkBackground p-6 rounded-3xl shadow-cardNeumorphism md:col-span-3 text-center">
          <div className="mt-4 w-full h-24 bg-[#2A2C30] animate-pulse mx-auto"></div>
        </div>
      </div>
    </div>
  );
}
