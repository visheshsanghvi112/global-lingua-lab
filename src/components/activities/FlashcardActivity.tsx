
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FlashcardContent } from "@/types";
import { cn } from "@/lib/utils";

interface FlashcardActivityProps {
  content: FlashcardContent;
  onComplete: () => void;
}

const FlashcardActivity = ({ content, onComplete }: FlashcardActivityProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [completed, setCompleted] = useState(false);

  const currentCard = content.cards[currentIndex];
  const totalCards = content.cards.length;

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  const handleNext = () => {
    if (currentIndex < totalCards - 1) {
      setCurrentIndex(currentIndex + 1);
      setFlipped(false);
    } else {
      setCompleted(true);
      onComplete();
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setFlipped(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      {completed ? (
        <div className="flex flex-col items-center p-8 text-center">
          <div className="mb-4 text-4xl">🎉</div>
          <h3 className="text-xl font-bold mb-2">Activity Completed!</h3>
          <p className="text-gray-600 mb-6">You've reviewed all flashcards.</p>
          <Button onClick={onComplete}>Continue</Button>
        </div>
      ) : (
        <>
          <div className="flex justify-between w-full mb-4">
            <span className="text-sm font-medium text-gray-500">
              Card {currentIndex + 1} of {totalCards}
            </span>
            <div className="flex gap-1">
              {content.cards.map((_, index) => (
                <div 
                  key={index} 
                  className={cn(
                    "w-2 h-2 rounded-full",
                    index === currentIndex ? "bg-primary" : "bg-gray-200"
                  )}
                />
              ))}
            </div>
          </div>

          <div 
            className={cn(
              "relative w-full max-w-md h-64 perspective-1000 cursor-pointer mb-6",
              "transition-transform duration-500",
              flipped && "rotate-y-180"
            )}
            onClick={handleFlip}
          >
            <div className={cn(
              "absolute w-full h-full rounded-xl p-6 flex flex-col justify-center items-center backface-hidden",
              "bg-white border-2 border-primary/10 shadow-lg",
              flipped && "hidden"
            )}>
              <div className="text-2xl font-bold text-center">{currentCard.front}</div>
              <div className="mt-4 text-gray-500 text-sm">Click to flip</div>
            </div>
            <div className={cn(
              "absolute w-full h-full rounded-xl p-6 flex flex-col justify-center items-center",
              "bg-primary text-white border-2 border-primary shadow-lg backface-hidden",
              !flipped && "hidden"
            )}>
              <div className="text-xl text-center">{currentCard.back}</div>
              <div className="mt-4 text-white/70 text-sm">Click to flip back</div>
            </div>
          </div>

          <div className="flex gap-4">
            <Button 
              variant="outline" 
              disabled={currentIndex === 0}
              onClick={handlePrevious}
            >
              Previous
            </Button>
            <Button onClick={handleNext}>
              {currentIndex < totalCards - 1 ? "Next Card" : "Complete"}
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default FlashcardActivity;
