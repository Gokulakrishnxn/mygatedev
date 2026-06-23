"use client";

import { ChevronDown, ChevronUp, Search, MessageSquare, Plus } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DownloadAppModal from "@/components/DownloadAppModal";
import { getUserInitial, useUserProfile } from "@/context/UserProfileContext";

export default function Header() {
  const { userName } = useUserProfile();
  const userInitial = getUserInitial(userName);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [flatName, setFlatName] = useState("E E1108");
  const [isEditingFlat, setIsEditingFlat] = useState(false);
  const [lastTap, setLastTap] = useState(0);

  const handleTap = () => {
    const now = Date.now();
    if (now - lastTap < 300) {
      setIsEditingFlat(true);
    }
    setLastTap(now);
  };

  return (
    <>
      <header className="flex items-center justify-between px-4 py-3 bg-transparent z-40 relative">
        <div className="flex items-center gap-1 cursor-pointer select-none" onClick={() => setIsDropdownOpen(true)}>
          {isEditingFlat ? (
            <input
              type="text"
              value={flatName}
              onChange={(e) => setFlatName(e.target.value)}
              onBlur={() => setIsEditingFlat(false)}
              onKeyDown={(e) => {
                if (e.key === "Enter") setIsEditingFlat(false);
              }}
              autoFocus
              className="text-lg font-bold text-slate-900 tracking-tight bg-transparent border-b-2 border-slate-300 outline-none w-24"
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <span className="text-lg font-bold text-slate-900 tracking-tight">{flatName}</span>
          )}
          <ChevronDown className="w-5 h-5 text-slate-700" />
        </div>
        
        <div className="flex items-center gap-5">
          <button className="text-slate-700 hover:text-slate-900 transition-colors" onClick={handleTap} title="Double tap to edit society name">
            <Search className="w-6 h-6" />
          </button>
          <button 
            className="text-slate-700 hover:text-slate-900 transition-colors relative"
            onClick={() => setIsDownloadOpen(true)}
            aria-label="Download MyGate app"
          >
            <MessageSquare className="w-6 h-6" />
          </button>
          <Link
            href="/settings"
            className="w-9 h-9 rounded-full bg-[#5C7192] text-white flex items-center justify-center font-medium shadow-sm"
            title={userName}
          >
            {userInitial}
          </Link>
        </div>
      </header>

      <DownloadAppModal open={isDownloadOpen} onClose={() => setIsDownloadOpen(false)} />

      {/* Dropdown Overlay */}
      {isDropdownOpen && (
        <div className="fixed inset-0 z-50 flex flex-col md:max-w-md md:mx-auto">
          <div 
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsDropdownOpen(false)}
          />

          <div className="bg-[#EFECE5] rounded-b-[32px] w-full pb-6 shadow-2xl relative animate-in slide-in-from-top-4 duration-300">
            <div className="flex items-center justify-between px-4 py-3">
              <button 
                onClick={() => setIsDropdownOpen(false)}
                className="flex items-center gap-1"
              >
                <h1 className="text-xl font-semibold tracking-tight text-slate-800">E E1108</h1>
                <ChevronUp className="w-5 h-5 text-slate-600" />
              </button>
              
              <div className="flex items-center gap-5">
                <button className="text-slate-700">
                  <Search className="w-6 h-6" />
                </button>
                <button 
                  className="text-slate-700 relative"
                  onClick={() => setIsDownloadOpen(true)}
                  aria-label="Download MyGate app"
                >
                  <MessageSquare className="w-6 h-6" />
                </button>
                <Link
                  href="/settings"
                  className="w-9 h-9 rounded-full bg-[#5C7192] text-white flex items-center justify-center font-medium shadow-sm"
                  title={userName}
                >
                  {userInitial}
                </Link>
              </div>
            </div>

            <div className="px-4 mt-2">
              <div className="flex justify-between items-center py-4 border-b border-gray-200/60">
                <span className="text-[15px] text-slate-700 font-medium">E-E1108, Urbanrise Revolution One</span>
                <div className="bg-red-400 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                  64
                </div>
              </div>

              <button className="flex items-center gap-4 py-5 text-slate-800">
                <div className="w-10 h-10 rounded-full border border-slate-400 flex items-center justify-center">
                  <Plus className="w-5 h-5 text-slate-700" />
                </div>
                <span className="text-base font-medium">Add Flat/Villa/Office</span>
              </button>

              <div className="mt-2 w-full aspect-[21/9] relative rounded-lg overflow-hidden">
                <Image
                  src="/dropdown_ad_banner.png"
                  alt="Country Delight Ad"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mt-6" />
          </div>
        </div>
      )}
    </>
  );
}
