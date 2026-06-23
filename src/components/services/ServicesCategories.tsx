import { IconNavServices, IconPackers, IconTaxi, IconProperty } from "../Icons";

const categories = [
  {
    label: "Services by Urban...",
    icon: IconNavServices
  },
  {
    label: "Packers and Movers",
    icon: IconPackers
  },
  {
    label: "Outstation and Rental Cabs",
    icon: IconTaxi
  },
  {
    label: "Property Managemen..",
    icon: IconProperty
  }
];

export default function ServicesCategories() {
  return (
    <div className="px-4 mt-8 mb-8">
      <h3 className="text-[20px] font-bold text-slate-900 mb-5">Categories</h3>
      <div className="flex items-start justify-between">
        {categories.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <div key={i} className="flex flex-col items-center w-[72px]">
              <button className="w-[72px] h-[72px] rounded-[24px] bg-white shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex items-center justify-center mb-2">
                <Icon className="w-8 h-8 text-[#173F45]" />
              </button>
              <span className="text-[11px] text-slate-600 text-center leading-tight">
                {cat.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
