import Header from "@/components/Header";
import AdBanner from "@/components/AdBanner";
import QuickActions from "@/components/QuickActions";
import EntryUpdates from "@/components/EntryUpdates";
import BottomNav from "@/components/BottomNav";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#E5E2D8] flex justify-center">
      {/* Mobile container constraint to simulate app feel on larger screens */}
      <div className="w-full bg-[#E5E2D8] min-h-screen relative shadow-2xl flex flex-col">
        
        {/* Main scrollable content area */}
        <div className="flex-1 overflow-y-auto pb-[90px] scrollbar-hide">
          <Header />
          
          <div className="px-4 py-2">
            <p className="text-sm text-slate-800 mb-3">
              Your society is on Ad-Supported plan <a href="#" className="font-bold underline decoration-1 underline-offset-2">Learn more</a>
            </p>
            <AdBanner 
              src="/top_banner_ad.png" 
              alt="Premium Credit Card Advertisement" 
            />
          </div>

          <QuickActions />

          <EntryUpdates>
            <div className="mt-4">
              <AdBanner 
                src="/bottom_banner_ad.png" 
                alt="Hotel Credit Advertisement" 
                adTextPosition="top-left"
                className="rounded-xl border border-gray-100"
              />
            </div>
          </EntryUpdates>
        </div>

        <BottomNav />
      </div>
    </div>
  );
}
