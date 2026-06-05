import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import LandingHeader from './components/landing-page/landing-header';
import LandingHero from './components/landing-page/landing-hero';
import LandingFooter from './components/landing-page/landing-footer';
import Pdf1Page from './pages/pdf-1';
import Pdf2Page from './pages/pdf-2';
import FaqPage from './pages/faq';
import './App.css';

function ScrollHandler() {
  const location = useLocation();

  useEffect(() => {
    let sectionId = '';
    if (location.hash) {
      sectionId = location.hash.substring(1);
    } else if (location.pathname.length > 1) {
      sectionId = location.pathname.substring(1);
    }

    if (sectionId && ['about', 'tokenomics', 'roadmap', 'teams'].includes(sectionId)) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerOffset = 110;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 300); // 300ms to ensure the page has rendered
    } else if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return null;
}

function HomePage() {
  return (
    <>
      <LandingHeader />
      <LandingHero />
      <LandingFooter />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollHandler />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<HomePage />} />
        <Route path="/tokenomics" element={<HomePage />} />
        <Route path="/roadmap" element={<HomePage />} />
        <Route path="/teams" element={<HomePage />} />
        <Route path="/pdf-1" element={<Pdf1Page />} />
        <Route path="/pdf-2" element={<Pdf2Page />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
