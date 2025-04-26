import { Route, Routes } from "react-router";
import "./App.css";
import IndexPage from "../pages";
import PdfPage from "@/pages/pdf";
import PdfUploadPage from "@/pages/pdf/upload";
import PdfHistoryPage from "@/pages/pdf/history";
import Navbar from "@/shared/ui/components/navbar";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        <Routes>
          <Route element={<IndexPage />} path="/" />
          <Route path="pdf" element={<PdfPage />} />
          <Route path="upload" element={<PdfUploadPage />} />
          <Route path="history" element={<PdfHistoryPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
