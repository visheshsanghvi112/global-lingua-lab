
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useUser } from "@/context/UserContext";
import { languages } from "@/data/languages";
import LanguageCard from "@/components/LanguageCard";
import { Language } from "@/types";

const Onboarding = () => {
  const { setUserLanguages } = useUser();
  const [step, setStep] = useState(1);
  const [nativeLanguage, setNativeLanguage] = useState<Language | null>(null);
  const [learningLanguage, setLearningLanguage] = useState<Language | null>(null);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleComplete = () => {
    if (nativeLanguage && learningLanguage) {
      setUserLanguages(nativeLanguage, learningLanguage);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-center mb-2">Welcome to LinguaLab</h1>
      <p className="text-center text-gray-600 mb-8">Let's set up your learning journey</p>
      
      {step === 1 && (
        <div className="mb-8 animate-fade-in">
          <h2 className="text-2xl font-bold mb-4">What language do you speak?</h2>
          <p className="text-gray-600 mb-6">
            Select your native language to help us personalize your learning experience.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {languages.map((language) => (
              <LanguageCard
                key={language.id}
                language={language}
                selected={nativeLanguage === language.id}
                onClick={() => setNativeLanguage(language.id as Language)}
              />
            ))}
          </div>
          
          <div className="flex justify-end mt-8">
            <Button 
              onClick={handleNextStep}
              disabled={!nativeLanguage}
              size="lg"
            >
              Continue
            </Button>
          </div>
        </div>
      )}
      
      {step === 2 && (
        <div className="mb-8 animate-fade-in">
          <h2 className="text-2xl font-bold mb-4">What language would you like to learn?</h2>
          <p className="text-gray-600 mb-6">
            Choose a language to start your learning journey.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {languages
              .filter(language => language.id !== nativeLanguage)
              .map((language) => (
                <LanguageCard
                  key={language.id}
                  language={language}
                  selected={learningLanguage === language.id}
                  onClick={() => setLearningLanguage(language.id as Language)}
                />
              ))}
          </div>
          
          <div className="flex justify-between mt-8">
            <Button 
              variant="outline" 
              onClick={handlePreviousStep}
              size="lg"
            >
              Back
            </Button>
            <Button 
              onClick={handleComplete}
              disabled={!learningLanguage}
              size="lg"
            >
              Start Learning
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Onboarding;
