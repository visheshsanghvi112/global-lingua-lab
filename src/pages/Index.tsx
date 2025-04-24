
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center px-4 py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="text-primary">Learn Languages</span> the Right Way
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Master new languages step-by-step with interactive lessons, practice exercises, and cultural insights.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Link to="/onboarding">
            <Button size="lg" className="text-lg px-8 py-6">
              Get Started
            </Button>
          </Link>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6">
            Learn More
          </Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 bg-white rounded-xl shadow-sm flex flex-col items-center text-center">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-lg font-bold mb-2">6 Languages</h3>
            <p className="text-gray-600 text-sm">English, Hindi, Gujarati, Marathi, Spanish, and French</p>
          </div>
          
          <div className="p-6 bg-white rounded-xl shadow-sm flex flex-col items-center text-center">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-lg font-bold mb-2">Structured Learning</h3>
            <p className="text-gray-600 text-sm">From beginner to advanced levels with guided progression</p>
          </div>
          
          <div className="p-6 bg-white rounded-xl shadow-sm flex flex-col items-center text-center">
            <div className="text-4xl mb-4">🎮</div>
            <h3 className="text-lg font-bold mb-2">Interactive Practice</h3>
            <p className="text-gray-600 text-sm">Flashcards, quizzes, and pronunciation exercises</p>
          </div>
          
          <div className="p-6 bg-white rounded-xl shadow-sm flex flex-col items-center text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-lg font-bold mb-2">Track Progress</h3>
            <p className="text-gray-600 text-sm">Monitor your learning journey with detailed stats</p>
          </div>
          
          <div className="p-6 bg-white rounded-xl shadow-sm flex flex-col items-center text-center">
            <div className="text-4xl mb-4">🔤</div>
            <h3 className="text-lg font-bold mb-2">Script Learning</h3>
            <p className="text-gray-600 text-sm">Master Devanagari and Gujarati scripts with visual aids</p>
          </div>
          
          <div className="p-6 bg-white rounded-xl shadow-sm flex flex-col items-center text-center">
            <div className="text-4xl mb-4">🔊</div>
            <h3 className="text-lg font-bold mb-2">Pronunciation</h3>
            <p className="text-gray-600 text-sm">Audio guidance and practice for perfect pronunciation</p>
          </div>
        </div>
        
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
          <h2 className="text-2xl font-bold mb-4">Ready to start learning?</h2>
          <p className="text-gray-600 mb-6">
            Join thousands of learners and start your language journey today.
          </p>
          <Link to="/onboarding">
            <Button size="lg">
              Get Started for Free
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
