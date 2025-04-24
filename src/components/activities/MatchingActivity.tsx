
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MatchingContent } from "@/types";
import { cn } from "@/lib/utils";

interface MatchingActivityProps {
  content: MatchingContent;
  onComplete: () => void;
}

const MatchingActivity = ({ content, onComplete }: MatchingActivityProps) => {
  const [pairs, setPairs] = useState<MatchingContent['pairs']>([]);
  const [selectedTerm, setSelectedTerm] = useState<string | null>(null);
  const [selectedMatch, setSelectedMatch] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [completed, setCompleted] = useState(false);

  // Initialize randomized pairs
  useEffect(() => {
    const shuffledPairs = [...content.pairs].sort(() => Math.random() - 0.5);
    setPairs(shuffledPairs);
  }, [content.pairs]);

  // Check if term and match are correctly paired
  useEffect(() => {
    if (selectedTerm && selectedMatch) {
      const selectedPair = pairs.find(pair => pair.term === selectedTerm && pair.match === selectedMatch);
      
      if (selectedPair) {
        // Correct match
        setMatchedPairs([...matchedPairs, selectedTerm]);
      }
      
      // Reset selections after a short delay
      setTimeout(() => {
        setSelectedTerm(null);
        setSelectedMatch(null);
        
        // Check if all pairs are matched
        if (matchedPairs.length + (selectedPair ? 1 : 0) === pairs.length) {
          setCompleted(true);
        }
      }, 500);
    }
  }, [selectedTerm, selectedMatch, pairs, matchedPairs]);

  const handleTermClick = (term: string) => {
    if (!matchedPairs.includes(term)) {
      setSelectedTerm(term);
    }
  };

  const handleMatchClick = (match: string) => {
    if (selectedTerm && !matchedPairs.find(term => {
      const pair = pairs.find(p => p.term === term);
      return pair && pair.match === match;
    })) {
      setSelectedMatch(match);
    }
  };

  return (
    <div className="flex flex-col items-center">
      {completed ? (
        <div className="flex flex-col items-center p-8 text-center">
          <div className="mb-4 text-4xl">🎉</div>
          <h3 className="text-xl font-bold mb-2">Great Job!</h3>
          <p className="text-gray-600 mb-6">You've matched all the pairs correctly!</p>
          <Button onClick={onComplete}>Continue</Button>
        </div>
      ) : (
        <div className="w-full">
          <p className="text-center mb-8 text-gray-600">
            Match each term on the left with its corresponding definition on the right.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Terms column */}
            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-bold mb-2">Terms</h3>
              {pairs.map((pair) => (
                <div
                  key={`term-${pair.term}`}
                  className={cn(
                    "p-4 rounded-lg border-2 transition-all",
                    matchedPairs.includes(pair.term)
                      ? "bg-green-50 border-green-200 opacity-60"
                      : selectedTerm === pair.term
                        ? "bg-blue-50 border-blue-300"
                        : "bg-white border-gray-200 hover:border-gray-300 cursor-pointer"
                  )}
                  onClick={() => handleTermClick(pair.term)}
                >
                  {pair.term}
                </div>
              ))}
            </div>
            
            {/* Matches column */}
            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-bold mb-2">Definitions</h3>
              {pairs
                .map(pair => pair.match)
                .sort(() => Math.random() - 0.5)
                .map((match) => {
                  const isMatched = pairs.some(pair => 
                    matchedPairs.includes(pair.term) && pair.match === match
                  );
                  
                  return (
                    <div
                      key={`match-${match}`}
                      className={cn(
                        "p-4 rounded-lg border-2 transition-all",
                        isMatched
                          ? "bg-green-50 border-green-200 opacity-60"
                          : selectedMatch === match
                            ? "bg-blue-50 border-blue-300"
                            : "bg-white border-gray-200 hover:border-gray-300 cursor-pointer"
                      )}
                      onClick={() => handleMatchClick(match)}
                    >
                      {match}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MatchingActivity;
