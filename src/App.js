// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './Components/Navbar/Navbar';
// import Footer from './Components/Footer/Footer';
// import Careers from './Components/Pages/Careers';
// import AboutUs from './Components/Pages/AboutUs';
// import Services from './Components/Pages/Services';
// import ContactUs from './Components/Pages/ContactUs';
// import TitleManager from './Components/Pages/TitleManager';
// import GuidewireSolutions from './Components/Offerings/ComprehensiveSolutions';
// import QualityAssurance from './Components/Offerings/QualityAssurance';
// import MuleSoftInte from './Components/Offerings/MuleSoftInte';
// import CcmSmartComm from './Components/Offerings/CcmSmartComm';
// import PersonalLines from './Components/Sectors/PersonalLines';
// import CommercialLines from './Components/Sectors/CommercialLines';
// import SpecialtyLines from './Components/Sectors/SpecialtyLines';
// import Reinsurers from './Components/Sectors/Reinsurers';
// import WorkersCompensation from './Components/Sectors/WorkersCompensation';
// import Home from './Components/Pages/Home';
// import Location from './Components/Footer/Location';
// import BureauIntegration from './Components/Offerings/BureauIntegration';

// function App() {

//   return (
//     <div className="App">
//       <Router>

//         <div className="main-content">
//                   <Navbar  />

//            <TitleManager />
//           <Routes>
//             <Route path='/' element={<Home/>}></Route>
//             {/* <Route path='/offerings' element={<Offerings />}></Route> */}
//             <Route path='/guidewireservices&solutions' element={<GuidewireSolutions />}></Route>
//             <Route path='/quality-assurance' element={<QualityAssurance />}></Route>
//             <Route path='/mulesoftintegration' element={<MuleSoftInte />}></Route>
//             <Route path='/ccmwithsmartcomm' element={<CcmSmartComm />}></Route>
//             <Route path='/personal-lines' element={<PersonalLines />}></Route>
//             <Route path='/commercial-lines' element={<CommercialLines />}></Route>
//             <Route path='/specialty-lines' element={<SpecialtyLines />}></Route>
//             <Route path='/reinsurers' element={<Reinsurers />}></Route>
//             <Route path='/bereauIntegration' element={<BureauIntegration />}></Route>
//             <Route path='/workers-compensation' element={<WorkersCompensation />}></Route>
//             <Route path='/Career' element={<Careers />}></Route>
//             <Route path='/aboutUs' element={<AboutUs/>} ></Route>
//             <Route path='/Location' element={<Location />} ></Route>
//             <Route path='/services' element={<Services />}></Route>
//             <Route path='/contactUs' element ={<ContactUs/>}></Route>
//           </Routes>
//                   <Footer />

//         </div>

//       </Router>
//     </div>
//   );
// }

// export default App;



import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Careers from './Components/Pages/Careers';
import AboutUs from './Components/Pages/AboutUs';
import Services from './Components/Pages/Services';
import ContactUs from './Components/Pages/ContactUs';
import TitleManager from './Components/Pages/TitleManager';
import GuidewireSolutions from './Components/Offerings/ComprehensiveSolutions';
import QualityAssurance from './Components/Offerings/QualityAssurance';
import CcmSmartComm from './Components/Offerings/CcmSmartComm';
import PersonalLines from './Components/Sectors/PersonalLines';
import CommercialLines from './Components/Sectors/CommercialLines';
import SpecialtyLines from './Components/Sectors/SpecialtyLines';
import Reinsurers from './Components/Sectors/Reinsurers';
import WorkersCompensation from './Components/Sectors/WorkersCompensation';
import Home from './Components/Pages/Home';
import Location from './Components/Footer/Location';
import BureauIntegration from './Components/Offerings/BureauIntegration';
import ScrollToTop from './Components/Pages/ScrollToTop';
import APIIntegration from './Components/Offerings/APIIntegration';

// Create a wrapper component that is inside the Router
function AppContent() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/contactUs") {
      document.body.classList.add("contact-page");
    } else {
      document.body.classList.remove("contact-page");
    }
  }, [location]);

  return (
    <div className="main-content">
      <Navbar />
      <TitleManager />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/guidewireservices&solutions' element={<GuidewireSolutions />} />
        <Route path='/quality-assurance' element={<QualityAssurance />} />
        <Route path='/mulesoftintegration' element={<APIIntegration />} />
        <Route path='/ccmwithsmartcomm' element={<CcmSmartComm />} />
        <Route path='/personal-lines' element={<PersonalLines />} />
        <Route path='/commercial-lines' element={<CommercialLines />} />
        <Route path='/specialty-lines' element={<SpecialtyLines />} />
        <Route path='/reinsurers' element={<Reinsurers />} />
        <Route path='/bereauIntegration' element={<BureauIntegration />} />
        <Route path='/workers-compensation' element={<WorkersCompensation />} />
        <Route path='/career' element={<Careers />} />
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/Location' element={<Location />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contactUs' element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;


