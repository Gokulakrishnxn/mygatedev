import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="px-4 mb-6">
      <div className="bg-white rounded-2xl p-4 flex items-center gap-3 shadow-sm">
        <Search className="w-5 h-5 text-slate-800 stroke-[2.5]" />
        <input 
          type="text" 
          placeholder="What are you looking for?" 
          className="bg-transparent border-none outline-none w-full text-[15px] font-medium text-slate-800 placeholder:text-slate-500"
        />
      </div>
    </div>
  );
}
