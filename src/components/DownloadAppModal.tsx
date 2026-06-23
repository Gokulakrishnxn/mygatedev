"use client";

import { MessageSquare, X } from "lucide-react";

interface DownloadAppModalProps {
  open: boolean;
  onClose: () => void;
}

export default function DownloadAppModal({ open, onClose }: DownloadAppModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/50 px-4 pb-6 md:items-center">
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-sm rounded-[24px] bg-white p-6 shadow-xl animate-in slide-in-from-bottom-4 duration-300">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mb-6 flex flex-col items-center text-center">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#173F45] text-white">
            <MessageSquare className="h-7 w-7" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Download MyGate App</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-500">
            Download the APK on your phone to install and use the MyGate app.
          </p>
        </div>

        <button
          onClick={onClose}
          className="w-full rounded-xl bg-[#173F45] px-4 py-3.5 text-sm font-semibold text-white transition-transform active:scale-[0.98]"
        >
          Okay
        </button>
      </div>
    </div>
  );
}
