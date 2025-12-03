import { extractSkillsFromResume } from "@/api/analyzeSkill.jsx";

async function test() {
  const res = await extractSkillsFromResume(
    "Ankit has 2 years of React experience..."
  );
  console.log(res);
}

export default function Test() {
  return <button onClick={test}>Test Call 1</button>;
}
