import BottomNav from "@/components/BottomNav";
import HeroSection from "@/components/devices/HeroSection";
import AmazonRatingsBar from "@/components/devices/AmazonRatingsBar";
import SupportChatHead from "@/components/devices/SupportChatHead";
import DevicesFooter from "@/components/devices/DevicesFooter";

export default function DevicesPage() {
  return (
    <div className="min-h-screen bg-[#EAE2D9] relative flex flex-col">
      <HeroSection />
      <AmazonRatingsBar />
      <div className="flex-1 bg-[#EAE2D9]"></div>
      <DevicesFooter />
      <SupportChatHead />
      <BottomNav />
    </div>
  );
}
