import { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";

type LanguageOption = {
  label: string;
  value: string;
};

type LanguageSwitcherProps = {
  languages?: LanguageOption[];
  className?: string;
};

const defaultLanguages: LanguageOption[] = [
  {
    label: "English",
    value: "en",
  },
  {
    label: "Hindi",
    value: "hi",
  },
];

const LanguageSwitcher = ({
  languages = defaultLanguages,
  className = "",
}: LanguageSwitcherProps) => {
  const { i18n } = useTranslation();

  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    setSelectedLanguage(savedLanguage);
    i18n.changeLanguage(savedLanguage);
  }, [i18n]);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const language = e.target.value;
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  };

  return (
    <select
      value={selectedLanguage}
      onChange={handleLanguageChange}
      className={`
        border
        rounded-lg
        px-3
        py-2
        text-sm
        outline-none
        bg-white
        cursor-pointer
        ${className}
      `}
    >
      {languages.map((language) => (
        <option key={language.value} value={language.value}>
          {language.label}
        </option>
      ))}
    </select>
  );
};

export default LanguageSwitcher;
