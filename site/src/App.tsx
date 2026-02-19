import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MainLayout from './components/layout/MainLayout';
import IRLayout from './components/layout/IRLayout';

// Main site pages
import Home from './pages/main/Home';
import Solutions from './pages/main/Solutions';
import Performance from './pages/main/Performance';
import Company from './pages/main/Company';
import Resources from './pages/main/Resources';
import Contact from './pages/main/Contact';

// IR pages
import IRHome from './pages/ir/IRHome';
import InvestmentHighlights from './pages/ir/InvestmentHighlights';
import Financials from './pages/ir/Financials';
import IRTrackRecord from './pages/ir/IRTrackRecord';
import IRNews from './pages/ir/IRNews';
import Library from './pages/ir/Library';
import Calendar from './pages/ir/Calendar';

// ScrollToTop component to handle scroll restoration on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <HelmetProvider>
      <Router basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        <Routes>
          {/* Main Site - Brand/Service focused */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/performance" element={<Performance />} />
            <Route path="/company" element={<Company />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
          </Route>

          {/* IR Section - Investor focused */}
          <Route path="/ir" element={<IRLayout />}>
            <Route index element={<IRHome />} />
            <Route path="investment-highlights" element={<InvestmentHighlights />} />
            <Route path="financials" element={<Financials />} />
            <Route path="track-record" element={<IRTrackRecord />} />
            <Route path="news" element={<IRNews />} />
            <Route path="library" element={<Library />} />
            <Route path="calendar" element={<Calendar />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
