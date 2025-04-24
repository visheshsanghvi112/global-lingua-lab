
import { Course, Level } from "@/types";
import LessonCard from "./LessonCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface LevelSectionProps {
  course: Course;
  level: Level;
  completedLessons: string[];
  onSelectLesson: (lessonId: string) => void;
}

const LevelSection = ({ course, level, completedLessons, onSelectLesson }: LevelSectionProps) => {
  const levelData = course.levels[level];
  
  // Get level badge class
  const getLevelBadgeClass = (level: Level) => {
    switch (level) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-blue-100 text-blue-800';
      case 'advanced':
        return 'bg-purple-100 text-purple-800';
      default:
        return '';
    }
  };
  
  // Calculate completion percentage
  const totalLessons = levelData.lessons.length;
  const completedLessonsCount = levelData.lessons.filter(lesson => 
    completedLessons.includes(lesson.id)
  ).length;
  
  const completionPercentage = totalLessons > 0 
    ? Math.round((completedLessonsCount / totalLessons) * 100) 
    : 0;
  
  return (
    <Card className="border shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="flex items-center gap-3">
            <CardTitle className="text-2xl capitalize">{levelData.name}</CardTitle>
            <span className={`px-3 py-1 text-xs font-medium rounded-full ${getLevelBadgeClass(level)}`}>
              {level}
            </span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>{completedLessonsCount} of {totalLessons} lessons completed</span>
            <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary" 
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
            <span>{completionPercentage}%</span>
          </div>
        </div>
        <p className="text-gray-600 mt-2">{levelData.description}</p>
      </CardHeader>
      
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {levelData.lessons.map((lesson) => (
            <LessonCard
              key={lesson.id}
              lesson={lesson}
              completed={completedLessons.includes(lesson.id)}
              onClick={() => onSelectLesson(lesson.id)}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default LevelSection;
