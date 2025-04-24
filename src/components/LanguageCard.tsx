
import { LanguageInfo } from "@/types";
import { cn } from "@/lib/utils";

interface LanguageCardProps {
  language: LanguageInfo;
  selected?: boolean;
  onClick?: () => void;
}

const LanguageCard = ({ language, selected, onClick }: LanguageCardProps) => {
  return (
    <div 
      className={cn(
        `lang-card lang-card-${language.id}`,
        selected && "ring-2 ring-offset-2",
        selected && `ring-${language.id}`,
        "cursor-pointer"
      )}
      onClick={onClick}
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="text-3xl">{language.flag}</div>
        <div>
          <h3 className="text-lg font-bold">{language.name}</h3>
          <p className="text-sm font-medium opacity-75">{language.nativeName}</p>
        </div>
      </div>
      <p className="text-sm text-gray-600">{language.description}</p>
      {language.script && (
        <div className="mt-2 text-xs text-gray-500">
          Writing system: {language.script}
        </div>
      )}
    </div>
  );
};

export default LanguageCard;
