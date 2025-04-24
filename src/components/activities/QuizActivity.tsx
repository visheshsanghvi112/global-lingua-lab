
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { QuizContent } from "@/types";
import { cn } from "@/lib/utils";

interface QuizActivityProps {
  content: QuizContent;
  onComplete: () => void;
}

const QuizActivity = ({ content, onComplete }: QuizActivityProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [completed, setCompleted] = useState(false);

  const currentQuestion = content.questions[currentQuestionIndex];
  const totalQuestions = content.questions.length;
  const isCorrect = selectedOption === currentQuestion.correctAnswer;

  const handleOptionSelect = (index: number) => {
    if (!isAnswerSubmitted) {
      setSelectedOption(index);
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedOption !== null) {
      setIsAnswerSubmitted(true);
      if (isCorrect) {
        setCorrectAnswers(correctAnswers + 1);
      }
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      setCompleted(true);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {completed ? (
        <div className="flex flex-col items-center p-8 text-center">
          <div className="mb-4 text-4xl">
            {correctAnswers === totalQuestions ? "🏆" : correctAnswers > totalQuestions / 2 ? "🎉" : "🤔"}
          </div>
          <h3 className="text-xl font-bold mb-2">Quiz Completed!</h3>
          <p className="text-gray-600 mb-2">
            You got {correctAnswers} out of {totalQuestions} questions correct.
          </p>
          <p className="mb-6">
            Score: {Math.round((correctAnswers / totalQuestions) * 100)}%
          </p>
          <Button onClick={onComplete}>Continue</Button>
        </div>
      ) : (
        <div>
          <div className="flex justify-between mb-6">
            <span className="text-sm font-medium text-gray-500">
              Question {currentQuestionIndex + 1} of {totalQuestions}
            </span>
            <span className="text-sm font-medium text-gray-500">
              Score: {correctAnswers} / {currentQuestionIndex + (isAnswerSubmitted ? 1 : 0)}
            </span>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4">{currentQuestion.question}</h3>
            
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <div
                  key={index}
                  className={cn(
                    "p-4 rounded-lg border-2 cursor-pointer transition-all",
                    !isAnswerSubmitted && selectedOption === index
                      ? "border-blue-300 bg-blue-50"
                      : !isAnswerSubmitted
                        ? "border-gray-200 hover:border-gray-300"
                        : index === currentQuestion.correctAnswer
                          ? "border-green-300 bg-green-50"
                          : selectedOption === index
                            ? "border-red-300 bg-red-50"
                            : "border-gray-200 opacity-70"
                  )}
                  onClick={() => handleOptionSelect(index)}
                >
                  {option}
                </div>
              ))}
            </div>
          </div>

          {isAnswerSubmitted && currentQuestion.explanation && (
            <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="font-medium mb-1">Explanation:</p>
              <p className="text-gray-700">{currentQuestion.explanation}</p>
            </div>
          )}

          <div className="flex justify-between">
            {!isAnswerSubmitted ? (
              <Button
                onClick={handleSubmitAnswer}
                disabled={selectedOption === null}
              >
                Submit Answer
              </Button>
            ) : (
              <Button onClick={handleNextQuestion}>
                {currentQuestionIndex < totalQuestions - 1 ? "Next Question" : "Finish Quiz"}
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizActivity;
