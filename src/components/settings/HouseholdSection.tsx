import { IconPaw, IconShareArrow } from "../Icons";

export default function HouseholdSection() {
  return (
    <div className="bg-white border-b-[8px] border-[#F6F6F6] py-4">
      {/* Header */}
      <div className="px-4 flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-slate-800">
          {/* People icon */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          <span className="text-[15px] font-medium">Household</span>
        </div>
        <button className="flex items-center gap-1 text-[13px] font-medium text-[#173F45]">
          Manage
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>

      {/* Cards Row */}
      <div className="px-4 flex items-center gap-3 mb-4">
        {/* Family Card */}
        <div className="flex-1 rounded-xl border border-gray-200 p-3 flex justify-between items-center bg-white shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
          <div className="flex flex-col">
            <span className="text-[13px] text-slate-800">Family</span>
            <span className="text-[12px] text-slate-500 mt-0.5">4 members</span>
          </div>
          <div className="relative">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#EAE2D9] border-2 border-white flex items-center justify-center relative z-10 opacity-60">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#173F45" strokeWidth="1.5"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#EAE2D9] border-2 border-white flex items-center justify-center relative z-20">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#173F45" strokeWidth="1.5"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#FFD100] rounded-full border border-white flex items-center justify-center z-30">
                  <span className="text-[10px] font-bold text-slate-800 leading-none">+</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pets Card */}
        <div className="flex-1 rounded-xl border border-dashed border-gray-300 p-3 flex justify-between items-center bg-[#FDFDFD]">
          <div className="flex flex-col">
            <span className="text-[13px] text-slate-800">Pets</span>
            <span className="text-[13px] font-medium text-[#173F45] mt-0.5">+ Add</span>
          </div>
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-[#F0F2F5] flex items-center justify-center">
              <IconPaw className="w-6 h-6 text-[#A0AAB5]" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#FFD100] rounded-full border border-white flex items-center justify-center">
              <span className="text-[10px] font-bold text-slate-800 leading-none">+</span>
            </div>
          </div>
        </div>
      </div>

      {/* Address Block */}
      <div className="px-4">
        <div className="rounded-xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] bg-white overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
            <span className="text-[14px] text-slate-800 font-medium">My Address</span>
            <button className="flex items-center gap-1.5 text-[13px] text-slate-800">
              Share
              <IconShareArrow className="w-4 h-4" />
            </button>
          </div>
          <div className="px-4 py-3 bg-[#FDFDFD]">
            <p className="text-[13px] text-slate-500 leading-relaxed">
              11th Floor, E E1108, Urbanrise Revolution One, OMR<br />
              Main Road Padur, Village, Chennai, Chennai-603103
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
