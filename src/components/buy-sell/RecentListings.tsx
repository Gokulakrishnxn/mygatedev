import { Plus } from "lucide-react";
import Image from "next/image";

export default function RecentListings() {
  return (
    <section className="px-4 pb-24 relative">
      <div className="flex items-baseline gap-2 mb-4">
        <h2 className="text-lg font-bold text-slate-900">Recent Listings</h2>
        <span className="text-[13px] font-medium text-slate-600">1.3K+ listings</span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {/* Placeholder cards for recent listings */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
          <div className="relative aspect-square bg-gray-200">
             <Image 
                src="/home_living_room.png" 
                alt="Listing 1" 
                fill 
                className="object-cover opacity-80"
              />
          </div>
          <div className="p-2">
            <p className="text-sm font-semibold text-slate-800 line-clamp-1">Sofa Set</p>
            <p className="text-xs text-slate-500 font-medium">₹15,000</p>
          </div>
        </div>

        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
          <div className="relative aspect-square bg-gray-200">
             <Image 
                src="/home_bedroom.png" 
                alt="Listing 2" 
                fill 
                className="object-cover opacity-80"
              />
          </div>
          <div className="p-2">
            <p className="text-sm font-semibold text-slate-800 line-clamp-1">Queen Size Bed</p>
            <p className="text-xs text-slate-500 font-medium">₹22,000</p>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-24 right-4 md:right-[calc(50%-13.5rem+1rem)] bg-[#FFD100] text-slate-900 px-5 py-3.5 rounded-full font-bold shadow-lg flex items-center gap-2 hover:bg-[#FFD100]/90 transition-transform active:scale-95 z-30">
        <Plus className="w-5 h-5 stroke-[3]" />
        New Listing
      </button>
    </section>
  );
}
