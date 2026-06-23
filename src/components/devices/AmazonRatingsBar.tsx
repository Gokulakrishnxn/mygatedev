export default function AmazonRatingsBar() {
  return (
    <div className="px-6 py-5 bg-[#EAE2D9]">
      <div className="bg-white rounded-[20px] shadow-sm p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#173F45] flex items-center justify-center text-white">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <div className="flex flex-col">
            <span className="text-[14px] font-bold text-slate-900 leading-tight">4.4 Stars on Amazon</span>
            <span className="text-[12px] text-slate-500">2000+ Reviews</span>
          </div>
        </div>
        <div className="flex -space-x-2">
          <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-200">
            <img src="https://i.pravatar.cc/150?img=32" alt="Reviewer" className="w-full h-full object-cover" />
          </div>
          <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-200">
            <img src="https://i.pravatar.cc/150?img=12" alt="Reviewer" className="w-full h-full object-cover" />
          </div>
          <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-200">
            <img src="https://i.pravatar.cc/150?img=59" alt="Reviewer" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
