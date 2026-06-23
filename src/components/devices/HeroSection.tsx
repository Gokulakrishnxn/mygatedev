import Image from "next/image";
import { IconShareArrow } from "../Icons";

export default function HeroSection() {
  return (
    <div className="relative w-full h-[60vh] bg-gradient-to-br from-[#F5F2EE] to-[#EBE2D9]">
      {/* Share Button */}
      <button className="absolute top-4 right-4 z-20 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
        <IconShareArrow className="w-5 h-5 text-slate-800" />
      </button>

      {/* Hero Image */}
      <Image 
        src="/devices_hero_bg.png" 
        alt="Smart Home Locks" 
        fill 
        sizes="(max-width: 768px) 100vw, 448px"
        className="object-cover"
        priority
      />

      {/* Gradient overlay for text */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#EAE2D9] via-transparent to-transparent opacity-80" />

      {/* Hero Text & Button */}
      <div className="absolute bottom-6 left-0 right-0 px-6 z-10 flex flex-col items-center">
        <h2 className="text-[28px] font-bold text-[#173F45] text-center leading-tight mb-4 tracking-tight">
          mygate locks for<br />every door!
        </h2>
        <div className="flex gap-4">
          <button className="bg-white border border-gray-300 text-slate-800 font-medium px-6 py-2.5 rounded-full shadow-sm text-[15px]">
            Book demo
          </button>
          <button className="bg-[#137333] text-white font-medium px-6 py-2.5 rounded-full shadow-sm text-[15px]">
            Join live demo
          </button>
        </div>
      </div>
    </div>
  );
}
