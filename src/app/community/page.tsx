import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import Image from "next/image";
import SocietyInfo from "@/components/community/SocietyInfo";
import MetricsCarousel from "@/components/community/MetricsCarousel";
import AnnouncementsSection from "@/components/community/AnnouncementsSection";
import CommunityActions from "@/components/community/CommunityActions";

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-[#EFEBE3] relative overflow-x-hidden">
      <Header />
      
      {/* Top Background Gradient */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-[#EFEBE3] to-transparent pointer-events-none" />

      <div className="relative z-0 pt-2 pb-[100px]">
        {/* Ad Banner */}
        <div className="px-4 mb-4">
          <div className="relative w-full aspect-[2/1] rounded-[20px] overflow-hidden shadow-sm">
            <Image 
              src="/community_ad_banner.png" 
              alt="Welcome Gift Amex Ad" 
              fill 
              sizes="(max-width: 768px) 100vw, 448px"
              className="object-cover"
              priority
            />
          </div>
        </div>

        <SocietyInfo />
        <MetricsCarousel />
        <AnnouncementsSection />
        <CommunityActions />
      </div>

      <BottomNav />
    </div>
  );
}
