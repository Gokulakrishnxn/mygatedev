import { 
  IconBell, 
  IconRadioWaves, 
  IconFeed, 
  IconBox, 
  IconCrown, 
  IconHouse, 
  IconHelpCircle, 
  IconShareArrow, 
  IconPerson, 
  IconLogout 
} from "../Icons";

function SectionTitle({ title }: { title: string }) {
  return (
    <h3 className="px-4 py-4 text-[15px] text-[#A0AAB5] font-medium tracking-wide">
      {title}
    </h3>
  );
}

function SettingsItem({ icon: Icon, title, rightElement, hasArrow = true, isLast = false, isAdd = false }: { 
  icon: React.ElementType, 
  title: string, 
  rightElement?: React.ReactNode,
  hasArrow?: boolean,
  isLast?: boolean,
  isAdd?: boolean
}) {
  return (
    <div className="flex items-center px-4 py-4 bg-white hover:bg-slate-50 transition-colors cursor-pointer">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${isAdd ? 'border border-slate-300' : 'bg-[#F6F8F9]'}`}>
        <Icon className={`w-[22px] h-[22px] ${isAdd ? 'text-[#173F45]' : 'text-[#173F45]'}`} />
      </div>
      <div className={`flex-1 flex items-center justify-between py-1 ${!isLast ? 'border-b border-gray-100' : ''}`}>
        <span className={`text-[15px] ${isAdd ? 'text-[#173F45] font-medium' : 'text-slate-800'}`}>
          {title}
        </span>
        <div className="flex items-center gap-2">
          {rightElement}
          {hasArrow && (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A0AAB5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          )}
        </div>
      </div>
    </div>
  );
}

export default function SettingsList() {
  return (
    <div className="bg-[#F6F6F6] pb-8">
      {/* Security & Notifications */}
      <div className="bg-white mb-2">
        <SectionTitle title="Security & Notifications" />
        <div className="px-4 mb-2">
          <div className="bg-[#F0EBE1] rounded-lg px-4 py-3.5 flex justify-between items-center">
            <span className="text-[14px] text-slate-800">Not Getting Notifications ?</span>
            <button className="flex items-center gap-1 text-[14px] text-slate-800">
              Test Now
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        </div>
        <SettingsItem icon={IconBell} title="Notification Preferences" />
        <SettingsItem icon={IconRadioWaves} title="Security Alert List" />
        <SettingsItem icon={IconFeed} title="Feed Settings" isLast={true} />
      </div>

      {/* Purchases */}
      <div className="bg-white mb-2">
        <SectionTitle title="Purchases" />
        <SettingsItem icon={IconBox} title="My Orders" />
        <SettingsItem 
          icon={IconCrown} 
          title="My Plans" 
          rightElement={
            <span className="bg-[#EAEFF5] text-slate-700 text-[11px] px-2.5 py-1 rounded-full font-medium">
              Ad-Supported
            </span>
          } 
          isLast={true} 
        />
      </div>

      {/* Manage Flats */}
      <div className="bg-white mb-2">
        <SectionTitle title="Manage Flats" />
        <SettingsItem 
          icon={IconHouse} 
          title="E E1108, Urbanrise Revolution One" 
          rightElement={
            <span className="bg-[#E6F4EA] text-[#137333] text-[11px] px-2.5 py-1 rounded-full font-medium border border-[#CEEAD6]">
              Active
            </span>
          }
          hasArrow={false}
        />
        <SettingsItem 
          icon={(props) => (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          )} 
          title="Add Flat/Villa/Office" 
          hasArrow={false}
          isAdd={true}
          isLast={true} 
        />
      </div>

      {/* General Settings */}
      <div className="bg-white mb-6 border-b border-gray-100">
        <SectionTitle title="General Settings" />
        <SettingsItem icon={IconHelpCircle} title="Support & Feedback" />
        <SettingsItem icon={IconShareArrow} title="Tell a friend about mygate" />
        <SettingsItem icon={IconPerson} title="Account Information" />
        <SettingsItem icon={IconLogout} title="Logout" isLast={true} />
      </div>

      {/* Footer block inside SettingsList for continuity */}
      <div className="flex flex-col items-center justify-center pb-12 pt-6">
        <div className="flex items-center gap-2 mb-3">
          {/* MyGate Logo fake */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#173F45">
            <rect x="3" y="3" width="8" height="8" rx="1" />
            <rect x="13" y="3" width="8" height="4" rx="1" />
            <rect x="13" y="9" width="8" height="12" rx="1" />
            <rect x="3" y="13" width="4" height="8" rx="1" />
            <rect x="9" y="13" width="2" height="8" rx="1" />
          </svg>
          <span className="text-xl font-bold text-[#173F45] tracking-tight">mygate</span>
        </div>
        <div className="flex items-center gap-2 text-[13px] text-slate-800 mb-2">
          <a href="#" className="underline">Terms & Conditions</a>
          <span className="text-slate-300">|</span>
          <a href="#" className="underline">Privacy Policy</a>
        </div>
        <span className="text-[13px] text-[#A0AAB5]">Version 7.30.0</span>
      </div>
    </div>
  );
}
