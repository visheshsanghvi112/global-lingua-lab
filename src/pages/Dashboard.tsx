
import { useEffect, useState } from "react";
import { useUser } from "@/context/UserContext";
import { englishCourse } from "@/data/courses/english";
import LevelSection from "@/components/LevelSection";
import { Course, Lesson } from "@/types";
import { Button } from "@/components/ui/button";
import { getLanguageInfo } from "@/data/languages";

const Dashboard = () => {
  const { userProgress } = useUser();
  const [course, setCourse] = useState<Course>(englishCourse);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  
  // For the first version, we'll just use the English course
  // Later we can expand to include courses for other languages
  
  useEffect(() => {
    // In a real app, we would fetch the appropriate course here
    // based on the user's learning language
    setCourse(englishCourse);
  }, [userProgress?.learningLanguage]);

  const handleSelectLesson = (lessonId: string) => {
    // Find the selected lesson from the course data
    let foundLesson: Lesson | null = null;
    
    Object.values(course.levels).forEach((level) => {
      const lesson = level.lessons.find((l) => l.id === lessonId);
      if (lesson) {
        foundLesson = lesson;
      }
    });
    
    if (foundLesson) {
      setSelectedLesson(foundLesson);
    }
  };

  const handleBackToDashboard = () => {
    setSelectedLesson(null);
  };
  
  const learningLanguage = userProgress ? getLanguageInfo(userProgress.learningLanguage) : null;
  const completedLessons = userProgress?.completedLessons || [];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
            {learningLanguage?.flag && <span className="text-4xl">{learningLanguage.flag}</span>}
            {learningLanguage?.name} Course
          </h1>
          <p className="text-gray-600">
            Master {learningLanguage?.name} step by step with structured lessons and interactive activities
          </p>
        </div>
        
        {userProgress && (
          <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end">
            <div className="flex items-center gap-4 mb-2">
              <div className="flex items-center gap-1">
                <span className="text-sm">🔥</span>
                <span className="font-medium">{userProgress.streak} day streak</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-sm">⭐</span>
                <span className="font-medium">{userProgress.xp} XP</span>
              </div>
            </div>
            <div className="w-full md:w-72 bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${Math.min((completedLessons.length / 10) * 100, 100)}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              {completedLessons.length} lessons completed
            </p>
          </div>
        )}
      </div>
      
      {selectedLesson ? (
        <div className="animate-fade-in">
          <Button 
            variant="ghost" 
            onClick={handleBackToDashboard}
            className="mb-4"
          >
            ← Back to Dashboard
          </Button>
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h2 className="text-2xl font-bold mb-2">{selectedLesson.title}</h2>
            <p className="text-gray-600 mb-6">{selectedLesson.description}</p>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">Introduction</h3>
              <p className="text-gray-700">{selectedLesson.content.introduction}</p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">Activities</h3>
              <div className="space-y-4">
                {selectedLesson.content.activities.map((activity, index) => (
                  <div 
                    key={activity.id}
                    className="p-4 border rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <h4 className="font-medium">
                      {index + 1}. {activity.title}
                    </h4>
                    <p className="text-sm text-gray-600">{activity.type}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-12">
          {Object.entries(course.levels).map(([level, _]) => (
            <LevelSection
              key={level}
              course={course}
              level={level as any}
              completedLessons={completedLessons}
              onSelectLesson={handleSelectLesson}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
