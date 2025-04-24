
import { LanguageInfo } from "@/types";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface LanguageCardProps {
  language: LanguageInfo;
  selected?: boolean;
  onClick?: () => void;
}

const LanguageCard = ({ language, selected, onClick }: LanguageCardProps) => {
  // Dynamically create background and border styles based on language id
  const getBackgroundStyle = (id: string, selected: boolean) => {
    const baseClasses = "transition-all duration-200 cursor-pointer";
    const selectedClasses = selected ? "transform translate-y-[-5px] shadow-lg" : "hover:shadow-md";
    
    return cn(
      baseClasses,
      selectedClasses,
      selected && "ring-2 ring-offset-2",
      selected && `ring-${language.id}`
    );
  };

  return (
    <Card 
      className={getBackgroundStyle(language.id, !!selected)}
      onClick={onClick}
    >
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          <div className="text-3xl">{language.flag}</div>
          <div>
            <h3 className="text-lg font-bold">{language.name}</h3>
            <p className="text-sm font-medium text-gray-500">{language.nativeName}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 mb-3">{language.description}</p>
        {language.script && (
          <div className="text-xs text-gray-500 flex items-center gap-1">
            <span className="font-medium">Writing system:</span>
            <span>{language.script}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default LanguageCard;
