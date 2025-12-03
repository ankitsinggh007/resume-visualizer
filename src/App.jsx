import ParserDebug from "./__debug__/ParserDebug";
import Test from "./__debug__/ExtractionDebug";
import { AnalyzeProvider } from "./context/AnalyzeContext";
function App() {
  return (
    <AnalyzeProvider>
      <App />
    </AnalyzeProvider>
  );
}

export default App;
