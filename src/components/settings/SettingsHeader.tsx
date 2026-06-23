import { IconBackArrow, IconHelpCircle } from "../Icons";
import Link from "next/link";

export default function SettingsHeader() {
  return (
    <div className="flex items-center justify-between px-4 py-4 bg-white sticky top-0 z-10 border-b border-gray-100">
      <div className="flex items-center gap-4">
        <Link href="/" className="p-1">
          <IconBackArrow className="w-6 h-6 text-[#173F45]" />
        </Link>
        <h1 className="text-xl font-medium text-slate-800">Settings</h1>
      </div>
      <button className="p-1">
        <IconHelpCircle className="w-6 h-6 text-slate-500" />
      </button>
    </div>
  );
}
