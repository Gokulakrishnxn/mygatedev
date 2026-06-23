"use client";

import { UserProfileProvider } from "@/context/UserProfileContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <UserProfileProvider>{children}</UserProfileProvider>;
}
