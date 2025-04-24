
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { getUserProgress, getUserSettings, getDefaultUserProgress, getDefaultUserSettings, saveUserProgress, saveUserSettings } from "../services/userService";
import { Language, UserProgress, UserSettings } from "../types";

interface UserContextType {
  userProgress: UserProgress | null;
  userSettings: UserSettings;
  setUserLanguages: (nativeLanguage: Language, learningLanguage: Language) => void;
  updateSettings: (settings: Partial<UserSettings>) => void;
  resetProgress: () => void;
  isOnboarded: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userProgress, setUserProgress] = useState<UserProgress | null>(null);
  const [userSettings, setUserSettings] = useState<UserSettings>(getDefaultUserSettings());
  const [isOnboarded, setIsOnboarded] = useState<boolean>(false);

  // Load user data on initial render
  useEffect(() => {
    const progress = getUserProgress();
    if (progress) {
      setUserProgress(progress);
      setIsOnboarded(true);
    }
    
    const settings = getUserSettings();
    setUserSettings(settings);
  }, []);

  // Set up user's learning and native languages
  const setUserLanguages = (nativeLanguage: Language, learningLanguage: Language) => {
    const newProgress = getDefaultUserProgress(nativeLanguage, learningLanguage);
    saveUserProgress(newProgress);
    setUserProgress(newProgress);
    setIsOnboarded(true);
  };

  // Update user settings
  const updateSettings = (settings: Partial<UserSettings>) => {
    const updatedSettings = { ...userSettings, ...settings };
    saveUserSettings(updatedSettings);
    setUserSettings(updatedSettings);
  };

  // Reset user progress
  const resetProgress = () => {
    localStorage.removeItem('lingua_lab_user_progress');
    setUserProgress(null);
    setIsOnboarded(false);
  };

  const value = {
    userProgress,
    userSettings,
    setUserLanguages,
    updateSettings,
    resetProgress,
    isOnboarded
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
