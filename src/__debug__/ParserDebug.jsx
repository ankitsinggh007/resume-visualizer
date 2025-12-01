import { useResumeParser } from "@/hooks/useResumeParser";

export default function ParserDebug() {
  const { parseFile, text, error, isLoading } = useResumeParser();

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) parseFile(file);
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "20px", marginBottom: "1rem" }}>
        Resume Parser Debug
      </h1>

      <input type="file" onChange={handleUpload} />

      {isLoading && <p>Parsing file…</p>}

      {error && (
        <pre
          style={{
            color: "red",
            marginTop: "1rem",
            whiteSpace: "pre-wrap",
          }}
        >
          {error}
        </pre>
      )}

      {text && (
        <pre
          style={{
            marginTop: "1rem",
            background: "#f7f7f7",
            padding: "1rem",
            borderRadius: "6px",
            whiteSpace: "pre-wrap",
            fontSize: "14px",
          }}
        >
          {text}
        </pre>
      )}
    </div>
  );
}
