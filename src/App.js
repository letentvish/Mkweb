import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import NavBar from './NewRedesignedApplication/Components/NewNavbar';
import Home from "./NewRedesignedApplication/NewHome/Home";
import About from './NewRedesignedApplication/NewAbout/About';
import FooterComponent from './NewRedesignedApplication/Components/NewFooter';
import NewMile from './NewRedesignedApplication/NewMile/Mile';
import ContactUs from './Pages/ContactUs';
import RaiseRequest from './Pages/RaiseRequest';
import Blog from './Pages/Blog';
import MasterclassLanding from './Pages/MasterclassLanding';
import WorkshopLanding from './Pages/WorkshopLanding';
import DataNix from './NewRedesignedApplication/Datanix/DataNix';
import Carve from './Carve/Carve';
import Preloader from './Components/Preloader';
import ScrollToTop from './Components/ScrollToTop';
import CorporateConsulting from './NewRedesignedApplication/CorporateConsulting/Corporateconsulting';
import AIProctor from './NewRedesignedApplication/AIProctor/AIProctor';
import SaasLanding from './NewRedesignedApplication/SAAS/SaasLanding';
import AssessmentPage from './NewRedesignedApplication/Assessment/AssessmentPage';
import PalbonPage from './NewRedesignedApplication/Palbon/PalbonPage';
import DesignSystemPage from './NewRedesignedApplication/DesignSystem/DesignSystemPage';
import useNavigationStore from './store/navigationStore';

// Component that decides what to show on home route
function HomeRoute() {
  const { isSaasContext } = useNavigationStore();
  return isSaasContext ? <SaasLanding /> : <Home />;
}

// Layout component that conditionally renders navbar and footer
function Layout() {
  const location = useLocation();
  const hideNavFooterPaths = ['/nlp-masterclass-experience', '/2-day-nlp-workshop', '/palbon', '/palbon-suites'];
  const shouldHideNavFooter = hideNavFooterPaths.includes(location.pathname);

  return (
    <>
      {!shouldHideNavFooter && <NavBar />}
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="/about" element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/raise-request' element={<RaiseRequest />} />
        <Route path='/mile' element={<NewMile />} />
        <Route path='/datanix' element={<DataNix />} />
        <Route path='/carve' element={<Carve />} />
        <Route path='/corporate-consulting' element={<CorporateConsulting />} />
        <Route path='/ai-proctor' element={<AIProctor />} />
        <Route path='/assessment' element={<AssessmentPage />} />
        <Route path='/palbon' element={<PalbonPage />} />
        <Route path='/palbon-suites' element={<PalbonPage />} />
        <Route path='/design-system' element={<DesignSystemPage />} />
        <Route path='/nlp-masterclass-experience' element={<MasterclassLanding />} />
        <Route path='/2-day-nlp-workshop' element={<WorkshopLanding />} />

        {/* Catch-all route - redirect undefined paths to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {!shouldHideNavFooter && <FooterComponent />}
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [minTimePassed, setMinTimePassed] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {
      setMinTimePassed(true);
    }, 1500);

    const handlePageLoad = () => {
      if (minTimePassed) {
        setLoading(false);
      } else {
        const checkInterval = setInterval(() => {
          if (minTimePassed) {
            setLoading(false);
            clearInterval(checkInterval);
          }
        }, 100);
      }
    };

    if (document.readyState === 'complete') {
      handlePageLoad();
    } else {
      window.addEventListener('load', handlePageLoad);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', handlePageLoad);
    };
  }, [minTimePassed]);

  if (loading) return <Preloader />;

  return (
    <Router>
      <ScrollToTop />
      <Layout />
    </Router>
  );
}

export default App;