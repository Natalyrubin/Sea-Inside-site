import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Default from "./layouts/Default/Default";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Default />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFoundPage />} /> {/* עמוד 404 ברירת מחדל */}
      </Routes>
    </Router>
  );
}
