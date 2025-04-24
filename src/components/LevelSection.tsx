
import { Course, Level } from "@/types";
import LessonCard from "./LessonCard";

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
        return 'level-badge-beginner';
      case 'intermediate':
        return 'level-badge-intermediate';
      case 'advanced':
        return 'level-badge-advanced';
      default:
        return '';
    }
  };
  
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-4">
        <h2 className="text-2xl font-bold capitalize">{levelData.name}</h2>
        <span className={`px-3 py-1 text-xs font-medium rounded-full ${getLevelBadgeClass(level)}`}>
          {level}
        </span>
      </div>
      
      <p className="text-gray-600 mb-6">{levelData.description}</p>
      
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
    </div>
  );
};

export default LevelSection;
