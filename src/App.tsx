import "./assets/scss/style.scss";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PropertyDetail from "./pages/PropertyDetail";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/properties/:id" element={<PropertyDetail />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}

export default App;
