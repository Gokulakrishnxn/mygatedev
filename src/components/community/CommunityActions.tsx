import React from "react";
import { 
  IconHelpdesk,
  IconPayments,
  IconDocuments,
  IconCarHelp,
  IconChat
} from "../Icons";

const actions = [
  {
    icon: IconHelpdesk,
  },
  {
    icon: IconPayments,
  },
  {
    icon: IconDocuments,
    notification: "9+"
  },
  {
    icon: IconCarHelp,
  },
  {
    icon: IconChat,
  }
];

export default function CommunityActions() {
  return (
    <div className="mt-6 px-4 mb-24">
      <h3 className="text-[16px] font-bold text-slate-900 mb-4">Community Actions</h3>
      <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide pb-2">
        {actions.map((action, i) => {
          const Icon = action.icon;
          return (
            <div key={i} className="relative flex-shrink-0">
              {action.notification && (
                <span className="absolute -top-2 -right-2 z-10 w-5 h-5 rounded-full bg-[#f64c4c] text-white text-[10px] font-bold flex items-center justify-center border-2 border-[#EFEBE3]">
                  {action.notification}
                </span>
              )}
              <button className="w-16 h-16 sm:w-18 sm:h-18 flex items-center justify-center rounded-[20px] bg-white shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <Icon className="w-8 h-8 text-[#173F45]" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
