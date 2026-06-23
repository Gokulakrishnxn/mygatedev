"use client";

import { MessageSquare, Smartphone, X } from "lucide-react";

const APP_STORE_URL = "https://apps.apple.com/in/app/mygate-premium/id1101762651";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.mygate.user";

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

        <div className="mb-5 flex flex-col items-center text-center">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#173F45] text-white">
            <MessageSquare className="h-7 w-7" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Get the MyGate App</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-500">
            Download the official app for faster access, notifications, and the
            full MyGate experience on your phone.
          </p>
        </div>

        <div className="space-y-3">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-black px-4 py-3.5 text-sm font-semibold text-white transition-transform active:scale-[0.98]"
          >
            <Smartphone className="h-4 w-4" />
            Download on App Store
          </a>

          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#173F45] px-4 py-3.5 text-sm font-semibold text-white transition-transform active:scale-[0.98]"
          >
            <Smartphone className="h-4 w-4" />
            Get it on Google Play
          </a>

          <button
            onClick={onClose}
            className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
          >
            Continue using web app
          </button>
        </div>
      </div>
    </div>
  );
}
