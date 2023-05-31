
import './App.css';
import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Man from "./pages/man/Man"; 
import About from "./pages/about/About"
import Gallery from "./pages/gallery/Gallery"
import Women from "./pages/women/Women"

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/women" element={<Women />} />
          <Route path="/man" element={<Man />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
