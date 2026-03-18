import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Eixos from "./pages/Eixos";
import Musicas from "./pages/Musicas";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/eixos" element={<Eixos />} />
            <Route path="/musicas/:slug" element={<Musicas />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
