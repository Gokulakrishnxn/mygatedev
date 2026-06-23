export default function DevicesFooter() {
  return (
    <div className="bg-[#EAE2D9] px-6 pb-32 pt-4 flex flex-col items-center justify-center text-center">
      <div className="flex items-center gap-2 mb-2">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#173F45">
          <rect x="3" y="3" width="8" height="8" rx="1" />
          <rect x="13" y="3" width="8" height="4" rx="1" />
          <rect x="13" y="9" width="8" height="12" rx="1" />
          <rect x="3" y="13" width="4" height="8" rx="1" />
          <rect x="9" y="13" width="2" height="8" rx="1" />
        </svg>
        <span className="text-[18px] font-bold text-[#173F45] tracking-tight">mygate</span>
      </div>
      <p className="text-[12px] text-slate-500 font-medium">
        Securing 4 Million+ Homes<br />Across India
      </p>
    </div>
  );
}
