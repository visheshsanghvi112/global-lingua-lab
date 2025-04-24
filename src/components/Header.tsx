
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useUser } from "@/context/UserContext";
import { getLanguageInfo } from "@/data/languages";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

const Header = () => {
  const { userProgress, resetProgress, isOnboarded } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  if (!isOnboarded) {
    return (
      <header className="bg-white shadow-sm py-4 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary">
            LinguaLab
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="#features" className="text-gray-700 hover:text-primary transition-colors">
              Features
            </Link>
            <Link to="#about" className="text-gray-700 hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/onboarding" className="text-gray-700 hover:text-primary transition-colors">
              Get Started
            </Link>
          </nav>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg absolute z-10 left-0 right-0 px-6 py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="#features" className="text-gray-700 hover:text-primary transition-colors">
                Features
              </Link>
              <Link to="#about" className="text-gray-700 hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/onboarding" className="text-gray-700 hover:text-primary transition-colors">
                Get Started
              </Link>
            </nav>
          </div>
        )}
      </header>
    );
  }

  const nativeLanguage = userProgress ? getLanguageInfo(userProgress.nativeLanguage) : null;
  const learningLanguage = userProgress ? getLanguageInfo(userProgress.learningLanguage) : null;

  return (
    <header className="bg-white shadow-sm py-4 px-6 sticky top-0 z-10">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/dashboard" className="text-2xl font-bold text-primary">
            LinguaLab
          </Link>
          
          <nav className="hidden md:flex space-x-6 ml-8">
            <Link to="/dashboard" className="text-gray-700 hover:text-primary transition-colors">
              Dashboard
            </Link>
            <Link to="#dictionary" className="text-gray-700 hover:text-primary transition-colors">
              Dictionary
            </Link>
            <Link to="#practice" className="text-gray-700 hover:text-primary transition-colors">
              Practice
            </Link>
            <Link to="#community" className="text-gray-700 hover:text-primary transition-colors">
              Community
            </Link>
          </nav>
          
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
        
        {isOnboarded && (
          <div className="hidden md:flex items-center gap-4">
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
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute z-10 left-0 right-0 px-6 py-4 border-t">
          <nav className="flex flex-col space-y-4 mb-4">
            <Link to="/dashboard" className="text-gray-700 hover:text-primary transition-colors">
              Dashboard
            </Link>
            <Link to="#dictionary" className="text-gray-700 hover:text-primary transition-colors">
              Dictionary
            </Link>
            <Link to="#practice" className="text-gray-700 hover:text-primary transition-colors">
              Practice
            </Link>
            <Link to="#community" className="text-gray-700 hover:text-primary transition-colors">
              Community
            </Link>
          </nav>
          
          {userProgress && (
            <div className="flex flex-col space-y-2 pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Learning:</span>
                <div className="flex items-center px-3 py-1 rounded-full bg-blue-100">
                  <span className="mr-2">{learningLanguage?.flag}</span>
                  <span className="font-medium">{learningLanguage?.name}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Streak:</span>
                <span className="font-bold text-orange-500">{userProgress.streak} days</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">XP:</span>
                <span className="font-bold text-green-500">{userProgress.xp}</span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={resetProgress}
                className="mt-2"
              >
                Reset Progress
              </Button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
