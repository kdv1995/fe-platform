import { Route, Routes } from "react-router";
import "./App.css";
import IndexPage from "../pages";
import PdfHistoryPage from "../pages/pdf/history";

function App() {
  return (
    <>
      <Routes>
        <Route element={<IndexPage />} path="/" />
        <Route path="pdf">
          <Route path="history" element={<PdfHistoryPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
