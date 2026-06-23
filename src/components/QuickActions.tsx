import { cn } from "@/lib/utils";
import React from "react";
import { 
  IconPreApprove, 
  IconPayments, 
  IconHelpdesk, 
  IconPosts, 
  IconSecurity, 
  IconDirectory, 
  IconViewMore 
} from "./Icons";

const actions = [
  {
    label: "Pre-Approve",
    icon: IconPreApprove,
    badge: "Safe mode",
    badgeColor: "bg-[#6A4C9C]",
  },
  {
    label: "Payments",
    icon: IconPayments,
  },
  {
    label: "Helpdesk",
    icon: IconHelpdesk,
  },
  {
    label: "Posts",
    icon: IconPosts,
    notification: "9+",
  },
  {
    label: "Book Now",
    customIcon: () => (
      <div className="flex items-center justify-center w-full h-full text-[10px] font-bold text-[#b4417b] text-center leading-tight">
        BOOK YOUR <br /> APPOINTMENT
      </div>
    ),
  },
  {
    label: "Security",
    icon: IconSecurity,
  },
  {
    label: "Directory",
    icon: IconDirectory,
  },
  {
    label: "View More",
    icon: IconViewMore,
    bgClass: "bg-[#FFD100]",
  },
];

export default function QuickActions() {
  return (
    <section className="px-4 py-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-slate-800">Quick Actions</h2>
        <button className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-slate-900">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 3H3v18h18V3z"/><path d="M21 9H3"/><path d="M9 21V9"/></svg>
          Customise
        </button>
      </div>

      <div className="grid grid-cols-4 gap-y-6 gap-x-2">
        {actions.map((action, i) => {
          const Icon = action.icon;
          return (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="relative">
                {/* Badge (Safe mode) */}
                {action.badge && (
                  <span className={cn("absolute -top-3 left-1/2 -translate-x-1/2 z-10 px-2 py-0.5 rounded-sm text-[10px] font-bold text-white whitespace-nowrap shadow-sm", action.badgeColor)}>
                    {action.badge}
                  </span>
                )}
                
                {/* Notification Bubble */}
                {action.notification && (
                  <span className="absolute -top-2 -right-2 z-10 w-5 h-5 rounded-full bg-[#f64c4c] text-white text-[10px] font-bold flex items-center justify-center border-2 border-[#EFEBE3]">
                    {action.notification}
                  </span>
                )}

                <button 
                  className={cn(
                    "relative w-16 h-16 sm:w-18 sm:h-18 flex items-center justify-center rounded-[20px] bg-white shadow-sm hover:shadow-md transition-shadow border border-gray-100",
                    action.bgClass
                  )}
                >
                  {action.customIcon ? (
                    action.customIcon()
                  ) : (
                    Icon && <Icon className="w-8 h-8 text-slate-800" />
                  )}
                </button>
              </div>
              <span className="text-xs sm:text-[13px] font-medium text-slate-700 text-center">
                {action.label}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
