import { 
  IconFurniture, 
  IconFood, 
  IconServices, 
  IconHomeDecor, 
  IconElectronics, 
  IconVehicles, 
  IconKids, 
  IconOthers 
} from "../Icons";

const categories = [
  { label: "Furniture", count: "250+", icon: IconFurniture },
  { label: "Food", count: "150+", icon: IconFood },
  { label: "Services", count: "100+", icon: IconServices },
  { label: "Home Decor", count: "", icon: IconHomeDecor },
  { label: "Electronics", count: "150+", icon: IconElectronics },
  { label: "Vehicles", count: "50+", icon: IconVehicles },
  { label: "Kids Items", count: "50+", icon: IconKids },
  { label: "Others", count: "250+", icon: IconOthers },
];

export default function CategoriesGrid() {
  return (
    <section className="px-4 mb-8">
      <div className="grid grid-cols-4 gap-y-6 gap-x-2">
        {categories.map((category, i) => {
          const Icon = category.icon;
          return (
            <div key={i} className="flex flex-col items-center gap-2">
              <button className="w-16 h-16 sm:w-18 sm:h-18 flex items-center justify-center rounded-[24px] bg-white shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <Icon className="w-8 h-8 text-slate-800" />
              </button>
              <div className="flex flex-col items-center">
                <span className="text-[11px] sm:text-[13px] font-medium text-slate-800 text-center leading-tight">
                  {category.label}
                </span>
                {category.count && (
                  <span className="text-[10px] sm:text-xs font-medium text-slate-500 text-center mt-0.5">
                    {category.count}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
