"use client";

import { IconQRCode } from "../Icons";
import { useState } from "react";

export default function ProfileBlock() {
  const [name, setName] = useState("Gokul");
  const [draftName, setDraftName] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [lastTap, setLastTap] = useState(0);
  const [showNoGirlsPopup, setShowNoGirlsPopup] = useState(false);
  const [mygateIdSuffix, setMygateIdSuffix] = useState("144");

  const allowedNames = [
    "gokulakrishnan",
    "aaryan",
    "ezhil",
    "sridhar",
    "krithik",
    "madhan",
    "lingesh",
    "naveen",
    "seran",
    "sundar",
    "jawahar kannan",
    "sanjay",
    "chandru",
    "sundareshwaran",
    "hemachandran",
    "shyam.a.v"
  ];

  const handleTap = () => {
    const now = Date.now();
    if (now - lastTap < 300) {
      setDraftName(name);
      setIsEditing(true);
    }
    setLastTap(now);
  };

  const saveName = () => {
    const normalized = draftName.trim().toLowerCase();
    if (!allowedNames.includes(normalized)) {
      setShowNoGirlsPopup(true);
      return;
    }
    
    // Only update ID if the name actually changed
    if (draftName && draftName !== name) {
      const randomSuffix = Math.floor(100 + Math.random() * 900).toString();
      setMygateIdSuffix(randomSuffix);
    }
    
    setName(draftName || name);
    setIsEditing(false);
  };

  return (
    <div className="bg-white">
      {/* Banner */}
      <div className="px-4 py-3 bg-[#F6F6F6] border-b border-gray-100 flex items-center">
        <span className="text-[13px] text-slate-800">
          Your society is on Ad-Supported plan{" "}
          <a href="#" className="font-semibold underline text-slate-800 ml-1">
            Learn more
          </a>
        </span>
      </div>

      {/* Main Profile Info */}
      <div className="px-4 py-6 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-[72px] h-[72px] rounded-full bg-[#5C7192] flex items-center justify-center text-white text-[28px] font-medium shadow-sm">
              {name.charAt(0).toUpperCase() || "A"}
            </div>
            <div>
              {isEditing ? (
                <input
                  type="text"
                  value={draftName}
                  onChange={(e) => setDraftName(e.target.value)}
                  onBlur={saveName}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") saveName();
                  }}
                  autoFocus
                  className="text-[20px] text-slate-900 mb-2 font-medium bg-white border-b-2 border-slate-300 outline-none w-full max-w-[150px] px-1 py-0"
                />
              ) : (
                <h2 
                  className="text-[20px] text-slate-900 mb-2 cursor-pointer select-none" 
                  onClick={handleTap}
                  title="Double tap to edit"
                >
                  {name}
                </h2>
              )}
              <div className="inline-flex items-center gap-2 bg-[#F6F6F6] rounded-full px-3 py-1">
                <span className="text-[13px] text-slate-700">mygate ID 392 {mygateIdSuffix}</span>
                <button className="flex items-center justify-center w-3.5 h-3.5 rounded-full border border-slate-500 text-slate-500">
                  <span className="text-[9px] font-bold">i</span>
                </button>
              </div>
            </div>
          </div>
          <button className="w-10 h-10 rounded-md bg-[#F6F6F6] flex items-center justify-center">
            <IconQRCode className="w-6 h-6 text-[#4B6175]" />
          </button>
        </div>
      </div>

      {/* Profile Completion */}
      <div className="px-4 py-5 flex items-center justify-between border-b-[8px] border-[#F6F6F6]">
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 flex items-center justify-center rounded-full bg-[#FFF0F0]">
            <span className="text-[11px] font-bold text-[#f64c4c]">0%</span>
            {/* Fake progress circle border */}
          </div>
          <div className="flex flex-col">
            <span className="text-[13px] text-slate-500">Let neighbours discover you!</span>
            <span className="text-[14px] text-slate-800">Complete your profile</span>
          </div>
        </div>
        <button className="flex items-center gap-1 text-[13px] font-semibold text-[#173F45]">
          View Profile
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>

      {/* No Girls Allowed Popup */}
      {showNoGirlsPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4">
          <div className="bg-white rounded-[24px] p-6 w-full max-w-[320px] flex flex-col items-center text-center shadow-xl animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-4">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18"/><path d="M6 6l12 12"/></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Access Denied!</h3>
            <p className="text-[14px] text-slate-500 mb-6">You are not an authorized user for this app. Only the boys are allowed!</p>
            <button  
              onClick={() => { setShowNoGirlsPopup(false); setIsEditing(false); }}
              className="w-full py-3.5 bg-red-500 text-white font-bold rounded-xl active:scale-95 transition-transform text-[15px]"
            >
              Okay, my bad
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
