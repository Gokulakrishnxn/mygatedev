import Image from "next/image";
import BottomNav from "@/components/BottomNav";
import ServicesHeader from "@/components/services/ServicesHeader";
import ServicesCategories from "@/components/services/ServicesCategories";
import TrendingServices from "@/components/services/TrendingServices";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF0CF] via-[#EAEBE8] to-[#D5E6F6] relative">
      <ServicesHeader />
      
      {/* Top Banner Carousel */}
      <div className="px-4 mt-2">
        <div className="relative w-full aspect-[21/9] rounded-[24px] overflow-hidden shadow-sm">
          <Image 
            src="/services_ad_porter.png" 
            alt="Porter Ad" 
            fill 
            sizes="(max-width: 768px) 100vw, 448px"
            className="object-cover"
            priority
          />
        </div>
        {/* Carousel Dots */}
        <div className="flex justify-center items-center gap-1.5 mt-3">
          <div className="w-4 h-1.5 rounded-full bg-[#A0AAB5]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#D1D5DB]" />
        </div>
      </div>

      <ServicesCategories />
      <TrendingServices />

      <BottomNav />
    </div>
  );
}
