
import { Button } from "@/components/ui/button";
import { Lesson } from "@/types";
import { cn } from "@/lib/utils";

interface LessonCardProps {
  lesson: Lesson;
  completed?: boolean;
  onClick: () => void;
}

const LessonCard = ({ lesson, completed, onClick }: LessonCardProps) => {
  // Get icon based on lesson type
  const getLessonTypeIcon = (type: string) => {
    switch (type) {
      case 'vocabulary':
        return '📚';
      case 'grammar':
        return '📝';
      case 'conversation':
        return '💬';
      case 'pronunciation':
        return '🔊';
      case 'writing':
        return '✍️';
      case 'quiz':
        return '❓';
      default:
        return '📖';
    }
  };

  return (
    <div 
      className={cn(
        "relative p-5 border rounded-xl transition-all hover:shadow-md",
        completed ? "bg-green-50 border-green-200" : "bg-white"
      )}
    >
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xl">{getLessonTypeIcon(lesson.type)}</span>
            <h3 className="font-bold text-lg">{lesson.title}</h3>
          </div>
          <p className="text-sm text-gray-600 mb-4">{lesson.description}</p>
          <div className="flex items-center text-xs text-gray-500 gap-3">
            <span>⏱️ {lesson.duration} min</span>
            <span>{lesson.content.activities.length} activities</span>
          </div>
        </div>
        
        {completed && (
          <div className="bg-green-100 text-green-800 rounded-full p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        )}
      </div>
      
      <div className="mt-4">
        <Button 
          onClick={onClick}
          className="w-full"
          variant={completed ? "outline" : "default"}
        >
          {completed ? "Review Lesson" : "Start Lesson"}
        </Button>
      </div>
    </div>
  );
};

export default LessonCard;
