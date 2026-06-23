import SettingsHeader from "@/components/settings/SettingsHeader";
import ProfileBlock from "@/components/settings/ProfileBlock";
import HouseholdSection from "@/components/settings/HouseholdSection";
import SettingsList from "@/components/settings/SettingsList";

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-[#F6F6F6] pb-8">
      <SettingsHeader />
      <ProfileBlock />
      <HouseholdSection />
      <SettingsList />
    </div>
  );
}
