import reactJuniorUnicorn from "./react_junior_unicorn.json" assert { type: "json" };
import reactSeniorUnicorn from "./react_unicorn_senior.json" assert { type: "json" };
// 🔥 Registry for all benchmarks we will add in the future
// Keys MUST match how you store user selections in AnalyzeContext
const BENCHMARK_REGISTRY = {
  "react:junior:unicorn": reactJuniorUnicorn,
  "react:senior:unicorn": reactSeniorUnicorn,
};

/**
 * Returns benchmark object matching (role, level, companyType)
 *
 * @param {string} role - e.g. "react"
 * @param {string} level - e.g. "junior"
 * @param {string} companyType - e.g. "unicorn"
 */

export function loadBenchmark(role, level, companyType) {
  const key = `${role}:${level}:${companyType}`;

  const benchmark = BENCHMARK_REGISTRY[key];

  if (!benchmark) {
    console.warn("⚠ Benchmark not found for:", key);
    return null;
  }

  return benchmark;
}
