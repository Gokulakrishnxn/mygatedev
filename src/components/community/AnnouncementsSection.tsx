import React from "react";

const announcements = [
  {
    title: "Weekly Maintenance Report from 15-06-26 to 21-06-2026",
    time: "34 mins ago",
    content: "Dear Residents, Greetings from Urbanrise Revolution One !!!This is to bring to kind notice that the Urbanrise Revolution One Weekly report Zoho spreadsheet ...",
    unread: true
  },
  {
    title: "Resident Move in / Move out Procedure",
    time: "3 days ago",
    content: "MOVE IN : move in to the Move in Office - F B Move in F..",
    unread: false
  }
];

export default function AnnouncementsSection() {
  return (
    <div className="mt-4">
      <div className="px-4 flex items-center justify-between mb-2">
        <h3 className="text-[16px] font-bold text-slate-900 flex items-center gap-1">
          Announcements
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
        </h3>
      </div>
      <div className="px-4 py-2 flex gap-3 overflow-x-auto scrollbar-hide">
        {announcements.map((ann, i) => (
          <div key={i} className="min-w-[280px] max-w-[280px] bg-white rounded-[20px] p-4 shadow-sm border border-gray-100 flex-shrink-0 relative">
            {ann.unread && (
              <div className="absolute top-4 right-4 w-2 h-2 bg-[#f64c4c] rounded-full" />
            )}
            <h4 className="text-[14px] font-bold text-slate-800 pr-4 leading-snug">
              {ann.title}
            </h4>
            <span className="text-[12px] text-slate-500 block mt-1.5 mb-2">{ann.time}</span>
            <p className="text-[13px] text-slate-700 leading-relaxed line-clamp-4">
              {ann.content.split("...").map((text, idx, arr) => (
                <React.Fragment key={idx}>
                  {text}
                  {idx === arr.length - 1 && arr.length > 1 && (
                    <span className="font-bold text-slate-900 ml-1 cursor-pointer">Read more</span>
                  )}
                </React.Fragment>
              ))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
