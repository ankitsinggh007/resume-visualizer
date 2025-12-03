import mockData from "@/mock/extractionResult.json";

export async function extractSkillsMock(rawText) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData);
    }, 600); // artificial delay for realism
  });
}
