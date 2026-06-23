import { Search } from "lucide-react";
import { IconShoppingCart, IconClipboard } from "../Icons";

export default function ServicesHeader() {
  return (
    <div className="flex items-center justify-between px-4 py-4 bg-transparent z-10 sticky top-0">
      <h1 className="text-xl font-bold text-slate-900">Services</h1>
      <div className="flex items-center gap-4">
        <button className="text-slate-700">
          <Search className="w-[22px] h-[22px]" />
        </button>
        <button className="text-slate-700">
          <IconShoppingCart className="w-[22px] h-[22px]" />
        </button>
        <button className="text-slate-700">
          <IconClipboard className="w-[22px] h-[22px]" />
        </button>
      </div>
    </div>
  );
}
