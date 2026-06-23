"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  IconNavSocial, 
  IconNavBuySell, 
  IconNavCommunity, 
  IconNavServices, 
  IconNavDevices 
} from "./Icons";

const navItems = [
  { label: "Social", icon: IconNavSocial, href: "/" },
  { label: "Buy & Sell", icon: IconNavBuySell, href: "/buy-sell" },
  { label: "Community", icon: IconNavCommunity, href: "/community", notification: true },
  { label: "Services", icon: IconNavServices, href: "/services" },
  { label: "Devices", icon: IconNavDevices, href: "/devices" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 w-full max-w-md bg-white border-t border-gray-100 px-2 py-2 z-40 shadow-[0_-2px_10px_rgba(0,0,0,0.02)]">
      <div className="flex items-center justify-between">
        {navItems.map((item, i) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link 
              key={i} 
              href={item.href}
              className="flex flex-col items-center gap-1 w-full relative pt-1 pb-2"
            >
              <div className="relative">
                <Icon 
                  className={cn(
                    "w-[26px] h-[26px] transition-colors",
                    isActive ? "text-black" : "text-slate-400"
                  )} 
                />
                {item.notification && (
                  <div className="absolute top-0 -right-1 w-2.5 h-2.5 bg-[#f64c4c] rounded-full border border-white" />
                )}
              </div>
              <span 
                className={cn(
                  "text-[10px] font-medium transition-colors",
                  isActive ? "text-black font-bold" : "text-slate-500"
                )}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
      {/* iOS Home Indicator space */}
      <div className="h-5 w-full flex justify-center items-end pb-1">
        <div className="w-1/3 h-1 bg-black rounded-full" />
      </div>
    </nav>
  );
}
