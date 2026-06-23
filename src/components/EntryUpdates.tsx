import { Bell, Plus, ChevronRight } from "lucide-react";
import Image from "next/image";

const updates = [
  {
    name: "Moorthi M",
    role: "", // None shown in UI, just name
    image: "https://i.pravatar.cc/150?u=a042581f4e29026024d", // Random avatar placeholder
    status: "gray", // Gray dot status
  },
  {
    name: "Daily Help",
    role: "",
    icon: true, // Shows generic icon instead of image
    showPlus: true,
  }
];

export default function EntryUpdates({ children }: { children?: React.ReactNode }) {
  return (
    <div className="bg-white rounded-t-3xl pt-2 pb-24 px-4 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] w-full">
      {/* Handle bar */}
      <div className="w-10 h-1 bg-gray-300 rounded-full mx-auto mb-4" />

      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <Bell className="w-5 h-5 text-slate-800" />
        <h2 className="text-lg font-bold text-slate-900">1 Entry Update</h2>
      </div>

      {/* Today's section */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[15px] font-semibold text-slate-800">Today's Entry Updates</h3>
        <button className="text-sm font-bold text-blue-600 flex items-center gap-0.5">
          View All <ChevronRight className="w-4 h-4 stroke-[3]" />
        </button>
      </div>

      {/* Update Items */}
      <div className="flex gap-4 mb-6 overflow-x-auto pb-2 scrollbar-hide">
        {updates.map((update, i) => (
          <div key={i} className="flex flex-col items-center gap-2 min-w-[72px]">
            <div className="relative">
              <div className="w-16 h-16 rounded-full border-2 border-transparent bg-slate-100 flex items-center justify-center overflow-hidden">
                {update.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={update.image} alt={update.name} className="w-full h-full object-cover" />
                ) : (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-slate-600">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                )}
              </div>

              {/* Status indicators */}
              {update.status === "gray" && (
                <div className="absolute top-0 right-1 w-3 h-3 rounded-full bg-slate-300 border-2 border-white" />
              )}
              {update.showPlus && (
                <div className="absolute top-0 right-0 w-5 h-5 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-white">
                  <Plus className="w-3 h-3 stroke-[3]" />
                </div>
              )}
            </div>
            
            <span className="text-xs font-medium text-slate-700 text-center max-w-[80px] leading-tight">
              {update.name}
            </span>
          </div>
        ))}
      </div>
      
      {/* Ad placement will go inside children */}
      {children}
    </div>
  );
}
