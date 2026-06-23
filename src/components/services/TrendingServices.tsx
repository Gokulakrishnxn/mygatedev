import Image from "next/image";

const services = [
  {
    title: "Porter Packers and Movers",
    subtitle: "Porter",
    rating: "4.0",
    image: "/services_trending_porter.png",
    imageClassName: "object-cover",
    bgClass: "bg-[#0047FF]"
  },
  {
    title: "Airport Cabs by Quick Ride",
    subtitle: "Quick Ride",
    rating: "4.7",
    image: "/services_logo_quickride.png",
    imageClassName: "object-contain p-6",
    bgClass: "bg-white"
  },
  {
    title: "Blood Tests at Home",
    subtitle: "Agilus Diagnostics",
    rating: "4.6",
    image: "/services_logo_agilus.png",
    imageClassName: "object-contain p-6",
    bgClass: "bg-white"
  },
  {
    title: "Bloodtest by OrangeHealth Labs",
    subtitle: "Orange Health",
    rating: "4.8",
    image: "/services_logo_orangehealth.png",
    imageClassName: "object-contain p-6",
    bgClass: "bg-white"
  }
];

export default function TrendingServices() {
  return (
    <div className="px-4 pb-24">
      <h3 className="text-[20px] font-bold text-slate-900 mb-4">Trending Services</h3>
      <div className="grid grid-cols-2 gap-3">
        {services.map((svc, i) => (
          <div key={i} className="bg-white rounded-[20px] shadow-sm border border-gray-100 overflow-hidden flex flex-col">
            <div className={`relative h-28 w-full ${svc.bgClass}`}>
              <Image 
                src={svc.image} 
                alt={svc.title} 
                fill 
                sizes="(max-width: 768px) 50vw, 200px"
                className={svc.imageClassName}
              />
              <div className="absolute bottom-2 right-2 bg-white rounded-md px-1.5 py-0.5 shadow-sm flex items-center gap-1 z-10">
                <span className="text-[11px] font-medium text-slate-700">{svc.rating}</span>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="#E67E22" stroke="#E67E22"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              </div>
            </div>
            <div className="px-3 py-3 flex flex-col">
              <h4 className="text-[13px] font-bold text-slate-900 leading-tight mb-1">
                {svc.title}
              </h4>
              <span className="text-[12px] text-slate-500">
                {svc.subtitle}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
