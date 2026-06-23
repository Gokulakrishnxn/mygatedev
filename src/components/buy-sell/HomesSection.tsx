import { Home, ChevronRight, Search } from "lucide-react";
import Image from "next/image";

export default function HomesSection() {
  return (
    <section className="bg-white rounded-[24px] p-4 shadow-sm mx-4 mb-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <Home className="w-6 h-6 text-slate-800" />
            <Search className="w-3 h-3 absolute bottom-2 right-1 text-slate-800 stroke-[3]" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900 leading-tight">Homes</h2>
            <p className="text-xs text-slate-500">List &bull; Buy &bull; Rent</p>
          </div>
        </div>
        
        <button className="flex items-center gap-1 text-[#0070BA] font-bold text-sm border border-[#0070BA] rounded-full px-4 py-1.5 hover:bg-[#0070BA]/5 transition-colors">
          Explore <ChevronRight className="w-4 h-4 stroke-[3]" />
        </button>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-4 gap-2">
        {/* Card 1: 500+ New Listings */}
        <div className="aspect-square rounded-2xl bg-gradient-to-bl from-gray-500 to-gray-700 p-2 flex flex-col justify-center items-center text-center shadow-inner">
          <span className="text-white font-bold text-base sm:text-lg leading-tight">500+</span>
          <span className="text-white/90 text-[9px] sm:text-[10px] font-medium leading-tight mt-0.5">New Listings<br/>This Week</span>
        </div>

        {/* Card 2: Living Room Image */}
        <div className="aspect-square rounded-2xl overflow-hidden relative">
          <Image 
            src="/home_living_room.png" 
            alt="Living Room" 
            fill 
            sizes="(max-width: 768px) 50vw, 224px"
            className="object-cover"
          />
        </div>

        {/* Card 3: Bedroom Image */}
        <div className="aspect-square rounded-2xl overflow-hidden relative">
          <Image 
            src="/home_bedroom.png" 
            alt="Bedroom" 
            fill 
            sizes="(max-width: 768px) 50vw, 224px"
            className="object-cover"
          />
        </div>

        {/* Card 4: 300K+ Active Seekers */}
        <div className="aspect-square rounded-2xl bg-gradient-to-bl from-gray-500 to-gray-700 p-2 flex flex-col justify-center items-center text-center shadow-inner">
          <span className="text-white font-bold text-base sm:text-lg leading-tight">300K+</span>
          <span className="text-white/90 text-[9px] sm:text-[10px] font-medium leading-tight mt-0.5">Active Home<br/>Seekers</span>
        </div>
      </div>
    </section>
  );
}
