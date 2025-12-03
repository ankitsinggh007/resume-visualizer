import { useAnalyze } from "@/context/AnalyzeContext";

export default function Step2ExtractedSkills() {
  const { extractionResult } = useAnalyze();

  if (!extractionResult) {
    return (
      <div className="p-4 text-gray-500">
        No extracted skills found. Please upload a resume.
      </div>
    );
  }

  const { extractedSkills, inferredSkills } = extractionResult;

  return (
    <div className="space-y-6 p-4">
      {/* Header */}
      <div>
        <h2 className="text-xl font-semibold">Extracted Skills</h2>
        <p className="text-sm text-gray-500">
          These skills were detected directly from your resume.
        </p>
      </div>

      {/* Extracted Skill List */}
      <div className="flex flex-wrap gap-2">
        {extractedSkills.length === 0 ? (
          <span className="text-sm text-gray-500">
            No explicit skills detected.
          </span>
        ) : (
          extractedSkills.map((item, idx) => (
            <span
              key={idx}
              className="flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700"
            >
              {item.skill}
            </span>
          ))
        )}
      </div>

      {/* Inferred Skills Section */}
      <div>
        <h3 className="mt-6 text-lg font-medium">Inferred Skills</h3>
        <p className="text-sm text-gray-500">
          Based on context from your resume.
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {inferredSkills.length === 0 ? (
            <span className="text-sm text-gray-500">
              No inferred skills detected.
            </span>
          ) : (
            inferredSkills.map((item, idx) => (
              <span
                key={idx}
                title={item.reason}
                className="rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-700"
              >
                {item.skill}
              </span>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
