import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollProgress from "./components/layout/ScrollProgress";
import ScrollToTop from "./components/layout/ScrollToTop";
import Home from "./pages/Home";
import PracticeAreas from "./pages/PracticeAreas";
import PracticeAreaDetail from "./pages/PracticeAreaDetail";
import ComingSoon from "./pages/ComingSoon";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Insights from "./pages/Insights";
import InsightDetail from "./pages/InsightDetail";
import Careers from "./pages/Careers";
export default function App() {
  return (
    <BrowserRouter>
      <ScrollProgress />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<InsightDetail />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/privacy"
            element={<ComingSoon title="Privacy Policy" />}
          />
          <Route path="/terms" element={<ComingSoon title="Terms" />} />
          <Route path="/practice-areas" element={<PracticeAreas />} />
          <Route
            path="/practice-areas/:slug"
            element={<PracticeAreaDetail />}
          />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </BrowserRouter>
  );
}
