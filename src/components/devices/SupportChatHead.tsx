import { IconChat } from "../Icons";

export default function SupportChatHead() {
  return (
    <button className="fixed bottom-24 right-4 z-30 w-[60px] h-[60px] bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.15)] flex items-center justify-center border border-gray-100">
      <div className="relative">
        <IconChat className="w-8 h-8 text-[#173F45]" />
        <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-[#f64c4c] rounded-full border-2 border-white" />
      </div>
    </button>
  );
}
