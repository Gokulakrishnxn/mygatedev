"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

const STORAGE_KEY = "mygate-user-name";
const DEFAULT_NAME = "Gokul";

type UserProfileContextType = {
  userName: string;
  setUserName: (name: string) => void;
};

const UserProfileContext = createContext<UserProfileContextType | undefined>(
  undefined
);

export function getUserInitial(name: string) {
  return name.trim().charAt(0).toUpperCase() || "G";
}

export function UserProfileProvider({ children }: { children: ReactNode }) {
  const [userName, setUserNameState] = useState(DEFAULT_NAME);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) setUserNameState(stored);
  }, []);

  const setUserName = useCallback((name: string) => {
    const trimmed = name.trim() || DEFAULT_NAME;
    setUserNameState(trimmed);
    localStorage.setItem(STORAGE_KEY, trimmed);
  }, []);

  return (
    <UserProfileContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserProfileContext.Provider>
  );
}

export function useUserProfile() {
  const context = useContext(UserProfileContext);
  if (!context) {
    throw new Error("useUserProfile must be used within UserProfileProvider");
  }
  return context;
}
