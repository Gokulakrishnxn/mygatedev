import React from "react";

export default function SocietyInfo() {
  return (
    <div className="px-4 py-4 flex items-center justify-between">
      <div>
        <h2 className="text-[20px] font-bold text-slate-900 flex items-center gap-1">
          Urbanrise Revolution One
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
        </h2>
        <div className="flex items-center gap-2 mt-1">
          <div className="flex items-center gap-0.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#173F45" stroke="#173F45" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#173F45" stroke="#173F45" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#173F45" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#173F45" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#173F45" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          </div>
          <span className="text-[13px] text-slate-600">212 Reviews</span>
        </div>
      </div>
      <button className="bg-white border border-gray-200 shadow-sm text-slate-800 font-medium text-[13px] px-4 py-2 rounded-lg">
        Rate Now
      </button>
    </div>
  );
}
