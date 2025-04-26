import { Route, Routes } from "react-router";
import "./App.css";
import { Navbar } from "@/shared/ui/components/navbar";
import { PdfUploadPage } from "@/pages/pdf/upload";
import { PdfHistoryPage } from "@/pages/pdf/history";
import { IndexPage } from "@/pages";

export function App() {
  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        <Routes>
          <Route element={<IndexPage />} path="/" />
          <Route path="upload" element={<PdfUploadPage />} />
          <Route path="history" element={<PdfHistoryPage />} />
        </Routes>
      </div>
    </>
  );
}
