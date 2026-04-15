import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./home/Home";
import Footer from "./components/Footer";
import CenterHome from "./center/CenterHome";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ocentru" element={<CenterHome />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
