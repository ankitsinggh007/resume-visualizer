/**
 * @typedef {Object} ExtractedSkill
 * @property {string} skill
 */

/**
 * @typedef {Object} InferredSkill
 * @property {string} skill
 * @property {string} reason
 */

/**
 * @typedef {Object} ExtractionResult
 * @property {string} rawSummary
 * @property {ExtractedSkill[]} extractedSkills
 * @property {InferredSkill[]} inferredSkills
 * @property {number|null} experienceYears
 * @property {string} educationLevel
 * @property {string[]} tools
 * @property {string[]} projects
 */

/**
 * The default empty extraction result used for validation and fallbacks.
 * @type {ExtractionResult}
 */
export const EMPTY_EXTRACTION_SCHEMA = {
  rawSummary: "",
  extractedSkills: [],
  inferredSkills: [],
  experienceYears: null,
  educationLevel: "",
  tools: [],
  projects: [],
};
export function repairExtractionSchema(result) {
  if (!result || typeof result !== "object") {
    return { ...EMPTY_EXTRACTION_SCHEMA };
  }

  return {
    rawSummary: result.rawSummary || "",
    extractedSkills: Array.isArray(result.extractedSkills)
      ? result.extractedSkills
          .filter((s) => s && typeof s.skill === "string")
          .map((s) => ({ skill: s.skill.trim() }))
      : [],

    inferredSkills: Array.isArray(result.inferredSkills)
      ? result.inferredSkills
          .filter((s) => s && typeof s.skill === "string")
          .map((s) => ({
            skill: s.skill.trim(),
            reason: s.reason || "",
          }))
      : [],

    experienceYears:
      typeof result.experienceYears === "number"
        ? result.experienceYears
        : null,

    educationLevel:
      typeof result.educationLevel === "string"
        ? result.educationLevel.trim()
        : "",

    tools: Array.isArray(result.tools)
      ? result.tools.filter((t) => typeof t === "string")
      : [],

    projects: Array.isArray(result.projects)
      ? result.projects.filter((p) => typeof p === "string")
      : [],
  };
}
