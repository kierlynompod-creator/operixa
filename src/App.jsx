import { Route, Routes } from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

import Home from "./pages/Home.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import FreeAudit from "./pages/FreeAudit.jsx";
import NotFound from "./pages/NotFound.jsx";

import WebDevelopment from "./pages/services/WebDevelopment.jsx";
import AISolutions from "./pages/services/AISolutions.jsx";
import DigitalMarketing from "./pages/services/DigitalMarketing.jsx";
import ITSupport from "./pages/services/ITSupport.jsx";
import VirtualAssistant from "./pages/services/VirtualAssistant.jsx";

function App() {
  return (
    <>
      <ScrollToTop />

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route
          path="/free-audit"
          element={<FreeAudit />}
        />

        <Route
          path="/services/web-development"
          element={<WebDevelopment />}
        />

        <Route
          path="/services/ai-solutions"
          element={<AISolutions />}
        />

        <Route
          path="/services/digital-marketing"
          element={<DigitalMarketing />}
        />

        <Route
          path="/services/it-support"
          element={<ITSupport />}
        />

        <Route
          path="/services/virtual-assistance"
          element={<VirtualAssistant />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;