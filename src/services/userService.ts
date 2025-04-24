
import { Language, UserProgress, UserSettings } from "../types";

const USER_PROGRESS_KEY = 'lingua_lab_user_progress';
const USER_SETTINGS_KEY = 'lingua_lab_user_settings';

export const getDefaultUserProgress = (nativeLanguage: Language, learningLanguage: Language): UserProgress => {
  return {
    nativeLanguage,
    learningLanguage,
    completedLessons: [],
    completedActivities: [],
    streak: 0,
    lastActive: new Date().toISOString(),
    xp: 0
  };
};

export const getDefaultUserSettings = (): UserSettings => {
  return {
    darkMode: false,
    soundEnabled: true,
    dailyGoal: 15,
    reminderEnabled: false
  };
};

export const saveUserProgress = (progress: UserProgress): void => {
  localStorage.setItem(USER_PROGRESS_KEY, JSON.stringify(progress));
};

export const getUserProgress = (): UserProgress | null => {
  const savedProgress = localStorage.getItem(USER_PROGRESS_KEY);
  if (savedProgress) {
    return JSON.parse(savedProgress) as UserProgress;
  }
  return null;
};

export const saveUserSettings = (settings: UserSettings): void => {
  localStorage.setItem(USER_SETTINGS_KEY, JSON.stringify(settings));
};

export const getUserSettings = (): UserSettings => {
  const savedSettings = localStorage.getItem(USER_SETTINGS_KEY);
  if (savedSettings) {
    return JSON.parse(savedSettings) as UserSettings;
  }
  return getDefaultUserSettings();
};

export const completeLessonActivity = (activityId: string): void => {
  const progress = getUserProgress();
  if (progress) {
    if (!progress.completedActivities.includes(activityId)) {
      progress.completedActivities.push(activityId);
      progress.xp += 10; // Award XP for completing an activity
      saveUserProgress(progress);
    }
  }
};

export const completeLesson = (lessonId: string): void => {
  const progress = getUserProgress();
  if (progress) {
    if (!progress.completedLessons.includes(lessonId)) {
      progress.completedLessons.push(lessonId);
      progress.xp += 50; // Award XP for completing a lesson
      saveUserProgress(progress);
    }
  }
};

export const updateStreak = (): void => {
  const progress = getUserProgress();
  if (progress) {
    const lastActiveDate = new Date(progress.lastActive).setHours(0, 0, 0, 0);
    const today = new Date().setHours(0, 0, 0, 0);
    const yesterday = new Date(today - 86400000).setHours(0, 0, 0, 0);
    
    if (lastActiveDate === yesterday) {
      // User was active yesterday, increment streak
      progress.streak += 1;
    } else if (lastActiveDate < yesterday) {
      // User missed a day, reset streak
      progress.streak = 1;
    }
    
    progress.lastActive = new Date().toISOString();
    saveUserProgress(progress);
  }
};

export const isOnboarded = (): boolean => {
  return getUserProgress() !== null;
};
