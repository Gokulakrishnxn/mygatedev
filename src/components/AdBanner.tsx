import Image from "next/image";
import { cn } from "@/lib/utils";

interface AdBannerProps {
  src: string;
  alt: string;
  className?: string;
  adTextPosition?: "top-left" | "top-right";
}

export default function AdBanner({ src, alt, className, adTextPosition = "top-left" }: AdBannerProps) {
  return (
    <div className={cn("relative w-full overflow-hidden rounded-xl", className)}>
      <div className="relative aspect-[21/9] w-full">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 448px"
          className="object-cover"
        />
      </div>
      <div 
        className={cn(
          "absolute text-[10px] font-bold text-white tracking-wider px-1.5 py-0.5",
          adTextPosition === "top-left" ? "top-2 left-2" : "top-2 right-2"
        )}
      >
        AD
      </div>
    </div>
  );
}
