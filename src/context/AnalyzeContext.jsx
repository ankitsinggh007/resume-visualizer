import { createContext, useContext, useState } from "react";
import { extractSkillsMock } from "@/api/mockApi";

const AnalyzeContext = createContext(null);

export function AnalyzeProvider({ children }) {
  const [resumeText, setResumeText] = useState("");
  const [extractionResult, setExtractionResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function runExtraction(rawText) {
    setIsLoading(true);

    // store the raw resume text
    setResumeText(rawText);

    // call mock extractor for now
    const result = await extractSkillsMock(rawText);

    setExtractionResult(result);
    setIsLoading(false);
  }

  return (
    <AnalyzeContext.Provider
      value={{
        resumeText,
        extractionResult,
        isLoading,
        runExtraction,
      }}
    >
      {children}
    </AnalyzeContext.Provider>
  );
}

export function useAnalyze() {
  return useContext(AnalyzeContext);
}
