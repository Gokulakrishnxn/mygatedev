import { Bookmark, MessageSquare, Tag } from "lucide-react";

export default function BuySellHeader() {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-[#E5E2D8]">
      <h1 className="text-xl font-bold tracking-tight text-slate-800">Buy & Sell</h1>
      
      <div className="flex items-center gap-5 text-slate-800">
        <button className="hover:text-black transition-colors">
          <Tag className="w-[22px] h-[22px] stroke-[2]" />
        </button>
        <button className="hover:text-black transition-colors">
          <Bookmark className="w-[22px] h-[22px] stroke-[2]" />
        </button>
        <button className="hover:text-black transition-colors relative">
          <MessageSquare className="w-[22px] h-[22px] stroke-[2]" />
        </button>
      </div>
    </header>
  );
}
