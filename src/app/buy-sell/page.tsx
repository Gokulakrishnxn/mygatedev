import BuySellHeader from "@/components/buy-sell/BuySellHeader";
import AdBanner from "@/components/AdBanner";
import HomesSection from "@/components/buy-sell/HomesSection";
import SearchBar from "@/components/buy-sell/SearchBar";
import CategoriesGrid from "@/components/buy-sell/CategoriesGrid";
import RecentListings from "@/components/buy-sell/RecentListings";
import BottomNav from "@/components/BottomNav";

export default function BuySellPage() {
  return (
    <div className="min-h-screen bg-[#E5E2D8] flex justify-center">
      {/* Mobile container constraint */}
      <div className="w-full bg-[#E5E2D8] min-h-screen relative shadow-2xl flex flex-col">
        
        {/* Main scrollable content area */}
        <div className="flex-1 overflow-y-auto scrollbar-hide">
          <BuySellHeader />
          
          <div className="px-4 py-2 mb-4">
            <AdBanner 
              src="/top_banner_ad.png" 
              alt="Premium Credit Card Advertisement" 
            />
          </div>

          <HomesSection />

          <SearchBar />

          <CategoriesGrid />

          <RecentListings />
        </div>

        <BottomNav />
      </div>
    </div>
  );
}
