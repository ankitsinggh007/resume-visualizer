import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="*" element={<div>404 – Not Found</div>} />
      </Routes>
  );
}
