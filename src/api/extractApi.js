export async function extractSkillsFromResume(rawText) {
  try {
    const res = await fetch("/api/extract", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ rawText }),
    });

    return await res.json();
  } catch (error) {
    console.error("Frontend → extract API failed:", error);
    return EMPTY_EXTRACTION_SCHEMA;
  }
}

