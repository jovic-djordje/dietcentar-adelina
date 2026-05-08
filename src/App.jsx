import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./home/Home";
import Footer from "./components/Footer";
import CenterHome from "./center/CenterHome";
import Contact from "./contact/Contact";
import Offers from "./offers/Offers";
import ScrollToTop from "./ScrollToTop";
import About from "./about/About";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ocentru" element={<CenterHome />} />
        <Route path="/omeni" element={<About />} />
        <Route path="/usluge" element={<Offers />} />
        <Route path="/kontakt" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
