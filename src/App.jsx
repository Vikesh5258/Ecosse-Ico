import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingHeader from './components/landing-page/landing-header';
import LandingHero from './components/landing-page/landing-hero';
import LandingFooter from './components/landing-page/landing-footer';
import Pdf1Page from './pages/pdf-1';
import Pdf2Page from './pages/pdf-2';
import FaqPage from './pages/faq';
import './App.css';

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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pdf-1" element={<Pdf1Page />} />
        <Route path="/pdf-2" element={<Pdf2Page />} />
        <Route path="/faq" element={<FaqPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
