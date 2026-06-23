import React from "react";

interface MetricDataItem {
  value: string;
  label: string;
  valueColor: string;
  isStar?: boolean;
  isShield?: boolean;
}

interface MetricCategory {
  title: string;
  data: MetricDataItem[];
}

const metrics: MetricCategory[] = [
  {
    title: "Helpdesk Tickets",
    data: [
      {
        value: "4.6",
        label: "Rating",
        valueColor: "text-[#D39B31]",
        isStar: true
      },
      {
        value: "423",
        label: "Resolved",
        valueColor: "text-[#173F45]"
      }
    ]
  },
  {
    title: "Approval %",
    data: [
      {
        value: "88%",
        label: "Residents",
        valueColor: "text-[#173F45]"
      },
      {
        value: "12%",
        label: "Guards",
        valueColor: "text-[#173F45]"
      }
    ]
  },
  {
    title: "Patrolling Routes",
    data: [
      {
        value: "0",
        label: "Completed",
        valueColor: "text-[#E63946]",
        isShield: true
      },
      {
        value: "0",
        label: "Total",
        valueColor: "text-[#173F45]"
      }
    ]
  }
];

export default function MetricsCarousel() {
  return (
    <div className="px-4 py-2 flex gap-3 overflow-x-auto scrollbar-hide">
      {metrics.map((metric, i) => (
        <div key={i} className="min-w-[140px] bg-white rounded-xl shadow-sm border border-gray-100 flex-shrink-0 flex flex-col">
          {/* Header */}
          <div className="px-3 py-2 border-b border-gray-100 flex items-center justify-between">
            <span className="text-[12px] font-medium text-slate-800">{metric.title}</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#A0AAB5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </div>
          {/* Data */}
          <div className="px-3 py-3 flex justify-between items-center flex-1">
            {metric.data.map((d, j) => (
              <div key={j} className="flex flex-col items-center">
                <div className="flex items-center gap-1">
                  {d.isStar && (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="#D39B31" stroke="#D39B31" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  )}
                  {d.isShield && (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#E63946" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  )}
                  <span className={`text-[15px] font-bold ${d.valueColor}`}>{d.value}</span>
                </div>
                <span className="text-[10px] font-medium text-[#A0AAB5] mt-0.5">{d.label}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
