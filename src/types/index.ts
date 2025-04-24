
export type Language = 'english' | 'hindi' | 'gujarati' | 'marathi' | 'spanish' | 'french';

export type Level = 'beginner' | 'intermediate' | 'advanced';

export type LessonType = 'vocabulary' | 'grammar' | 'conversation' | 'pronunciation' | 'writing' | 'quiz';

export interface LanguageInfo {
  id: Language;
  name: string;
  nativeName: string;
  flag: string;
  description: string;
  color: string; // For styling
  script?: string; // Writing system name
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  type: LessonType;
  content: LessonContent;
  duration: number; // In minutes
  completed?: boolean;
}

export interface LessonContent {
  introduction: string;
  activities: Activity[];
}

export type ActivityType = 'flashcards' | 'matching' | 'listening' | 'speaking' | 'writing' | 'quiz';

export interface Activity {
  id: string;
  type: ActivityType;
  title: string;
  instructions: string;
  content: any; // Specific to activity type
  completed?: boolean;
}

export interface FlashcardContent {
  cards: {
    front: string;
    back: string;
    audio?: string;
  }[];
}

export interface MatchingContent {
  pairs: {
    term: string;
    match: string;
  }[];
}

export interface QuizContent {
  questions: {
    question: string;
    options: string[];
    correctAnswer: number;
    explanation?: string;
  }[];
}

export interface Course {
  language: Language;
  levels: {
    [key in Level]: {
      name: string;
      description: string;
      lessons: Lesson[];
    };
  };
}

export interface UserProgress {
  nativeLanguage: Language;
  learningLanguage: Language;
  completedLessons: string[];
  completedActivities: string[];
  streak: number;
  lastActive: string; // ISO date
  xp: number;
}

export interface UserSettings {
  darkMode: boolean;
  soundEnabled: boolean;
  dailyGoal: number; // Minutes per day
  reminderEnabled: boolean;
  reminderTime?: string; // HH:MM format
}
