
import { Button } from "@/components/ui/button";
import { useUser } from "@/context/UserContext";
import { getLanguageInfo } from "@/data/languages";

const Header = () => {
  const { userProgress, resetProgress, isOnboarded } = useUser();
  
  if (!isOnboarded) {
    return <div className="py-4"></div>;
  }

  const nativeLanguage = userProgress ? getLanguageInfo(userProgress.nativeLanguage) : null;
  const learningLanguage = userProgress ? getLanguageInfo(userProgress.learningLanguage) : null;

  return (
    <header className="flex items-center justify-between py-4 px-6 bg-white shadow-sm">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold text-primary">LinguaLab</span>
      </div>
      
      {isOnboarded && (
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <span className="text-sm font-medium mr-2">Learning:</span>
            <div className="flex items-center px-3 py-1 rounded-full bg-blue-100">
              <span className="mr-2">{learningLanguage?.flag}</span>
              <span className="font-medium">{learningLanguage?.name}</span>
            </div>
          </div>
          
          {userProgress && (
            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-1">
                <span className="text-sm font-medium">Streak:</span>
                <span className="font-bold text-orange-500">{userProgress.streak} days</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-sm font-medium">XP:</span>
                <span className="font-bold text-green-500">{userProgress.xp}</span>
              </div>
            </div>
          )}
          
          <Button
            variant="outline"
            size="sm"
            onClick={resetProgress}
          >
            Reset
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
